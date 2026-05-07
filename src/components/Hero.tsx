import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-primary pt-32 pb-24 lg:pt-48 lg:pb-32">
      
      {/* Fundo com Imagem e Gradiente */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/bg-predios.jpg"
          alt="Fundo Corporativo"
          fill
          className="object-cover object-center opacity-60 grayscale"
          priority
        />
        {/* Sobreposição de Gradiente: Escuro na esquerda (texto) revelando os prédios na direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        {/* Gradiente inferior para dar acabamento */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Coluna da Esquerda: Texto Minimalista (Ocupa 7 colunas) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-secondary"></div>
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">
                Advocacia de Excelência
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.2] tracking-tight">
              Sólida defesa dos seus interesses corporativos e <span className="font-bold text-secondary">patrimoniais.</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
              Atendimento exclusivo e soluções jurídicas altamente estratégicas para clientes que exigem discrição, agilidade e resultados precisos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a 
                href="https://wa.me/5511975335025?text=Olá,%20gostaria%20de%20solicitar%20um%20atendimento%20jurídico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary hover:bg-white hover:text-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
              >
                Agendar Reunião
              </a>
              <a 
                href="#areas" 
                className="inline-flex items-center justify-center border border-white/20 hover:border-secondary hover:text-secondary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
              >
                Nossas Áreas
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Imagem com Retângulos Sobrepostos */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-[3/4] max-w-sm ml-auto">
              {/* Moldura Deslocada */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-secondary/30"></div>
              
              {/* Container da Imagem */}
              <div className="absolute inset-0 bg-primary-light overflow-hidden">
                <Image
                  src="/images/imagem-fundador.png"
                  alt="Caio Eliziario - Fundador"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}