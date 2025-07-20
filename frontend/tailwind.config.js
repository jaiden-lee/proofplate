/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins-Regular", "sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}