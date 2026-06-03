# SPEC: CRM Integration & Contact Form Refactor

## Requirements

### [REQ-001] LeadModal - Email Opcional
- O campo de e-mail na `LeadModal` deve ser opcional.
- A validação do Zod deve permitir campo vazio ou nulo, mas validar o formato se preenchido.

### [REQ-002] LeadModal - Identificação de Origem
- O campo `origem` enviado ao CRM deve ser fixo como `"LP Caio Eliziario"`.

### [REQ-003] Contact Form - Integração CRM
- O formulário principal em `Contact.tsx` deve enviar os dados para o CRM via `sendLeadToCRM`.
- Deve incluir os dados de tracking do `LeadContext`.
- O campo `origem` deve ser `"LP Caio Eliziario - Contato"`.

### [REQ-004] Contact Form - Manter FormSubmit
- O formulário principal deve continuar enviando o e-mail via `formsubmit.co`.
- O e-mail deve permanecer obrigatório neste formulário.

### [REQ-005] Contact Form - UX
- Adicionar estado de carregamento (`isLoading`) e feedback de sucesso no formulário de contato.
