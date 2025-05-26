import { useState, useRef, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function ScrollableNavigation({ children }) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef(null);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollToDirection = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust scroll amount as needed
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount)
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full">
      <div 
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ease-out ${
          canScrollLeft 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-full opacity-0'
        }`}
      >
        <button
          onClick={() => scrollToDirection('left')}
          className="border border-white/30 dark:border-neutral-30 w-8 h-8 rounded-full bg-white/75 dark:bg-neutral-900/90 flex items-center justify-center hover:from-neutral-50 hover:via-neutral-50/95 hover:to-neutral-50/80 dark:hover:from-neutral-800 dark:hover:via-neutral-800/95 dark:hover:to-neutral-800/80 transition-all duration-200 backdrop-blur-sm"
        >
          <ArrowLeftIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-200" strokeWidth={2} />
        </button>
      </div>
      
      <div 
        ref={scrollContainerRef}
        onScroll={checkScrollability}
        className="w-full overflow-x-auto py-4 px-1 sm:px-4 flex items-center gap-2 sm:gap-6 md:gap-10 scrollbar-none"
      >
        {children}
      </div>

      <div 
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ease-out ${
          canScrollRight 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
      >
        <button
          onClick={() => scrollToDirection('right')}
          className="border border-white/10 dark:border-neutral/5 w-8 h-8 rounded-full bg-white/90 dark:bg-neutral-900/90 flex items-center justify-center hover:from-neutral-50 hover:via-neutral-50/95 hover:to-neutral-50/80 dark:hover:from-neutral-800 dark:hover:via-neutral-800/95 dark:hover:to-neutral-800/80 transition-all duration-200 backdrop-blur-sm"
        >
          <ArrowRightIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-200" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
