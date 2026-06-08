# Tasks: WhatsApp Bypass

## QA: Update/Create Tests (Red Phase)
- [x] **TASK-01**: Criar/Atualizar teste para verificar redirecionamento direto no clique do WhatsApp.
    - **Gate**: `npm test` (deve falhar onde o modal era esperado).

## Executor: Implementation (Green Phase)
- [x] **TASK-02**: Modificar `LeadContext.tsx` para redirecionamento direto.
- [x] **TASK-03**: Remover `LeadModal` de `src/app/layout.tsx`.
- [x] **TASK-04**: Limpeza de código (remover `LeadModal.tsx` e testes órfãos).
    - **Gate**: `npm test` (deve passar).

## Auditor: Final Validation
- [x] **TASK-05**: Validação final de navegação e linting.
    - **Done when**: `npm run lint` e `tsc` passam.
