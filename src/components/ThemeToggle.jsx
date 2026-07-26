import { useTheme } from "../context/ThemeContext";
import "../styles/themeToggle.css";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}