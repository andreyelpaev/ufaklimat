import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  base: 'ufaklimat',
  site: 'https://andreyelpaev.github.io',
  integrations: [tailwind(), mdx()],
});
