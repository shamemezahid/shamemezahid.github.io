import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-10 right-10 p-3 grid place-items-center bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full transition-all"
    >
      {theme === "dark" ? (
        <div className="flex items-center">
          {/* <p className="text-sm mr-3">Light Mode</p> */}
          <MoonIcon className="transition-all duration-500 w-0 h-0" />
          <SunIcon className="transition-all duration-500 w-8 h-8" />
        </div>
      ) : (
        <div className="flex items-center">
          {/* <p className="text-sm mr-3">Dark Mode</p> */}
          <MoonIcon className="transition-all duration-500 w-8 h-8" />
          <SunIcon className="transition-all duration-500 w-0 h-0" />
        </div>
      )}
    </button>
  );
}
