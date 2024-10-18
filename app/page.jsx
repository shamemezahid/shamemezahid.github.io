"use client";

import def from "/public/def.json";
import { useEffect, useState } from "react";

import AccessibilityAccordion from "@/components/utils/accessibilitySettings";
import LoadingScreen from "@/components/utils/loadingScreen";
import IntroSection from "@/components/sections/introSection";
import QuoteSection from "@/components/sections/quoteSection";
import ActionsSection from "@/components/sections/actionsSection";
import AboutSection from "@/components/sections/aboutSection";
import LinksSection from "@/components/sections/linksSection";
import FooterSection from "@/components/sections/footerSection";

export default function Home() {
  const [data, setData] = useState(def);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "https://api.jsonbin.io/v3/b/66fd5bf8acd3cb34a890061e";
  const READ_ACCESS_KEY =
    "$2a$10$fFkcgBhr07FjK.iW/E3dO.6A6EGmCTpw8EpKcNqYlJHfyk4AzOOh6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "X-Access-Key": READ_ACCESS_KEY,
          },
        });
        if (!response.ok) {
          throw new Error("Network error, Failed to load data");
        }
        const jsonData = await response.json();
        setData(jsonData.record);
      } catch (error) {
        // If there's an error, we'll use the default data (already set in useState)
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <LoadingScreen />;

  if (error)
    console.error(error, "Error loading data, loading default data instead");

  return (
    <div className="flex flex-col gap-4 md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
      <div className="absolute inset-0 w-full h-screen bg-[url('/images/noise.jpg')] bg-repeat opacity-80 dark:opacity-0 transition-all duration-200 ease-in"></div>
      <AccessibilityAccordion />
      <main className="animate-fadeIn flex flex-col w-full h-full max-w-6xl p-2 sm:p-6 pt-6 mx-auto relative">
        <IntroSection def={def} data={data} />
        <ActionsSection def={def} data={data} />
        <QuoteSection def={def} data={data} />
        <AboutSection def={def} data={data} />
        <LinksSection def={def} data={data} />
        <FooterSection def={def} data={data} />
      </main>
    </div>
  );
}
