# Tasks: Direito à Saúde

## QA: Test Creation (Red Phase)
- [x] **TASK-01**: Criar teste de unidade `tests/components/AreasAtuacao.test.tsx`.
    - **Done when**: O teste falha ao tentar encontrar "Direito à Saúde" na segunda posição.
    - **Gate**: `npm test tests/components/AreasAtuacao.test.tsx` (deve falhar).

## Executor: Implementation (Green Phase)
- [x] **TASK-02**: Inserir o novo card no array `areas` em `src/components/AreasAtuacao.tsx`.
    - **Details**: Inserir no índice 1. Usar ícone de coração SVG.
    - **Done when**: O teste criado na TASK-01 passa.
    - **Gate**: `npm test tests/components/AreasAtuacao.test.tsx` (deve passar).

## Auditor: Final Validation
- [x] **TASK-03**: Auditoria de convenções e linting.
    - **Done when**: `npm run lint` e `tsc --noEmit` passam sem erros.
    - **Gate**: Execução dos comandos de lint e type-check.
