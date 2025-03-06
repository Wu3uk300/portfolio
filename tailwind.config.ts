import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lemonada: ["Lemonada", "cursive"],
        yesteryear: ["Yesteryear", "serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        nav1: { max: "1075px" },
        nav2: { max: "950px" }, // Добавленная контрольная точка
        nav3: { max: "900px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
