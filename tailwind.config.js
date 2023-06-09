/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#661AE6",

          secondary: "#D926AA",

          accent: "#1FB2A5",

          neutral: "#0d1122",

          "base-100": "#fff",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#e43d4e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
