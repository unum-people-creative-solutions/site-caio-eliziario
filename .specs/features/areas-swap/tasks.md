# Tasks: Swap de Cards

## QA: Update Tests (Red Phase)
- [x] **TASK-01**: Atualizar `tests/components/AreasAtuacao.test.tsx`.
    - **Done when**: O teste falha ao verificar a nova ordem.
    - **Gate**: `npm test tests/components/AreasAtuacao.test.tsx` (deve falhar).

## Executor: Implementation (Green Phase)
- [x] **TASK-02**: Trocar as posições no array `areas` em `src/components/AreasAtuacao.tsx`.
    - **Done when**: O teste atualizado passa.
    - **Gate**: `npm test tests/components/AreasAtuacao.test.tsx` (deve passar).

## Auditor: Final Validation
- [x] **TASK-03**: Verificação final.
    - **Done when**: Todos os testes passam e lint está OK.
