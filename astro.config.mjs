import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  base: 'ufaklimat',
  site: 'https://andreyelpaev.github.io',
  integrations: [tailwind()],
});
