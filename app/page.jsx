"use client";

import def from "/public/def.json";
import { useEffect, useState } from "react";

import AccessibilityAccordion from "@/components/utils/accessibilitySettings";
import IntroSection from "@/components/sections/introSection";
import QuoteSection from "@/components/sections/quoteSection";
import ActionsSection from "@/components/sections/actionsSection";
import AboutSection from "@/components/sections/aboutSection";
import LinksSection from "@/components/sections/linksSection";
import FooterSection from "@/components/sections/footerSection";


export default function Home() {
  const [data, setData] = useState(def); // Initialize with default data
  // const [loading, setLoading] = useState(false); // Start with false since we have default data
  // const [error, setError] = useState(null);
  const API_URL = "https://api.jsonbin.io/v3/b/66fd5bf8acd3cb34a890061e";
  const READ_ACCESS_KEY =
    "$2a$10$fFkcgBhr07FjK.iW/E3dO.6A6EGmCTpw8EpKcNqYlJHfyk4AzOOh6";

    const fetchData = async () => {
      try {
        // App is already rendered with default data, so we can start API fetch
        // setLoading(true);
        const response = await fetch(API_URL, {
          headers: {
            "X-Access-Key": READ_ACCESS_KEY,
          },
        });

        if (!response.ok) {
          throw new Error("Network error, Failed to load data");
        }

        const jsonData = await response.json();
        // Update state with API data
        setData(jsonData.record);
      } catch (error) {
        // setError(error);
        console.error("Error loading API data, keeping default data:", error);
      } finally {
        // setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
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
