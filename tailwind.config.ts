import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      f24: "24px",
      f22: "22px",
      f20: "20px",
      f18: "18px",
      f16: "16px",
      f14: "14px",
      f12: "12px",
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-proxima)'],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      spacing: {
        25: "25px",
        20: '20px',
        15: '15px',
        8: '8px',
        4: '4px',
        2: '2px'
      },
      colors: {
        primary: "#961A88",
        secondary: "#191978",
        ternary: "#00AEB1",
        gray: {
          300: "#595857",
          500: "#4A3838",
          700: "#3F3F3F",
        },
        background: {
          primary: "#EEE1F0",
          secondary: "#E9EEF6",
          ternary: "#EAF9F7"
        }
      },
      width: {
        400: "400px",
        35: "35px"
      },
      borderRadius: {
        card: "8px",
        button: "4px",
        circle: "50%",
      }
    },
  },
  plugins: [],
};
export default config;
