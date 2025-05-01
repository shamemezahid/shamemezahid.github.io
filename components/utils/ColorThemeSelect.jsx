"use client";

import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";
import { Palette } from "lucide-react";

const colorOptions = {
  blue: colors.blue,
  emerald: colors.emerald,
  indigo: colors.indigo,
  rose: colors.rose,
  fuchsia: colors.fuchsia,
  gray: colors.gray,
  amber: colors.amber,
  teal: colors.teal,
  violet: colors.violet,
  green: colors.green,
};

const defaultColor = Object.keys(colorOptions)[6];


export default function ColorThemeSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(() => defaultColor);

  const setThemeColor = (colorName) => {
    const color = colorOptions[colorName];
    const root = document.documentElement;
    
    Object.entries(color).forEach(([shade, value]) => {
      const rgb = value.match(/\w\w/g)
        ?.map(x => parseInt(x, 16))
        .join(" ");
      root.style.setProperty(`--primary-color-${shade}`, rgb);
    });
    
    sessionStorage.setItem("themeColor", colorName);
    setCurrentColor(colorName);
    // setIsOpen(false);
  };

  useEffect(() => {
    const savedColor = sessionStorage.getItem("themeColor") || defaultColor;
    setThemeColor(savedColor);
  }, []);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-2 items-center p-2 w-full rounded-lg bg-neutral-200/25 dark:bg-neutral-700/25 hover:bg-neutral-100/25 dark:hover:bg-neutral-600/25 backdrop-blur text-neutral-600 dark:text-neutral-300 transition-all duration-300"
      >
        <Palette strokeWidth={1.5} className={`w-6 h-6 duration-400 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        <span className="text-sm text-neutral-700 dark:text-neutral-300">Color Theme</span>
        <div 
          className={`ml-auto w-4 h-4 rounded-full transition-all duration-300 ring-2 ring-offset-2 dark:ring-offset-neutral-800/25 ring-neutral-600/25`}
          style={{ backgroundColor: colorOptions[currentColor][500] }}
        />
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="mt-1 right-0 w-full rounded-2xl grid grid-cols-5 gap-1">
            {Object.entries(colorOptions).map(([name, color]) => (
              <button
                key={name}
                onClick={() => setThemeColor(name)}
                className={`p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 group ${
                  currentColor === name ? 'ring-inset ring-2 ring-primary-500' : ''
                }`}
                title={name.charAt(0).toUpperCase() + name.slice(1)}
              >
                <div 
                  className={`w-full aspect-square rounded-full transition-all duration-300 group-hover:scale-110 ${
                    currentColor === name ? 'scale-110' : ''
                  }`}
                  style={{ backgroundColor: color[500] }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
