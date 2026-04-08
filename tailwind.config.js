/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        "syne-mono": ["var(--font-syne-mono)", "monospace"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#c8ff00",
          dark: "#1a5cff",
        },
      },
      fontSize: {
        10: "10px",
        11: "11px",
        9: "9px",
      },
      letterSpacing: {
        widest2: "0.15em",
        widest3: "0.12em",
        widest4: "0.08em",
      },
    },
  },
  plugins: [],
};
