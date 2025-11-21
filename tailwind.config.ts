import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#020617", // سرمه‌ای خیلی تیره
          800: "#0f172a",
        },
        neon: {
          blue: "#00f0ff", // آبی سایبرپانک
          purple: "#7000ff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], // فونت رو بعدا میتونیم فارسی کنیم
      },
    },
  },
  plugins: [],
};
export default config;