import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Coluna da Esquerda: Imagem */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] max-w-lg mx-auto lg:mx-0">
             {/* Moldura Deslocada (Efeito Passe-partout moderno) */}
             <div className="absolute inset-0 translate-x-4 translate-y-4 border border-secondary/30"></div>
             
             {/* Container da Imagem */}
             <div className="absolute inset-0 bg-gray-100 overflow-hidden">
                <Image
                  src="/images/caio-eliziario.png"
                  alt="Caio Eliziario"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>

          {/* Coluna da Direita: Texto e Valores */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-xs">
                O Escritório
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-8 leading-tight tracking-tight">
              Excelência jurídica com <span className="font-bold text-secondary">atendimento exclusivo.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 font-light leading-relaxed mb-12">
              <p>
                Fundado em abril de 2021, o escritório <strong className="font-medium text-primary">Eliziario Advogados</strong> nasceu com o propósito de aliar inovação tecnológica à mais alta excelência técnica. Nossa atuação abrange desde a assessoria consultiva e preventiva até o contencioso estratégico, sempre pautada por um rigoroso padrão ético.
              </p>
              <p>
                Compreendemos a complexidade de cada demanda corporativa e patrimonial. Por isso, dedicamos um atendimento artesanal e altamente exclusivo, focado em entregar soluções jurídicas sofisticadas que garantam a blindagem e o crescimento seguro dos seus negócios.
              </p>
            </div>

            {/* Assinatura ou Destaque */}
            <div className="border-l-2 border-secondary pl-6 py-2">
              <p className="text-xl text-primary font-light italic">
                &quot;Nossa maior vitória é a tranquilidade dos nossos clientes.&quot;
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}