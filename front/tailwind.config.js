/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',

    },
    extend: {
      fontFamily: {
        pacifico: "var(--pacifico)",
        notoSansKR: "var(--noto-sans-kr)"
      },
      colors: {
        primary: {
          100: '#E6F5E9',
          200: '#C0E9C5',
          300: '#9ADCA1',
          400: '#4DC26B',
          500: '#18B44F',
          600: '#16A84A',
          700: '#0F6F32',
          800: '#0B5226',
          900: '#07361A',
        },
        secondary: {
          100: '#FFF5F2',
          200: '#FFD1BB',
          300: '#FFAD83',
          400: '#FF6B1A',
          500: '#FF7F50',
          600: '#E67246',
          700: '#993D2F',
          800: '#732E23',
          900: '#4D1F17',
        },
        tertiary: {
          100: '#FCEEE6',
          200: '#F8D4BF',
          300: '#F5B999',
          400: '#F0844D',
          500: '#B46518',
          600: '#A25B16',
          700: '#6E3D0F',
          800: '#522E0B',
          900: '#361F07',
        },
        complementary: {
          100: '#FCE6E6',
          200: '#F8BFBF',
          300: '#F59999',
          400: '#F04D4D',
          500: '#B41832',
          600: '#A2162E',
          700: '#6D0F1F',
          800: '#520B16',
          900: '#36070B',
        },
      },
      fontSize: {
        xxs: '.5rem',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar-hide')],
};
