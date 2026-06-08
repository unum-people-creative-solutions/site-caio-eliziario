# Tarefas: Ajuste Visual da Seção Hero

## Tarefas de Implementação

- [x] **TASK-01**: Criar teste de regressão/validação para o componente Hero.
    - **Arquivo**: `tests/components/Hero.test.tsx`
    - **Critério**: O teste deve falhar ao procurar `bg-predios.jpg` (Estado RED).
- [x] **TASK-02**: Remover a foto do profissional em `src/components/Hero.tsx`.
    - **Ação**: Deletar o bloco `lg:col-span-5` e ajustar `lg:col-span-7` para `lg:col-span-12` (ou centralizar).
- [x] **TASK-03**: Implementar a imagem de fundo em `src/components/Hero.tsx`.
    - **Ação**: Adicionar `next/image` com `fill` e `priority`.
- [x] **TASK-04**: Validar implementação com testes.
    - **Ação**: Executar `vitest` para garantir que o teste da TASK-01 agora passe (Estado GREEN).
