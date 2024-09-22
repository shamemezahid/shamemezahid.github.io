import { useState, useEffect } from "react";
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function AnimationToggle({ className }) {
  const [isAnimated, setIsAnimated] = useState(true);

//   useEffect(() => {
//     const savedAnimationState = sessionStorage.getItem("isAnimated");
//     if (savedAnimationState === "false") {
//       setIsAnimated(false);
//       document.documentElement.classList.add("reduce-animation");
//     }
//   }, []);

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
    if (isAnimated) {
      document.documentElement.classList.add("reduce-animation");
    //   sessionStorage.setItem("isAnimated", "false");
    } else {
      document.documentElement.classList.remove("reduce-animation");
    //   sessionStorage.setItem("isAnimated", "true");
    }
  };

  return (
    <button
      onClick={toggleAnimation}
      className={`${className} w-full h-fit p-2 grid bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 text-neutral-600 dark:text-neutral-300 rounded-full transition-all`}
      aria-label={isAnimated ? "Reduce animations" : "Enable animations"}
      title={isAnimated ? "Reduce animations" : "Enable animations"}
    >
      <div className="flex items-center">
        {isAnimated ? (
          <>
            <PauseCircleIcon className="w-6 h-6" />
            <p className="text-sm mx-2">Reduce Motion</p>
          </>
        ) : (
          <>
            <PlayCircleIcon className="w-6 h-6" />
            <p className="text-sm mx-2">Enable Motion</p>
          </>
        )}
      </div>
    </button>
  );
}