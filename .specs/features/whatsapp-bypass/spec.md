# Feature Spec: WhatsApp Bypass

## Overview
Remover o formulário de coleta de leads para cliques no WhatsApp.

## Requirements

| ID | Requirement | Description |
|---|---|---|
| REQ-01 | Redirecionamento Direto | Ao clicar em qualquer link de WhatsApp, abrir o URL imediatamente. |
| REQ-02 | Desativar LeadModal | O formulário `LeadModal` não deve mais ser exibido. |
| REQ-03 | Manter Formulário de E-mail | O formulário de contato por e-mail deve permanecer funcional. |

## Acceptance Criteria
- [x] O clique no botão flutuante de WhatsApp abre o WhatsApp diretamente.
- [x] O clique em "Agendar Reunião" no Hero abre o WhatsApp diretamente.
- [x] O clique em "Agendar Consulta" na modal de especialidades abre o WhatsApp diretamente.
- [x] O componente `LeadModal` foi removido do layout e do codebase.
