# INTEGRATIONS: site-caio-eliziario

## CRM Unum People
- **Endpoint:** `${NEXT_PUBLIC_API_GATEWAY_URL}/ingest`
- **Auth:** Header `X-API-Key`
- **File:** `src/lib/crm.ts`

## Google Ads
- **Tag:** Global `gtag` configurada em `layout.tsx`.
- **Eventos:** `gtag_report_conversion` para conversões via WhatsApp.

## Email (External)
- **Service:** FormSubmit.co
- **Usage:** Formulário estático em `Contact.tsx`.
