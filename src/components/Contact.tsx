"use client";

import React from 'react';
import { useLead } from '@/context/LeadContext';

export default function Contact() {
  const { openModal } = useLead();
  const whatsappUrl = "https://wa.me/5511975335025?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20jurídico.";
  return (
    <section id="contato" className="py-24 lg:py-32 bg-primary-light text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Coluna da Esquerda: Informações e Redes Sociais */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">
                Contato
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight tracking-tight">
              Agende uma <span className="font-bold text-secondary">consulta estratégica.</span>
            </h2>
            
            <p className="text-gray-400 font-light leading-relaxed mb-12 max-w-md">
              Nossa equipe está pronta para entender a complexidade do seu caso e oferecer a melhor solução jurídica para você ou sua empresa.
            </p>

            <div className="space-y-8 mb-12 w-full">
              {/* WhatsApp */}
              <button onClick={() => openModal(whatsappUrl)} className="flex items-center gap-6 group text-left w-full cursor-pointer">
                <div className="w-12 h-12 rounded-none border border-white/10 bg-primary flex items-center justify-center group-hover:border-secondary transition-colors duration-300">
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-lg font-light group-hover:text-secondary transition-colors duration-300">(11) 97533-5025</p>
                </div>
              </button>

              {/* Email */}
              <a href="mailto:contato@eliziarioadv.com.br" className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-none border border-white/10 bg-primary flex items-center justify-center group-hover:border-secondary transition-colors duration-300">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">E-mail Corporativo</p>
                  <p className="text-lg font-light group-hover:text-secondary transition-colors duration-300">contato@eliziarioadv.com.br</p>
                </div>
              </a>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/caioeliziario.adv/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 bg-primary flex items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/eliziario-advogados" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 bg-primary flex items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="https://www.facebook.com/eliziarioadv" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 bg-primary flex items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Formulário de Contato Minimalista */}
          <div className="bg-primary p-8 md:p-12 border border-white/5 relative">
            {/* Detalhe visual de moldura (Passe-partout) */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-secondary/50 translate-x-4 -translate-y-4"></div>
            
            <h3 className="text-2xl font-light mb-8">Envie uma <span className="font-medium text-secondary">Mensagem</span></h3>
            
            <form action="https://formsubmit.co/contato@eliziarioadv.com.br" method="POST" className="space-y-6">
              {/* Configurações do FormSubmit */}
              <input type="hidden" name="_subject" value="Novo Contato pelo Site!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* TODO: Descomentar e inserir o domínio final do site para redirecionar após envio */}
              {/* <input type="hidden" name="_next" value="https://eliziarioadv.com.br" /> */}
              
              <div>
                <input type="text" name="Nome" placeholder="Nome Completo" className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-secondary transition-colors placeholder-gray-600 font-light" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="email" name="Email" placeholder="E-mail" className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-secondary transition-colors placeholder-gray-600 font-light" required />
                </div>
                <div>
                  <input type="tel" name="Telefone" placeholder="Telefone / WhatsApp" className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-secondary transition-colors placeholder-gray-600 font-light" />
                </div>
              </div>
              <div>
                <textarea name="Mensagem" placeholder="Como podemos ajudar?" rows={4} className="w-full bg-transparent border-b border-white/20 text-white px-0 py-3 focus:outline-none focus:border-secondary transition-colors placeholder-gray-600 font-light resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-secondary hover:bg-white text-primary font-bold uppercase tracking-widest text-xs py-4 transition-colors duration-300 mt-4">
                Enviar Solicitação
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}