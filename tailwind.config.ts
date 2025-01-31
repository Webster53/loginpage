import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#313131",
        yellow: "#fdd201",
      },
      backgroundImage: {
        pageBg: "url('/images/bg (2).png')",
      },
    },
  },
  plugins: [],
};

export default config;
