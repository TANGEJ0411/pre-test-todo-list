/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#0071FF',
      secondary: '#ECECEC',
      success: '#16CB4C',
      danger: '#CC4900',
      white: '#FFFFFF',
    },
    extend: {
      height: {
        'calc-container': 'calc(100vh - 52.8px)',
        'calc-custom': 'calc(100vh - 76px)',
      },
    },
  },
  plugins: [],
}

