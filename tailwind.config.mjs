/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effdf3',
          100: '#d9fbe3',
          500: '#31b939',
          600: '#259b2f',
          700: '#1f7a27',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
