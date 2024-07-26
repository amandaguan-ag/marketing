/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          700: "#4338CA",
        },
        neutral: {
          900: "#171717",
          600: "#525252",
          200: "#E5E7EB",
        },
        gray: {
          50: "#F9FAFB",
          200: "#D2D6DB",
        },
        green: {
          50: "#F0FDF4",
          200: "#BBF7D0",
          700: "#059669",
        },
      },
      spacing: {
        120: "120px",
        200: "200px",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
