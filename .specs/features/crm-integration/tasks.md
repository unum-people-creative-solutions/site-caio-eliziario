# TASKS: CRM Integration

## 1. LeadModal Updates
- [ ] [TASK-001] Atualizar `leadSchema` em `LeadModal.tsx` para tornar e-mail opcional.
- [ ] [TASK-002] Ajustar lógica de `origem` em `LeadModal.tsx` para enviar `"LP Caio Eliziario"`.

## 2. Contact Form Refactor
- [ ] [TASK-003] Migrar formulário de `Contact.tsx` para `react-hook-form` com schema Zod (email obrigatório).
- [ ] [TASK-004] Implementar dupla submissão: `sendLeadToCRM` (com tracking) + `formsubmit.co` (via fetch).
- [ ] [TASK-005] Adicionar UI feedback (Loading/Success) em `Contact.tsx`.

## 3. Verification
- [ ] [TASK-006] Validar submissão da modal sem e-mail.
- [ ] [TASK-007] Validar submissão do formulário de contato (verificar logs CRM e FormSubmit).
