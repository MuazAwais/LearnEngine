/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
      "max-width": "1440px",
      center: true,
      padding: {
        DEFAULT: "1rem",
        
      },
    },
      },
      
  },
  plugins: [],
}

