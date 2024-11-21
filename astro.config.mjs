// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: 'sz2nnsm0',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2024-07-24", // insert the current date to access the latest version of the API
  }), react()]
});