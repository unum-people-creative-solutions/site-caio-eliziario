# TECH-DESIGN: Ajustes na Seção Hero

## 1. Problema
- A imagem de fundo `bg-predios.jpg` não está sendo exibida na seção Hero.
- A foto do profissional (`imagem-fundador.png`) deve ser removida da seção Hero.

## 2. Solução Proposta

### 2.1. Remoção da Foto
- No componente `src/components/Hero.tsx`, remover a coluna da direita (`lg:col-span-5`) que contém a imagem do fundador.
- Ajustar a coluna da esquerda (`lg:col-span-7`) para ocupar mais espaço ou centralizar o conteúdo conforme necessário para manter o equilíbrio visual. Proposta: `lg:col-span-12` com alinhamento centralizado ou manter `max-w-4xl` para legibilidade.

### 2.2. Implementação da Imagem de Fundo
- Inserir o componente `next/image` como o primeiro elemento dentro da `section` do Hero.
- Atributos da imagem:
    - `src="/images/bg-predios.jpg"`
    - `alt="Escritório Eliziário Advocacia"`
    - `fill`
    - `className="object-cover object-center opacity-40"` (ajustar opacidade para garantir contraste)
    - `priority` (carregamento prioritário por ser LCP)
- Garantir que a imagem esteja em um container com `z-0` e os gradientes existentes em `z-10` ou `z-20` para que fiquem sobre a imagem.

## 3. Impactos e Dependências
- **Layout**: A remoção da foto altera o equilíbrio do grid. O texto deve ser ajustado para não ficar muito "esticado" em telas largas.
- **Performance**: A imagem de fundo deve ter o atributo `priority` para otimizar o LCP.

## 4. Plano de Testes
- Verificar se a imagem `bg-predios.jpg` está renderizada no DOM.
- Verificar se a imagem `imagem-fundador.png` foi removida.
- Validar se o texto permanece legível com a imagem de fundo.
