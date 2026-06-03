# Baseline Spec - Caio Eliziário

## 📊 Status Atual (Audit)
- **Google Ads**: ✅ Configurado no `layout.tsx` (via variável de ambiente).
- **CRM Integration**: ✅ Implementado e Padronizado (`lib/crm.ts`, `LeadModal.tsx`).
- **SEO**: ✅ Metadata configurado. `robots.ts` e `sitemap.ts` adicionados.
- **Tracking**: ✅ Captura GCLID, FBCLID, MSCLKID e UTMs no `LeadContext` com persistência.

## 🏗️ Stack Técnica
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Components**: LeadModal (interceptação de leads), LeadProvider (gerenciamento de tracking)

## 🔗 Integrações
- **CRM Endpoint**: `/ingest`
- **Data Pattern**: ✅ Totalmente alinhado com a `GENERAL_SPEC.md`.

## 🛠️ Próximos Passos
1. Preencher as variáveis de ambiente no `.env.local` (API Key e Google Ads ID).
2. Validar o redirecionamento do formulário de e-mail (opcional: integrar ao CRM).
