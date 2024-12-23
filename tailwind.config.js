/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import safeArea from "tailwindcss-safe-area";

module.exports = {
  content: ["./public/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      borderRadius: {
        xs: "4px",
        sm: "6px",
        DEFAULT: "10px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        inherit: "inherit",
        cursor: "#f1f1f1",
        terminal: "#222222",
        cyan: "#0b3954",
        greenTea: "#e2f1af",
        moonstone: "#66999b",
      },
      aspectRatio: {
        auto: "auto",
        box: "1",
        landscape: "4/3",
        portrait: "3/4",
        video: "16/9",
      },
      maxWidth: {
        "copy-xs": "25ch",
        "copy-sm": "45ch",
        "copy-md": "55ch",
        "copy-lg": "65ch",
        "copy-xl": "75ch",
        "copy-2xl": "85ch",
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
    safeArea,
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          "@apply px-4 max-w-screen-2xl mx-auto": {},
        },
        ".prose": {
          "@apply max-w-4xl mx-auto text-base md:text-lg text-terminal marker:text-terminal": {},
        },
      });
    },
  ],
}
