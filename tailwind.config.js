// tailwind.config.js
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18B3AB",
      },
      fontFamily: {
        poppins: ["PoppinsRegular", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
        poppinsSemiBold: ["PoppinsSemiBold", "sans-serif"],
        poppinsMedium: ["PoppinsMedium", "sans-serif"],
        poppinsLight: ["PoppinsLight", "sans-serif"],
      },
      margin: {
        desktop: "25px",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};