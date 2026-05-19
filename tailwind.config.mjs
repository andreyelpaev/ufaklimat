/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f2ff',
          500: '#29b4f3',
          600: '#1397d7',
          700: '#0d76ac',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
