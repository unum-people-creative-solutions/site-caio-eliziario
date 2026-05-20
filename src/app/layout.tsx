import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LeadProvider } from "@/context/LeadContext";
import { LeadModal } from "@/components/LeadModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caio Eliziario | Advocacia e Consultoria Jurídica",
  description: "Escritório de advocacia especialista em resolver seus problemas jurídicos com agilidade, transparência e segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-XXXXXXXXXXX";

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
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
          <LeadModal />
        </LeadProvider>
      </body>
    </html>
  );
}
