# ARCHITECTURE: site-caio-eliziario

## Patterns
- **App Router:** Utiliza a estrutura de `src/app` para rotas e layouts.
- **Client-Side State:** `LeadContext` gerencia o estado global de tracking (UTM/GCLID) e o estado da modal de captura.
- **Components:** Componentes funcionais organizados em `src/components`, utilizando a convenção "use client" conforme necessário.

## Data Flow
1. Usuário chega com parâmetros na URL (GCLID, UTMs).
2. `LeadContext` captura e persiste no `sessionStorage`.
3. Usuário clica em CTA de WhatsApp.
4. `LeadModal` é aberta via `LeadContext`.
5. Formulário da modal envia dados para o CRM via `sendLeadToCRM` em `src/lib/crm.ts`.
6. Redirecionamento para o WhatsApp ocorre após o sucesso (ou tentativa) do envio.
