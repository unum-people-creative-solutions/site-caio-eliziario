# Feature Spec: Direito à Saúde

## Overview
Adição de uma nova especialidade ("Direito à Saúde") na seção de Áreas de Atuação.

## Requirements

| ID | Requirement | Description |
|---|---|---|
| REQ-01 | Novo Card | Adicionar card "Direito à Saúde" na segunda posição do grid. |
| REQ-02 | Conteúdo do Card | Exibir título e breve descrição no card. |
| REQ-03 | Ícone do Card | Exibir ícone de coração (saúde) seguindo o padrão SVG do projeto. |
| REQ-04 | Modal de Detalhes | Abrir modal ao clicar no card com descrição completa e frentes de atuação. |
| REQ-05 | Frentes de Atuação | Listar os 7 itens fornecidos pelo usuário na modal. |
| REQ-06 | Call to Action | Manter o botão "Agendar Consulta" funcional na modal. |

## Acceptance Criteria
- [x] O card "Direito à Saúde" é renderizado entre "Direito Civil" e "Direito do Consumidor".
- [x] O texto da modal corresponde exatamente ao fornecido pelo usuário.
- [x] O ícone é visualmente consistente com os outros cards (stroke-width 1.5).
- [x] A modal fecha corretamente ao clicar no "X" ou fora dela.
- [x] O botão de agendamento na modal abre o fluxo de Lead/WhatsApp.
