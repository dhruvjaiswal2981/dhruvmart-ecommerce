/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#FF6B6B',
            dark: '#FF5252',
          },
          secondary: {
            DEFAULT: '#4ECDC4',
            dark: '#3DBDB4',
          },
          dark: {
            DEFAULT: '#292F36',
            light: '#3A4048',
          },
          light: {
            DEFAULT: '#F7FFF7',
            dark: '#E5EDE5',
          },
        },
        fontFamily: {
          sans: ['"Open Sans"', 'sans-serif'],
          serif: ['"Playfair Display"', 'serif'],
        },
      },
    },
    plugins: [],
  }