"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isLargeText, setIsLargeText] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme
    const storedTheme = sessionStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme('dark');
        document.documentElement.classList.add("dark");
        sessionStorage.setItem("theme", "dark");
      } else {
        sessionStorage.setItem("theme", "light");
      }
    }

    // Load text size
    const savedTextSize = sessionStorage.getItem("largeText");
    if (savedTextSize === "true") {
      setIsLargeText(true);
      document.documentElement.classList.add("large-text");
    }

    // Load animation state
    const savedAnimationState = sessionStorage.getItem("isAnimated");
    if (savedAnimationState === "false") {
      setIsAnimated(false);
      document.documentElement.classList.add("reduce-animation");
    }

    // Load contrast
    const savedHighContrast = sessionStorage.getItem("highContrast");
    if (savedHighContrast === "true") {
      setIsHighContrast(true);
      document.documentElement.classList.add("high-contrast");
    }
  }, []);
  
  const resetPreferences = () => {
    if (!mounted) return;

    try {
      // Clear session storage
      sessionStorage.clear();
      
      // Remove all classes
      document.documentElement.classList.remove("large-text");
      document.documentElement.classList.remove("high-contrast");
      document.documentElement.classList.remove("reduce-animation");
      document.documentElement.classList.remove("dark");
      
      // Check system preference and set theme accordingly
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      // Update states first
      setTheme(prefersDark ? 'dark' : 'light');
      setIsLargeText(false);
      setIsAnimated(true);
      setIsHighContrast(false);
      
      // Then update DOM and storage
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        sessionStorage.setItem("theme", "dark");
      } else {
        sessionStorage.setItem("theme", "light");
      }
    } catch (error) {
      console.error("Error resetting preferences:", error);
    }
  };

  const hasPreferencesSet = () => {
    return (
      theme !== (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light') ||
      isLargeText ||
      !isAnimated ||
      isHighContrast
    );
  };

  return (
    <AccessibilityContext.Provider 
      value={{
        theme,
        setTheme,
        isLargeText,
        setIsLargeText,
        isAnimated,
        setIsAnimated,
        isHighContrast,
        setIsHighContrast,
        resetPreferences,
        hasPreferencesSet
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
