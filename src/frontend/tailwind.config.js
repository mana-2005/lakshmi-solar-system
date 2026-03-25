/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Devanagari', 'Plus Jakarta Sans', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#2E7D32",
          foreground: "#ffffff",
          dark: "#1B5E20",
          light: "#4CAF50",
        },
        amber: {
          DEFAULT: "#F2B34A",
          dark: "#E65100",
          light: "#FFD54F",
          band: "#FFF3E0",
        },
        background: "#F7F7F4",
        foreground: "#1A1A1A",
        card: "#FFFFFF",
        border: "#E0E0E0",
        muted: "#F5F5F5",
        "muted-foreground": "#757575",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
        header: "0 2px 8px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
