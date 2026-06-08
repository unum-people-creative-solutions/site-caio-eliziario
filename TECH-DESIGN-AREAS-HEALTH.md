# Technical Design Document - Novo Card: Direito à Saúde

## 1. Objetivo
Adicionar uma nova área de atuação denominada "Direito à Saúde" na seção de "Áreas de Atuação" do site. O card deve ocupar a segunda posição na listagem.

## 2. Contexto
A seção "Áreas de Atuação" (`src/components/AreasAtuacao.tsx`) exibe cards informativos que, ao serem clicados, abrem uma modal com detalhes específicos e frentes de atuação.

## 3. Arquitetura e Estrutura de Dados
O componente utiliza um array estático `areas`. O novo objeto será inserido no índice 1.

### 3.1. Dados do Novo Card
- **Título**: "Direito à Saúde"
- **Descrição (Card)**: "Proteção do acesso digno e contínuo a tratamentos médicos, hospitalares e terapêuticos, contra negativas e abusividades."
- **Descrição (Modal)**: "É a área voltada à proteção do acesso digno, adequado e contínuo a tratamentos médicos, hospitalares e terapêuticos. Envolve a atuação em demandas contra planos de saúde, seguradoras, hospitais e entes públicos, especialmente quando há negativa de cobertura, interrupção de tratamento, descredenciamento indevido ou descumprimento de obrigações assistenciais."
- **Detalhes (Frentes de Atuação)**:
  - Atuação em processos judiciais e administrativos envolvendo planos de saúde.
  - Medidas urgentes para autorização de cirurgias, exames, internações e tratamentos.
  - Discussões sobre negativas de cobertura, medicamentos, terapias e procedimentos médicos.
  - Atuação em casos de descredenciamento de hospitais, clínicas e laboratórios.
  - Defesa do paciente em situações de reajustes abusivos, cancelamentos indevidos e exclusões contratuais.
  - Análise de contratos, coberturas, carências e obrigações das operadoras de saúde.
  - Elaboração de notificações, pareceres e estratégias visando a solução do conflito.
- **Ícone**: Heart icon (SVG compatível com o estilo existente).

## 4. Plano de Testes (TDD-First)
1. Criar `tests/components/AreasAtuacao.test.tsx`.
2. Validar que "Direito Civil" é o primeiro card.
3. Validar que "Direito à Saúde" é o segundo card (após implementação).
4. Validar que ao clicar no card, a modal abre com as informações corretas.

## 5. Riscos e Mitigações
- **Quebra de Layout**: O grid atual é responsivo (1, 2, 3 colunas). A adição de um nono card (eram 8) manterá o equilíbrio visual em 3 colunas (3 linhas completas).
- **Consistência de Ícones**: Utilizar um ícone SVG que siga a espessura de linha (1.5) e estilo dos demais.
