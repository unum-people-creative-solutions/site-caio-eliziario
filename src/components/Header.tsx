"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Máscara CSS: Injeta a cor dourada (secondary) no formato da logo */}
          <div 
            className="bg-secondary h-10 w-48 sm:w-56 hover:bg-white transition-colors duration-300"
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
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-10 text-xs font-medium tracking-[0.15em] uppercase text-white/80">
          <Link href="#inicio" className="hover:text-secondary hover:text-white transition-colors">Início</Link>
          <Link href="#areas" className="hover:text-secondary hover:text-white transition-colors">Áreas de Atuação</Link>
          <Link href="#sobre" className="hover:text-secondary hover:text-white transition-colors">Sobre</Link>
          <Link href="#contato" className="hover:text-secondary hover:text-white transition-colors">Contato</Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* CTA (Call to Action) Desktop/Tablet */}
          <a 
            href="https://wa.me/5511975335025?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20jurídico."
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-white px-7 py-3 text-xs font-bold tracking-widest uppercase transition-colors duration-300"
          >
            Fale Conosco
          </a>

          {/* Menu Hambúrguer (Mobile) */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2 transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Navegação Mobile (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-b border-white/10 absolute w-full left-0 top-24 py-6 px-6 flex flex-col gap-6 shadow-2xl">
          <Link href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-secondary text-sm font-medium tracking-[0.15em] uppercase transition-colors">Início</Link>
          <Link href="#areas" onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-secondary text-sm font-medium tracking-[0.15em] uppercase transition-colors">Áreas de Atuação</Link>
          <Link href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-secondary text-sm font-medium tracking-[0.15em] uppercase transition-colors">Sobre</Link>
          <Link href="#contato" onClick={() => setIsMenuOpen(false)} className="text-white/80 hover:text-secondary text-sm font-medium tracking-[0.15em] uppercase transition-colors">Contato</Link>
          
          <a 
            href="https://wa.me/5511975335025?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20jurídico."
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="sm:hidden inline-flex items-center justify-center bg-secondary text-white px-7 py-4 mt-4 text-xs font-bold tracking-widest uppercase"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
}