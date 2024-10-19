"use client";

import { useEffect, useState, useCallback } from "react";

import AccessibilityAccordion from "@/components/utils/accessibilitySettings";
import LoadingScreen from "@/components/utils/loadingScreen";
import IntroSection from "@/components/sections/introSection";
import QuoteSection from "@/components/sections/quoteSection";
import ActionsSection from "@/components/sections/actionsSection";
import AboutSection from "@/components/sections/aboutSection";
import LinksSection from "@/components/sections/linksSection";
import FooterSection from "@/components/sections/footerSection";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://api.jsonbin.io/v3/b/66fd5bf8acd3cb34a890061";
  const READ_ACCESS_KEY =
    "$2a$10$fFkcgBhr07FjK.iW/E3dO.6A6EGmCTpw8EpKcNqYlJHfyk4AzOOh6";

  const fetchDefaultData = useCallback(async () => {
    try {
      const response = await fetch('/def.json');
      if (!response.ok) {
        throw new Error("Failed to load default data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error loading default data:", error);
      return null;
    }
  }, []);

  const fetchApiData = useCallback(async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          "X-Access-Key": READ_ACCESS_KEY,
        },
      });
      if (!response.ok) {
        throw new Error("Network error, Failed to load API data");
      }
      const jsonData = await response.json();
      return jsonData.record;
    } catch (error) {
      console.error("Error loading API data:", error);
      return null;
    }
  }, []);

  const updateData = useCallback(async () => {
    const defaultData = await fetchDefaultData();
    const apiData = await fetchApiData();

    setData(prevData => {
      const newData = { ...defaultData, ...apiData };
      if (JSON.stringify(prevData) !== JSON.stringify(newData)) {
        console.log("Data updated");
        return newData;
      }
      return prevData;
    });

    setIsLoading(false);
  }, [fetchDefaultData, fetchApiData]);

  useEffect(() => {
    updateData();

    const pollInterval = setInterval(updateData, 1000); // Poll every 30 seconds

    return () => clearInterval(pollInterval);
  }, [updateData]);

  if (isLoading || !data) return <LoadingScreen />;

  return (
    <div className="flex flex-col gap-4 md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
      <div className="absolute inset-0 w-full h-screen bg-[url('/images/noise.jpg')] bg-repeat opacity-80 dark:opacity-0 transition-all duration-200 ease-in"></div>
      <AccessibilityAccordion />
      <main className="animate-fadeIn flex flex-col w-full h-full max-w-6xl p-2 sm:p-6 pt-6 mx-auto relative">
        <IntroSection data={data} />
        <ActionsSection data={data} />
        <QuoteSection data={data} />
        <AboutSection data={data} />
        <LinksSection data={data} />
        <FooterSection data={data} />
      </main>
    </div>
  );
}
