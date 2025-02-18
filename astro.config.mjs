// @ts-check
import { defineConfig } from "astro/config";
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import netlify from "@astrojs/netlify";

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } =
  // @ts-ignore
  loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
      dataset: PUBLIC_SANITY_STUDIO_DATASET,
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],
  adapter: netlify(),
});

/**
 * 
 * sanity({
    projectId: 'sz2nnsm0',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2024-07-24", ]// insert the current date to access the latest version of the API
  }), react()
 */
