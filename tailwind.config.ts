import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /** 1.333 scale */
    fontSize: {
      1: "7.47rem",
      2: "5.61rem",
      3: "4.21rem",
      4: "3.15rem",
      5: "2.37rem",
      6: "1.77rem",
      7: "1.33rem",
      8: "1.0rem",
      9: "0.75rem",
      10: "0.563rem",
    },
    transitionDuration: {
      default: "0.2s",
    },
    transitionTimingFunction: {
      default: "ease",
    },
    extend: {
      screens: {
        sm: "481px",
        md: "737px",
        lg: "981px",
        xl: "1281px",
        "2xl": "1681px",
      },
      keyframes: {
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
      },
      animation: {
        moveVertical: 'moveVertical 30s ease infinite',
        moveHorizontal: 'moveHorizontal 40s ease infinite',
        moveInCircleLong: 'moveInCircle 40s linear infinite',  
        moveInCircleFast: 'moveInCircle 20s linear infinite',  
      },
  
    },
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      addBase({
        html: { fontSize: "13px" },
        "@screen sm": { html: { fontSize: "15px" } },
        "@screen md": { html: { fontSize: "16px" } },
        "@screen lg": { html: { fontSize: "17px" } },
        "@screen xl": { html: { fontSize: "17px" } },
        "@screen 2xl": { html: { fontSize: "21px" } },
      });
    },
  ],
} satisfies Config;
