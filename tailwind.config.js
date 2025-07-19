/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode support
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 15px rgba(59, 130, 246, 0.6)',
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: "#2563EB", // Tailwind blue-600
        secondary: "#1E40AF", // Tailwind blue-800
        light: "#F8FAFC", // Tailwind slate-50
        dark: "#0F172A", // Tailwind slate-900
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/a.png')", // ✅ Replace 'a.png' with your real image name
      },
    },
  },
  plugins: [
    // Enable below only if installed via npm
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
