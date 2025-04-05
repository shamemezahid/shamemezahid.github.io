import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { useAccessibility } from "../context/AccessibilityContext";

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
      className={`${className} w-full h-fit p-2 grid bg-neutral-200/25 dark:bg-neutral-700/25 hover:bg-neutral-100/25 dark:hover:bg-neutral-600/25 backdrop-blur text-neutral-600 dark:text-neutral-300 rounded-lg transition-all`}
      aria-label={isLargeText ? "Decrease text size" : "Increase text size"}
      title={isLargeText ? "Decrease text size" : "Increase text size"}
    >
      {isLargeText ? (
        <div className="relative flex items-center">
          <div className="relative w-6 h-6">
            <ZoomInIcon className="absolute inset-0 transition-all ease-in duration-500 transform scale-0 origin-center" strokeWidth={1.5}/>
            <ZoomOutIcon className="absolute inset-0 transition-all ease-out duration-500 transform scale-100 origin-center" strokeWidth={1.5}/>
          </div>
          <p className="text-sm mx-2">Regular Text</p>
        </div>
      ) : (
        <div className="relative flex items-center">
          <div className="relative w-6 h-6">
            <ZoomInIcon className="absolute inset-0 transition-all ease-in duration-500 transform scale-100 origin-center" strokeWidth={1.5}/>
            <ZoomOutIcon className="absolute inset-0 transition-all ease-out duration-500 transform scale-0 origin-center" strokeWidth={1.5}/>
          </div>
          <p className="text-sm mx-2">Large Text</p>
        </div>
      )}
    </button>
  );
}
