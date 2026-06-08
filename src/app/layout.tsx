import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LeadProvider } from "@/context/LeadContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caio Eliziario | Advocacia e Consultoria Jurídica em São Paulo",
  description: "Escritório de advocacia especialista em Direito Civil, Imobiliário, Família e Corporativo. Atendimento exclusivo, agilidade e segurança jurídica em São Paulo.",
  keywords: ["advogado mooca", "advocacia são paulo", "consultoria jurídica", "direito civil", "direito imobiliário", "caio eliziario"],
  authors: [{ name: "Caio Eliziario" }],
  creator: "Unum People",
  publisher: "Caio Eliziario",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://caioeliziario.adv.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Caio Eliziario | Advocacia e Consultoria Jurídica",
    description: "Sólida defesa dos seus interesses corporativos e patrimoniais. Atendimento exclusivo em São Paulo.",
    url: "https://caioeliziario.adv.br",
    siteName: "Caio Eliziario Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/caio-eliziario.png",
        width: 1200,
        height: 630,
        alt: "Caio Eliziario Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Eliziario | Advocacia e Consultoria Jurídica",
    description: "Sólida defesa dos seus interesses corporativos e patrimoniais. Atendimento exclusivo em São Paulo.",
    images: ["/images/caio-eliziario.png"],
  },
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-XXXXXXXXXXX";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Caio Eliziario Advocacia",
    "image": "https://caioeliziario.adv.br/images/caio-eliziario.png",
    "@id": "https://caioeliziario.adv.br",
    "url": "https://caioeliziario.adv.br",
    "telephone": "+55-11-97533-5025",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. da Mooca, 2188",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "03104-002",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5558, // Coordenadas aproximadas da Mooca
      "longitude": -46.6036
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/caioeliziario.adv/",
      "https://www.linkedin.com/company/eliziario-advogados",
      "https://www.facebook.com/eliziarioadv"
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${googleAdsId}", {
              'allow_enhanced_conversions': true
            });

            // Função global para reportar conversões de forma padronizada
            window.gtag_report_conversion = function(url, userData) {
              const callback = function () {
                if (typeof(url) != 'undefined' && url !== null) {
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              };
              
              const conversionData = {
                'send_to': '${googleAdsId}/CONVERSION_LABEL', // Substituir pela Label real
                'event_callback': callback
              };

              // Enhanced Conversions
              if (userData) {
                gtag('set', 'user_data', {
                  'email': userData.email,
                  'phone_number': userData.phone
                });
              }

              gtag('event', 'conversion', conversionData);
              return false;
            };
          `}
        </Script>

        <LeadProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LeadProvider>
      </body>
    </html>
  );
}
