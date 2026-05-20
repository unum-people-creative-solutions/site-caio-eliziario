export interface LeadData {
  nome: string;
  email?: string;
  telefone: string;
  origem: string; // Obrigatório. Deve indicar a fonte (ex: "Google Ads", "Orgânico", "Instagram")
  gclid?: string | null;
  fbclid?: string | null;
  msclkid?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  metadados?: {
    url_conversao: string;
    data_hora: string;
    [key: string]: any;
  };
}

/**
 * Envia os dados do lead para o CRM via API Gateway.
 */
export async function sendLeadToCRM(data: LeadData) {
  const rawBaseUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL || "https://api.unumpeople.com.br";
  const baseUrl = rawBaseUrl.replace(/\/+$/, "");
  const url = `${baseUrl}/ingest`;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey || "",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro na API do CRM (${response.status}): ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar para o CRM:", error);
    throw error;
  }
}
