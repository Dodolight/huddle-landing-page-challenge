/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonOpacity: "hsl(322, 100%, 80%)",
        introButton: "hsl(322, 100%, 66%)",
        heroBg: "hsl(193, 100%, 96%)",
        darkColor: "hsl(192, 100%, 9%)",
        grayBlue: "hsl(208, 11%, 55%)",
      },
      backgroundImage: {
        heroMobile: "url('/src/images/bg-hero-mobile.svg')",
        heroDesktop: "url('/src/images/bg-hero-desktop.svg')",
      },
    },
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1280px) { ... }
      xl: "1280px",
      // => @media (min-width: 1440px) { ... }
      custom: "1440px",
      // => @media (min-width: 1536px) { ... }
      "2xl": "1536px",
    },
  },
  plugins: [],
};
