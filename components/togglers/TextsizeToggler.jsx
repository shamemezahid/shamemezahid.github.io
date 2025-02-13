import { useAccessibility } from "../context/AccessibilityContext";
import {
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";

export default function TextSizeToggle({ className }) {
  const { isLargeText, setIsLargeText } = useAccessibility();

  const toggleTextSize = () => {
    setIsLargeText(!isLargeText);
    if (!isLargeText) {
      document.documentElement.classList.add("large-text");
      sessionStorage.setItem("largeText", "true");
    } else {
      document.documentElement.classList.remove("large-text");
      sessionStorage.removeItem("largeText");
    }
  };

  return (
    <button
      onClick={toggleTextSize}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={isLargeText ? "Decrease text size" : "Increase text size"}
      title={isLargeText ? "Decrease text size" : "Increase text size"}
    >
      {isLargeText ? (
        <div className="relative flex items-center">
          <div className="relative w-6 h-6">
            <MagnifyingGlassPlusIcon className="absolute inset-0 transition-all ease-in duration-500 transform scale-0 origin-center" />
            <MagnifyingGlassMinusIcon className="absolute inset-0 transition-all ease-out duration-500 transform scale-100 origin-center" />
          </div>
          <p className="text-sm mx-2">Regular Text</p>
        </div>
      ) : (
        <div className="relative flex items-center">
          <div className="relative w-6 h-6">
            <MagnifyingGlassPlusIcon className="absolute inset-0 transition-all ease-in duration-500 transform scale-100 origin-center" />
            <MagnifyingGlassMinusIcon className="absolute inset-0 transition-all ease-out duration-500 transform scale-0 origin-center" />
          </div>
          <p className="text-sm mx-2">Large Text</p>
        </div>
      )}
    </button>
  );
}
