/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "indigo-700": "#4338CA",
        "neutral-900": "#171717",
        "neutral-600": "#525252",
        "neutral-200": "#E5E5E5",
        "green-700": "#15803D",
        "green-200": "#BBF7D0",
        "green-50": "#F0FDF4",
        "gray-50": "#F9FAFB",
        "gray-200": "#D2D6DB",
      },
      spacing: {
        "120px": "120px",
        "200px": "200px",
      },
    },
  },
  plugins: [],
};
