/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050814",
          card: "#0E1625",
          demo: "#0A0F1A",
          footer: "#050A12",
        },
        border: {
          DEFAULT: "#1E2A3E",
        },
        neon: "#00F0FF",
        critical: "#FF3366",
        text: {
          primary: "#E2E8F0",
          secondary: "#94A3B8",
        },
        district: {
          active: "#0F2B1F",
          offline: "#3A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        card: "0 20px 35px -10px rgba(0,0,0,0.5)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-scale": "pulse-scale 0.6s ease-in-out",
      },
      keyframes: {
        "pulse-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
