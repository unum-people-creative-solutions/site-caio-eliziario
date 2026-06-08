# Technical Design Document - Swap de Cards: Consumidor e Imobiliário

## 1. Objetivo
Trocar as posições dos cards "Direito do Consumidor" e "Direito Imobiliário" na seção de "Áreas de Atuação".

## 2. Contexto
A pedido do usuário, a ordem de exibição deve ser alterada para que "Direito Imobiliário" preceda "Direito do Consumidor".

## 3. Arquitetura e Estrutura de Dados
A alteração será feita diretamente no array `areas` em `src/components/AreasAtuacao.tsx`.

### 3.1. Nova Ordem (Índices 0-3)
- Índice 0: Direito Civil
- Índice 1: Direito à Saúde
- Índice 2: Direito Imobiliário
- Índice 3: Direito do Consumidor

## 4. Plano de Testes (TDD-First)
1. Atualizar `tests/components/AreasAtuacao.test.tsx` para refletir a nova ordem esperada.
2. Validar que o teste falha após a atualização (Red state).
3. Aplicar a troca no componente.
4. Validar que o teste passa (Green state).

## 5. Riscos e Mitigações
- Alteração simples sem impacto estrutural ou funcional além da ordem de exibição.
