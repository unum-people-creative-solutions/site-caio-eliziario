"use client";

import Link from 'next/link';
import React from 'react';
import { useLead } from '@/context/LeadContext';

const socialLinks = [
  {
    href: "https://www.instagram.com/caioeliziario.adv/",
    label: "Instagram",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  },
  {
    href: "https://www.linkedin.com/company/eliziario-advogados",
    label: "LinkedIn",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
  },
  {
    href: "https://www.facebook.com/eliziarioadv",
    label: "Facebook",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  }
];

export default function Footer() {
  const { openModal } = useLead();
  const whatsappUrl = "https://wa.me/5511975335025?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20jurídico.";

  return (
    <footer className="bg-primary text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top section */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center mb-6">
              <div 
                className="bg-secondary h-10 w-48 sm:w-56"
                style={{
                  maskImage: 'url(/images/eliziario-logo.png)',
                  WebkitMaskImage: 'url(/images/eliziario-logo.png)',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskPosition: 'left center',
                }}
                title="Eliziario Advogados"
              />
            </Link>
            <p className="font-light text-sm leading-relaxed max-w-xs">
              Advocacia de excelência focada em soluções estratégicas e personalizadas para clientes que exigem discrição e resultados.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-white font-medium tracking-wider uppercase text-sm mb-6">Navegação</h3>
            <nav className="flex flex-col gap-4 text-sm">
              <Link href="#inicio" className="hover:text-secondary transition-colors">Início</Link>
              <Link href="#areas" className="hover:text-secondary transition-colors">Áreas de Atuação</Link>
              <Link href="#sobre" className="hover:text-secondary transition-colors">Sobre</Link>
              <Link href="#contato" className="hover:text-secondary transition-colors">Contato</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="text-white font-medium tracking-wider uppercase text-sm mb-6">Informações de Contato</h3>
            <div className="space-y-4 text-sm font-light">
              <p>
              <strong>Endereço:</strong> <a href="https://www.google.com/maps/search/?api=1&query=R.+da+Mooca,+2188+-+Mooca,+S%C3%A3o+Paulo+-+SP,+03104-002" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">R. da Mooca, 2188, 1º andar - Mooca - São Paulo - SP, 03104-002</a>
              </p>
              <p>
                <strong>WhatsApp:</strong> <button onClick={() => openModal(whatsappUrl)} className="hover:text-secondary transition-colors cursor-pointer">(11) 97533-5025</button>
              </p>
              <p>
              <strong>E-mail:</strong> <a href="mailto:contato@eliziarioadv.com.br?subject=Contato%20via%20Site" className="hover:text-secondary transition-colors">contato@eliziarioadv.com.br</a>
              </p>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-center md:text-left font-light" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Eliziario Advogados. Todos os direitos reservados.
          </p>

          <a
            href="https://unumpeople.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all group"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-secondary transition-colors">Desenvolvido por</span>
            <span className="text-xs font-bold text-white/40 group-hover:text-secondary tracking-tight transition-colors">Unum People Creative Solutions</span>
          </a>
          <div className="flex gap-4">
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors" aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}