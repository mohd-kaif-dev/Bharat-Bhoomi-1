import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext"; // Adjust path if needed

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full
                 bg-gray-200 text-gray-800
                 dark:bg-gray-700 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-600
                 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
    >
      {/*
        Conditional Logic Fix:
        If current theme is DARK, show SUN icon (to toggle to LIGHT)
        If current theme is LIGHT, show MOON icon (to toggle to DARK)
      */}
      {theme === "dark" ? (
        // SUN Icon - Updated for robustness
        <Sun className="h-6 w-6" />
      ) : (
        // MOON Icon
        <Moon className="h-6 w-6" />
      )}
    </button>
  );
}

export default ThemeToggle;
