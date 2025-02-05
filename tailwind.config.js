/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary_dark: "#000814",
        dark_blue: "#001D3D",
        light_blue: "#003566",
        dark_yellow: "#FFC300",
        light_yellow: "#FFD60A",
      },
      boxShadow: {
        whiteShadow: "30px 30px 100000px 120px #fff",
        ButtonShadow: "0px 0px 10px 2px #fff",
        blueShadow: "10px 10px 10000px 100px #003566",
      },
    },
    fontFamily: {
      body: ["Mada"],
    },
  },
  plugins: [],
};
