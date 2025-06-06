// tailwind.config.js


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- Crucial for theme toggling
  theme: {
    extend: {
      colors: {
        // Light Mode Colors (these are the default values)
        'primary-bg': '#f5f5f5',
        'primary-text': '#222',
        'primary-accent': '#333',
        'primary-hover': '#444',
        'accent-color': '#FF530D',

        // Define your secondary (dark mode) colors with a different naming convention
        // or directly use them with the 'dark:' prefix on primary colors if they map directly.
        // For distinct colors like in your example, we'll define them.
        'secondary-bg': '#111',
        'secondary-text': '#fff',
        'secondary-accent': '#222',
        'secondary-hover': '#333',

        // If you want to use semantic names that change based on theme:
        // You would define a 'background' color that is primary-bg by default
        // and secondary-bg in dark mode using the 'dark:' prefix in your components.
        // Example:
        // 'app-bg': '#f5f5f5', // Default (light)
        // 'app-text': '#222',   // Default (light)
        // 'app-accent': '#333', // Default (light)
      },
      // fontFamily: {
      //   sans: ['"Noto Sans"', 'sans-serif'], // For Latin text, making Noto Sans the default
      //   devanagari: ['"Noto Serif Devanagari"', 'sans-serif'],
      //   brico: ['"Bricolage Grotesque 24pt Condensed"', 'sans-serif'] // A custom utility for Devanagari
      //   // You can also specify an array for Noto Sans:
      //   // sans: ['Noto Sans', 'ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
      // },
    },
  },

  plugins: [

  ],
  // ...
}