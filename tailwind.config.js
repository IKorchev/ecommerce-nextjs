module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "xl-dark": "0 15px 15px -5px rgba(0, 0, 0, 0.4)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    fontFamily: {
      body: "'Merriweather', serif",
    },
    scale: {
      101: "1.01",
      102: "1.02",
      103: "1.03",
      103: "1.03",
      105: "1.05",
    },
    extend: {
      height: {
        100: "500px",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["focus"],
      scale: ["focus"],
      outline: ["focus"],
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-textshadow")],
}
