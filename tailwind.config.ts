import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // محض احتیاط اگر ساختار src داشتی
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#020617",
          800: "#0f172a",
        },
        neon: {
          blue: "#00f0ff",
          purple: "#7000ff",
        },
      },
      fontFamily: {
<<<<<<< HEAD
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
=======
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], // فونت رو بعدا میتونیم فارسی کنیم
>>>>>>> 9b466e4732a90a42b6820af08497be73820fcf25
      },
    },
  },
  plugins: [],
};
export default config;
