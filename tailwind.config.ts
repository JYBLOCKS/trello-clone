import forms from "@tailwindcss/forms";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "bg-base": "var(--color-bg-base)",
        "color-base": "var(--color-text-base)",
      },
    },
  },
  plugins: [
    forms,
    // ...
  ],
};
