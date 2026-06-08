# Technical Design Document - Desativação do Formulário de WhatsApp

## 1. Objetivo
Remover a etapa de coleta de informações (nome, telefone, e-mail) ao clicar em links e botões que direcionam para o WhatsApp, permitindo o redirecionamento direto.

## 2. Contexto
Atualmente, o `LeadContext` abre o `LeadModal` ao chamar `openModal(whatsappUrl)`. O `LeadModal` coleta os dados e redireciona após a submissão. O usuário deseja que o redirecionamento seja imediato, mantendo a coleta de dados apenas no formulário de e-mail (seção de contato).

## 3. Arquitetura e Alterações

### 3.1. `src/context/LeadContext.tsx`
- Alterar a função `openModal` para:
  - Chamar `window.open(url, "_blank", "noopener,noreferrer")` imediatamente.
  - Opcionalmente disparar um evento de conversão genérico no `gtag`.
  - Manter a assinatura da função para evitar quebra em outros componentes, mas renomear ou marcar como depreciada se necessário.

### 3.2. `src/app/layout.tsx`
- Remover o componente `<LeadModal />`.

### 3.3. `src/components/LeadModal.tsx`
- O componente será desativado/removido.

### 3.4. Rastreamento (Google Ads)
- Como não teremos mais os dados do usuário no clique do WhatsApp, o rastro de "Enhanced Conversions" via `gtag_report_conversion(url, userData)` não será mais possível com dados reais no momento do clique. 
- O redirecionamento direto será feito via `window.open` ou `window.gtag_report_conversion(url, null)`.

## 4. Plano de Testes
1. Atualizar testes que esperam a abertura do `LeadModal` para validar o redirecionamento direto.
2. Validar que o botão do Hero, Botão Flutuante e botão dentro da modal de Áreas de Atuação redirecionam corretamente.
3. Garantir que o formulário de e-mail em `Contact.tsx` continue funcionando.

## 5. Riscos e Mitigações
- **Perda de Leads no CRM**: Os cliques no WhatsApp não serão mais registrados no CRM, conforme solicitado ("coleta apenas no e-mail").
