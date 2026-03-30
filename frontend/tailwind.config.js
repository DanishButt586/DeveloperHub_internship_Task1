/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#e3f0ff",
        dark: "#1c1c1c",
        grayText: '#8B96A5',
        bgGray: '#F7FAFC',
        bgGrayDark: '#EFF2F4',
        borderGray: '#DEE2E7',
        gray: {
          light: "#f7fafc",
          DEFAULT: "#8b96a5",
          dark: "#505050",
          border: "#e3e8ee",
          bg: "#f7fafd",
        },
        success: "#00b517",
        warning: "#ff9017",
        danger: "#fa3434",
        paleBlue: '#E3F0FF',
        paleGreen: '#C3FFCB',
        paleRed: '#FFE3E3'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
