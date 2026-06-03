"use client";

import React, { useState, useEffect } from 'react';
import { useLead } from '@/context/LeadContext';

const areas = [
  {
    title: "Direito Civil",
    description: "Atuação consultiva e estratégica na prevenção de conflitos, além de representação em processos judiciais e administrativos.",
    modalDescription: "É o principal ramo do Direito Privado. Engloba o conjunto de normas jurídicas responsáveis por regular as situações do dia a dia entre indivíduos ou empresas, estipulando obrigações que visam estabelecer um equilíbrio entre eles. A atuação ocorre de forma consultiva e contenciosa.",
    details: [
      "Atuação em processos judiciais e administrativos.",
      "Atuação consultiva e estratégica na prevenção de conflitos.",
      "Avaliação em risk assessment de relacionamentos contratuais ou extracontratuais (riscos de litígios comerciais ou pessoais).",
      "Análise e avaliação de processos judiciais e administrativos para fins de auditoria (due diligence).",
      "Análise, elaboração, negociação, revisão ou rescisão contratual.",
      "Elaboração de pareceres e opiniões legais."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Direito do Consumidor",
    description: "Atuação estratégica e contenciosa na defesa do consumidor, incluindo negociações, planos de saúde e problemas aéreos.",
    modalDescription: "É o conjunto de normas e princípios que trata das relações de consumo, ou seja, a relação entre o consumidor e o fornecedor de produtos ou de serviços.",
    details: [
      "Atuação contenciosa em todas as instâncias judiciais.",
      "Atuação em procedimentos administrativos (PROCON, Ministério Público e órgãos de defesa do consumidor).",
      "Atuação estratégica preventiva consultiva (elaboração de políticas visando a redução de contingências).",
      "Análise e assessoria na assinatura de termos de ajustamento de conduta.",
      "Demandas por negativa de atendimento de Plano de Saúde (liminares e indenizações).",
      "Resolução de problemas com voos e bagagens (atrasos, cancelamentos e extravios).",
      "Demandas por atraso na entrega de imóvel na planta."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Direito Imobiliário",
    description: "Due diligence imobiliária, análise de contratos, regularização de imóveis e obtenção de registro por usucapião.",
    modalDescription: "Área responsável pela condução de negócios imobiliários. Regula as relações jurídicas decorrentes da posse, compra, venda, doação, sucessão, troca e propriedade de bens imóveis.",
    details: [
      "Due diligence imobiliária com análise de riscos.",
      "Elaboração e análise de contratos imobiliários (compra, venda, permuta, locação).",
      "Regularização imobiliária e retificação de registro.",
      "Obtenção de registro de imóveis através de usucapião."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Família e Sucessões",
    description: "Condução de divórcios, pensão alimentícia e inventários, com foco estratégico na proteção do patrimônio familiar.",
    modalDescription: "O Direito Sucessório é o conjunto de normas que disciplinam a transferência do patrimônio de alguém após a sua morte, em virtude de lei ou testamento. A área atua prestando assistência nos mais diversos temas relacionados a essas relações.",
    details: [
      "Atuação contenciosa em todas as instâncias judiciais focada em relações familiares e sucessórias.",
      "Proteção de patrimônio familiar.",
      "Divórcio (consensual ou litigioso).",
      "Pensão alimentícia (litigiosa ou consensual).",
      "Preparação e registro de testamentos, inventário e adoção."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Direito Comercial e Corporativo",
    description: "Assessoria voltada ao compliance empresarial, transferência de tecnologia e registro de marcas e patentes.",
    modalDescription: "Assessoria jurídica prestada a empresas e indivíduos em relação a transações e procedimentos comerciais e corporativos, abrangendo registro de marcas e patentes, compliance empresarial, transferência de tecnologia e direitos autorais.",
    details: [
      "Registro de marcas e patentes.",
      "Compliance empresarial.",
      "Transferência de tecnologia e direitos autorais."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Direito Trabalhista",
    description: "Defesa preventiva e litigiosa especializada nas complexas relações entre empregado, empregador e sindicatos.",
    modalDescription: "Assessoria jurídica que visa oferecer os meios técnicos necessários à defesa dos interesses de pessoas físicas e jurídicas na relação empregado-empregador-sindicatos, de forma preventiva ou litigiosa.",
    details: [
      "Defesa preventiva e litigiosa na relação empregado-empregador-sindicatos."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Direito Tributário",
    description: "Consultoria e planejamento tributário ativo e passivo, com atuação técnica em fases administrativas e judiciais.",
    modalDescription: "Atuação na fase administrativa e judicial, englobando consultoria tributária ativa e passiva, planejamento tributário e elaboração de pareceres.",
    details: [
      "Atuação na fase administrativa e judicial.",
      "Consultoria tributária ativa e passiva.",
      "Planejamento tributário e elaboração de pareceres."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    )
  },
  {
    title: "Direito Digital",
    description: "Orientação focada na evolução tecnológica e da internet visando a segurança jurídica.",
    modalDescription: "Orientação voltada à evolução da tecnologia e da internet, com o objetivo de oferecer segurança jurídica e serviços especializados.",
    details: [
      "Orientação focada na evolução tecnológica e da internet visando a segurança jurídica."
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function AreasAtuacao() {
  const [selectedArea, setSelectedArea] = useState<typeof areas[0] | null>(null);
  const { openModal } = useLead();
  const whatsappUrl = "https://wa.me/5511975335025?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20jurídico.";

  // Trava o scroll da página enquanto a modal estiver aberta
  useEffect(() => {
    if (selectedArea) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArea]);

  return (
    <section id="areas" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">
              Especialidades
            </span>
            <div className="w-8 h-[1px] bg-secondary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6 leading-tight tracking-tight">
            Áreas de <span className="font-bold text-secondary">Atuação</span>
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Possuímos expertise para lidar com diversas áreas do direito, garantindo a defesa intransigente dos seus interesses com ética e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedArea(area)}
              className="group bg-white p-10 border border-gray-200 hover:border-secondary transition-all duration-500 flex flex-col items-start cursor-pointer hover:shadow-xl"
            >
              <div className="text-secondary mb-8 group-hover:scale-110 transition-transform duration-500">
                {area.icon}
              </div>
              <h3 className="text-xl font-medium text-primary mb-4">{area.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {area.description}
              </p>
              
              {/* Botão sutil de "Saiba Mais" */}
              <div className="mt-auto pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
                Saiba Mais <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Modal de Detalhes */}
      {selectedArea && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          {/* Fundo Escuro */}
          <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm transition-opacity" onClick={() => setSelectedArea(null)}></div>
          
          {/* Container da Modal */}
          <div className="bg-white relative w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl animate-fade-in-up">
            
            <div className="bg-primary p-6 md:p-8 flex justify-between items-center text-white sticky top-0 z-10 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-secondary">{selectedArea.icon}</div>
                <h3 className="text-2xl font-light">{selectedArea.title}</h3>
              </div>
              <button onClick={() => setSelectedArea(null)} className="text-white/70 hover:text-secondary transition-colors p-2" aria-label="Fechar modal">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-8 md:p-10">
              <p className="text-gray-600 font-light leading-relaxed mb-10">
                {selectedArea.modalDescription}
              </p>
              <h4 className="text-primary font-medium uppercase tracking-[0.15em] text-xs mb-8 flex items-center gap-4">
                <div className="w-6 h-[1px] bg-secondary"></div>
                Frentes de Atuação
              </h4>
              <ul className="space-y-6 mb-12">
                {selectedArea.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-600 font-light">
                    <span className="text-secondary mt-1.5 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  setSelectedArea(null);
                  openModal(whatsappUrl);
                }}
                className="inline-flex w-full justify-center bg-secondary hover:bg-primary text-white py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}