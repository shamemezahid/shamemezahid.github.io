import { useAccessibility } from "../context/AccessibilityContext";
import { ContrastIcon } from "lucide-react";

export default function HighContrastToggle({ className }) {
  const { isHighContrast, setIsHighContrast } = useAccessibility();

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.body.classList.add("high-contrast");
      sessionStorage.setItem("highContrast", "true");
    } else {
      document.body.classList.remove("high-contrast");
      sessionStorage.removeItem("highContrast");
    }
  };

  return (
    <button
      onClick={toggleHighContrast}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200/25 dark:bg-neutral-700/25 hover:bg-neutral-100/25 dark:hover:bg-neutral-600/25 text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
      title={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
    >
      <div className="relative flex items-center">
        <div className="relative w-6 h-6">
          <ContrastIcon className={`absolute inset-0 transition-all ease-in duration-500 transform ${isHighContrast ? 'scale-0' : 'scale-100'} origin-center`} strokeWidth={1.5}/>
          <ContrastIcon className={`absolute inset-0 transition-all ease-out duration-500 transform ${isHighContrast ? 'scale-100' : 'scale-0'} origin-center`} strokeWidth={1.5}/>
        </div>
        <p className="text-sm mx-2">{isHighContrast ? "Normal Contrast" : "High Contrast"}</p>
      </div>
    </button>
  );
}
