/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#680a18",
          "secondary": "#A64253",
          "accent": "#D9B08C",
          "neutral": "#3D2C2E",
          "base-100": "#FAF3E0",
          "info": "#6A8D92",
          "success": "#4F7942",
          "warning": "#D4A017",
          "error": "#B22222",
        },
      },
    ],
  },
};
