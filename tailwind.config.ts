import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
