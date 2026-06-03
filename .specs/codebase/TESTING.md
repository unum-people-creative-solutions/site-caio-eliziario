# TESTING: site-caio-eliziario

Este documento define a estratégia de testes para garantir a integridade do site a cada alteração, seguindo o mandato de "Red-First" (TDD).

## 1. Stack de Testes
- **Unitários & Integração:** Vitest + React Testing Library + JSDOM.
- **Acessibilidade:** Vitest-axe (planejado).
- **Mocks:** MSW (Mock Service Worker) para interceptar chamadas ao CRM e FormSubmit.

## 2. Áreas Críticas para Testes

### 2.1. Ingestão de Leads (CRM)
- **Cenário:** Submeter LeadModal sem e-mail.
  - **Expectativa:** Sucesso, chamada para `/ingest` com `email` vazio/ausente e `origem: "LP Caio Eliziario"`.
- **Cenário:** Submeter formulário de Contato.
  - **Expectativa:** Erro se e-mail estiver vazio. Sucesso se completo, disparando chamadas para CRM e FormSubmit.

### 2.2. Rastreamento (LeadContext)
- **Cenário:** URL com `gclid=123`.
  - **Expectativa:** O `LeadContext` deve capturar o valor e incluí-lo no payload do CRM.

### 2.3. SEO & Metadados
- **Cenário:** Renderizar layout.
  - **Expectativa:** Presença de tags `og:image`, `canonical`, e script `ld+json`.

## 3. Comandos de Teste
- `npm run test`: Executa todos os testes uma única vez.
- `npm run test:watch`: Modo interativo de desenvolvimento.

## 4. Pipeline de Validação
Cada nova funcionalidade deve:
1.  Ter um teste criado que falhe (**RED**).
2.  Ser implementada para passar o teste (**GREEN**).
3.  Ser auditada para convenções (**AUDIT**).
