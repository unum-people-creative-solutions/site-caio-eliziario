"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface TrackingParams {
  gclid: string | null;
  fbclid: string | null;
  msclkid: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
}

interface LeadContextType {
  openModal: (whatsappUrl: string) => void;
  tracking: TrackingParams;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [tracking, setTracking] = useState<TrackingParams>({
    gclid: null,
    fbclid: null,
    msclkid: null,
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
  });

  useEffect(() => {
    // Captura parâmetros da URL apenas uma vez no carregamento inicial do Provider
    const params = new URLSearchParams(window.location.search);
    
    const newTracking = {
      gclid: params.get("gclid"),
      fbclid: params.get("fbclid"),
      msclkid: params.get("msclkid"),
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
    };

    // Só atualiza se houver algum parâmetro presente
    if (Object.values(newTracking).some(val => val !== null)) {
      setTimeout(() => setTracking(newTracking), 0);
      sessionStorage.setItem("unum_tracking", JSON.stringify(newTracking));
    } else {
      // Tenta recuperar do sessionStorage
      const saved = sessionStorage.getItem("unum_tracking");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setTimeout(() => setTracking(parsed), 0);
        } catch (e) {
          console.error("Erro ao carregar tracking do sessionStorage", e);
        }
      }
    }
  }, []);

  const openModal = (url: string) => {
    // Redirecionamento direto para o WhatsApp (Bypass do formulário)
    if (typeof window !== "undefined") {
      // Tenta usar a função global de conversão definida no layout.tsx
      const win = window as typeof window & { gtag_report_conversion?: (url: string | null, data: null) => void };
      if (win.gtag_report_conversion) {
        win.gtag_report_conversion(url, null);
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <LeadContext.Provider value={{ openModal, tracking }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLead() {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error("useLead must be used within a LeadProvider");
  }
  return context;
}
