import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center p-6 md:p-6 fixed w-full z-50 bg-white text-black dark:bg-gray-900 shadow dark:shadow-lg transition-colors duration-300">
      <div className="text-xl md:text-2xl font-bold dark:text-white">Sai Kumar</div>
      <nav className="flex items-center space-x-4 md:space-x-6">
        <a href="#Home" className="dark:text-white hover:text-pink-400 text-sm md:text-base transition-colors">
          Home
        </a>
        <a href="#about" className="dark:text-white hover:text-pink-400 text-sm md:text-base transition-colors">
          About
        </a>
        <a href="#projects" className="dark:text-white hover:text-pink-400 text-sm md:text-base transition-colors">
          Portfolio
        </a>
        <a href="#contact" className="dark:text-white hover:text-pink-400 text-sm md:text-base transition-colors">
          Contact
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          title="Toggle Theme"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400 hover:text-yellow-300 transition-colors duration-200" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700 hover:text-gray-600 transition-colors duration-200" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;