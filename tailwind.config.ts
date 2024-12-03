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
    fontWeight: {
      thin: "300",
      bold: "600",
      black: "900",
    },
    transitionDuration: {
      default: "0.2s",
    },
    transitionTimingFunction: {
      default: "ease",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      screens: {
        sm: "481px",
        md: "737px",
        lg: "981px",
        xl: "1281px",
        "2xl": "1681px",
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
