"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IMaskInput } from "react-imask";
import { useLead } from "@/context/LeadContext";
import { sendLeadToCRM, LeadData } from "@/lib/crm";
import { X, Send, Loader2, User, Mail, Phone, AlertCircle } from "lucide-react";

const leadSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(14, "Telefone incompleto"), // (00) 00000-0000
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadModal() {
  const { isOpen, closeModal, whatsappUrl, tracking } = useLead();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      reset();
    }
  }, [isOpen, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: LeadFormValues) => {
    setIsLoading(true);

    // Lógica de Origem baseada na GENERAL_SPEC.md
    let origem = "Orgânico";
    if (tracking.gclid) {
      origem = "Google Ads";
    } else if (tracking.utm_source === "facebook" || tracking.utm_source === "instagram" || tracking.fbclid) {
      origem = "Social Ads";
    } else if (tracking.utm_source) {
      origem = tracking.utm_source;
    }

    const leadData: LeadData = {
      ...data,
      ...tracking,
      origem: origem,
      metadados: {
        url_conversao: whatsappUrl,
        data_hora: new Date().toISOString(),
        hostname: window.location.hostname,
      },
    };

    try {
      // 1. Enviar para o CRM
      try {
        await sendLeadToCRM(leadData);
      } catch (crmError) {
        console.error("Erro ao enviar para o CRM:", crmError);
      }

      // 2. Registrar conversão no Google Ads
      if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion(null, {
          email: data.email,
          phone: data.telefone
        });
      }
    } catch (error) {
      console.error("Falha ao processar lead:", error);
    } finally {
      // 3. Sempre redireciona para o WhatsApp e fecha o modal
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      closeModal();
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl overflow-hidden border border-secondary/20">
        <div className="bg-primary p-6 flex justify-between items-center text-white">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-secondary">Atendimento Jurídico</h3>
            <p className="text-xs text-white/60 font-light mt-1 uppercase tracking-widest">
              Falta pouco para conversarmos
            </p>
          </div>
          <button 
            onClick={closeModal}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 flex flex-col gap-6">
          <div className="space-y-4">
            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-primary font-bold mb-1.5 block">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input
                  {...register("nome")}
                  type="text"
                  placeholder="Seu nome completo"
                  className={`w-full bg-gray-50 border ${errors.nome ? 'border-red-500' : 'border-gray-200'} rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-secondary transition-colors`}
                />
              </div>
              {errors.nome && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.nome.message}
                </span>
              )}
            </div>

            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-primary font-bold mb-1.5 block">
                WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <Controller
                  name="telefone"
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      mask="(00) 00000-0000"
                      lazy={true}
                      value={field.value}
                      unmask={false}
                      onAccept={(value) => field.onChange(value)}
                      placeholder="(00) 00000-0000"
                      className={`w-full bg-gray-50 border ${errors.telefone ? 'border-red-500' : 'border-gray-200'} rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-secondary transition-colors`}
                    />
                  )}
                />
              </div>
              {errors.telefone && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.telefone.message}
                </span>
              )}
            </div>

            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-primary font-bold mb-1.5 block">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                <input
                  {...register("email")}
                  type="email"
                  placeholder="seu@email.com"
                  className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-secondary transition-colors`}
                />
              </div>
              {errors.email && (
                <span className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full bg-primary hover:bg-secondary text-white hover:text-primary py-4 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all disabled:opacity-70 group"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Solicitar Atendimento
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-[10px] text-center text-gray-400 leading-relaxed">
            Seus dados estão seguros e serão utilizados apenas para este atendimento, <br />
            em conformidade com a LGPD e o sigilo profissional advogado-cliente.
          </p>
        </form>
      </div>
    </div>
  );
}
