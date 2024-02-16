/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#F7F7F5',
        tertiary: '#2B2B2B',
        quaternary: '#ff005e',
      },
    },
  },
  plugins: [],
}