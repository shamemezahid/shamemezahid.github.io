import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for swipe gesture detection with visual feedback
 * @param {string} activeTab - Current active tab
 * @param {function} setActiveTab - Function to set active tab
 * @param {object} tabs - Object containing tab constants
 * @param {number} minSwipeDistance - Minimum distance for a swipe (default: 50px)
 */
export function useSwipeNavigation(activeTab, setActiveTab, tabs, minSwipeDistance = 50) {
  const swipeStartRef = useRef(null);
  const swipeContainerRef = useRef(null);
  
  const [swipeState, setSwipeState] = useState({
    translateX: 0,
    scale: 1,
    opacity: 1,
    isTransitioning: false
  });

  const resetState = useCallback(() => {
    setSwipeState({
      translateX: 0,
      scale: 1,
      opacity: 1,
      isTransitioning: false
    });
  }, []);

  const updateSwipeState = useCallback((deltaX) => {
    const maxDistance = 50;
    const progress = Math.min(Math.abs(deltaX) / maxDistance, 1);
    
    setSwipeState({
      translateX: deltaX * 0.3,
      scale: 1 - (progress * 0.1),
      opacity: 1 - (progress * 0.2),
      isTransitioning: false
    });
  }, []);

  const performTransition = useCallback((direction, nextTab) => {
    console.log(`🚀 Starting transition: ${direction}, from ${activeTab} to ${nextTab}`);
    
    // Phase 1: Slide out current tab
    const slideOutX = direction === 'left' ? -300 : 300;
    console.log(`📤 Phase 1: Sliding out current tab to ${slideOutX}px`);
    
    setSwipeState({
      translateX: slideOutX,
      scale: 0.8,
      opacity: 0,
      isTransitioning: true
    });

    // Phase 2: Switch tab and slide in from opposite direction
    setTimeout(() => {
      console.log(`🔄 Phase 2: Switching tab to ${nextTab}`);
      setActiveTab(nextTab);
      
      // Start new tab from opposite side
      const slideInStartX = direction === 'left' ? 300 : -300;
      console.log(`📥 Phase 2: New tab starts from ${slideInStartX}px`);
      
      setSwipeState({
        translateX: slideInStartX,
        scale: 0.9,
        opacity: 0.5,
        isTransitioning: true
      });

      // Phase 3: Slide to center
      setTimeout(() => {
        console.log(`🎯 Phase 3: Sliding to center`);
        setSwipeState({
          translateX: 0,
          scale: 1,
          opacity: 1,
          isTransitioning: true
        });

        // Phase 4: Complete transition
        setTimeout(() => {
          console.log(`✅ Phase 4: Transition complete`);
          resetState();
        }, 200);
      }, 50);
    }, 150);
  }, [setActiveTab, resetState, activeTab]);

  useEffect(() => {
    const container = swipeContainerRef.current;
    if (!container) return;

    const handleStart = (clientX, clientY) => {
      if (swipeState.isTransitioning) return false;
      
      swipeStartRef.current = {
        x: clientX,
        y: clientY,
        time: Date.now()
      };
      return true;
    };

    const handleMove = (clientX, clientY) => {
      if (!swipeStartRef.current || swipeState.isTransitioning) return;

      const deltaX = clientX - swipeStartRef.current.x;
      const deltaY = clientY - swipeStartRef.current.y;
      
      // Only handle horizontal swipes
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        updateSwipeState(deltaX);
      }
    };

    const handleEnd = (clientX, clientY) => {
      if (!swipeStartRef.current || swipeState.isTransitioning) return;

      const deltaX = clientX - swipeStartRef.current.x;
      const deltaY = clientY - swipeStartRef.current.y;
      const deltaTime = Date.now() - swipeStartRef.current.time;

      swipeStartRef.current = null;

      const distance = Math.abs(deltaX);
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
      const isFastEnough = deltaTime < 300;
      const isLongEnough = distance > minSwipeDistance;

      if (isHorizontalSwipe && isFastEnough && isLongEnough) {
        console.log(`👆 Swipe detected: deltaX=${deltaX}, activeTab=${activeTab}`);
        
        if (deltaX < 0 && activeTab === tabs.PROFILE) {
          // Swipe left: Profile → Crafts
          console.log(`⬅️ Swipe LEFT detected: Profile → Crafts`);
          performTransition('left', tabs.CRAFTS);
        } else if (deltaX > 0 && activeTab === tabs.CRAFTS) {
          // Swipe right: Crafts → Profile  
          console.log(`➡️ Swipe RIGHT detected: Crafts → Profile`);
          performTransition('right', tabs.PROFILE);
        } else {
          console.log(`❌ Invalid swipe: deltaX=${deltaX}, activeTab=${activeTab}`);
          resetState();
        }
      } else {
        resetState();
      }
    };

    // Touch Events
    const handleTouchStart = (e) => {
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (swipeStartRef.current) {
        const deltaX = e.touches[0].clientX - swipeStartRef.current.x;
        const deltaY = e.touches[0].clientY - swipeStartRef.current.y;
        
        // Only prevent default for horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
          e.preventDefault();
        }
        
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = (e) => {
      if (swipeStartRef.current) {
        handleEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    };

    // Mouse Events (for desktop testing)
    const handleMouseDown = (e) => {
      handleStart(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (swipeStartRef.current) {
        const deltaX = e.clientX - swipeStartRef.current.x;
        const deltaY = e.clientY - swipeStartRef.current.y;
        
        // Only prevent default for horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
          e.preventDefault();
        }
        
        handleMove(e.clientX, e.clientY);
      }
    };

    const handleMouseUp = (e) => {
      if (swipeStartRef.current) {
        handleEnd(e.clientX, e.clientY);
      }
    };

    // Add event listeners
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeTab, tabs, minSwipeDistance, performTransition, resetState, swipeState.isTransitioning, updateSwipeState]);

  // Reset state when tab changes manually (clicks)
  useEffect(() => {
    if (!swipeState.isTransitioning) {
      resetState();
    }
  }, [activeTab, swipeState.isTransitioning, resetState]);

  return { swipeContainerRef, swipeState };
}
