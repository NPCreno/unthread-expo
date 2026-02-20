/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
  			rancho: ["Rancho_400Regular", "sans-serif"],
        lato: ["Lato_400Regular", "sans-serif"]
  		},
    },
  },
  plugins: [],
};
