import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap({
    lastmod: new Date('2024-04-05'),
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US'
      }
    }
  })],
  site: 'https://venaesthetics.ch'
});