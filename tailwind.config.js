
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palettes from the Brand Strategy (Golden Hour & Earthen Elegance)
        champagne: "#C9B98F",
        richgold: "#B89D62",
        sagetaupe: "#88856A",
        deepcharcoal: "#474747",
        lighttaupe: "#D8CBC2",
        warmsand: "#A18267",
        deepolive: "#3B3418",
        richdarkbrown: "#2D241B",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: "0 8px 20px rgba(0,0,0,0.08)",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
