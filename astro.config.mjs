// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko']
    },
	site: 'https://chocholily.dev',
	integrations: [mdx(), sitemap()],
});
