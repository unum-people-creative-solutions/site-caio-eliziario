"use client";

import Image from "next/image";
import { useLead } from "@/context/LeadContext";

export default function Hero() {
  const { openModal } = useLead();
  const whatsappUrl = "https://wa.me/5511975335025?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20jurídico.";

  return (
    <section id="inicio" className="relative overflow-hidden bg-primary pt-32 pb-24 lg:pt-48 lg:pb-32">
      
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-predios.jpg"
          alt="Escritório Eliziário Advocacia"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
      </div>

      {/* Fundo com Gradiente */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Sobreposição de Gradiente: Escuro na esquerda (texto) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        {/* Gradiente inferior para dar acabamento */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Coluna da Esquerda: Texto Minimalista (Ocupa 10 colunas para melhor equilíbrio sem a foto) */}
          <div className="lg:col-span-10 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-secondary"></div>
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">
                Advocacia Estratégica
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.2] tracking-tight">
              Sólida defesa dos seus interesses corporativos e <span className="font-bold text-secondary">patrimoniais.</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
              Atendimento personalizado para clientes que buscam segurança jurídica, transparência e soluções bem estruturadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <button 
                onClick={() => openModal(whatsappUrl)}
                className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer"
              >
                Agendar Reunião
              </button>
              <a 
                href="#areas" 
                className="inline-flex items-center justify-center border border-white/20 hover:border-secondary hover:text-secondary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
              >
                Nossas Áreas
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}