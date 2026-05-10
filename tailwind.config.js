/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#020617',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          500: '#38BDF8',
          100: '#E2E8F0',
          50: '#F8FAFC',
        },
        accent: {
          DEFAULT: '#C2A56D',
          hover: '#b0945d',
        },
        wood: {
          light: '#F3E4C9',
          base: '#BFA28C',
          dark: '#A98B76',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
