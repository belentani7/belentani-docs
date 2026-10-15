import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.belentani.com",
  integrations: [
    starlight({
      title: "Belentani Docs",
      tagline: "Unified documentation for the Belentani ecosystem",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/belentani7" },
        { icon: "twitter", label: "X", href: "https://x.com/belentani_" },
      ],
      sidebar: [
        {
          label: "Inicio",
          items: [
            { label: "Introducción", link: "/" },
            { label: "Arquitectura", link: "/architecture/" },
            { label: "Principios", link: "/principles/" },
          ],
        },
        {
          label: "Proyectos Flagship",
          items: [
            { label: "Manos Abiertas", link: "/projects/manos-abiertas/" },
            { label: "LinguaForge", link: "/projects/linguaforge/" },
            { label: "Belentani.es", link: "/projects/belentani-es/" },
            { label: "Cruzando el Charco", link: "/projects/cruzando-el-charco/" },
            { label: "Secure T", link: "/projects/secure-t/" },
            { label: "Open School", link: "/projects/open-school/" },
            { label: "Judas Experience", link: "/projects/judas-experience/" },
            { label: "Belentani.cv-ai", link: "/projects/belentani-cv-ai/" },
          ],
        },
        {
          label: "Design System",
          items: [
            { label: "Tokens", link: "/design-system/tokens/" },
            { label: "Componentes", link: "/design-system/components/" },
            { label: "Guía de uso", link: "/design-system/usage/" },
          ],
        },
        {
          label: "Backend Python",
          items: [
            { label: "Template Canónico", link: "/python/template/" },
            { label: "Arquitectura Limpia", link: "/python/clean-architecture/" },
            { label: "Testing", link: "/python/testing/" },
          ],
        },
        {
          label: "API Reference",
          items: [
            { label: "Manos Abiertas", link: "/api/manos-abiertas/" },
            { label: "LinguaForge", link: "/api/linguaforge/" },
            { label: "Belentani.cv-ai", link: "/api/belentani-cv-ai/" },
          ],
        },
        {
          label: "Guías",
          items: [
            { label: "Contribuir", link: "/guides/contributing/" },
            { label: "Despliegue", link: "/guides/deployment/" },
            { label: "Seguridad", link: "/guides/security/" },
            { label: "Accesibilidad", link: "/guides/accessibility/" },
          ],
        },
        {
          label: "MCP Servers",
          items: [
            { label: "Resumen", link: "/mcp/" },
            { label: "Audit Server", link: "/mcp/audit/" },
            { label: "Deploy Server", link: "/mcp/deploy/" },
          ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/belentani7/belentani-docs/edit/main/",
      },
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});