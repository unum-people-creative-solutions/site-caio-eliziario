import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://caioeliziario.adv.br/sitemap.xml", // Substituir pela URL real se diferente
  };
}
