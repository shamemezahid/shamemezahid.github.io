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

  const API_URL = "https://api.npoint.io/26d72e7109e9b8d9abfc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network error, Failed to load data");
        }
        const jsonData = await response.json();
        setData(jsonData);
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
      <div className="absolute inset-0 h-screen w-full bg-[url('/images/noise.jpg')] bg-repeat opacity-80 dark:opacity-0 transition-all duration-200 ease-in"></div>
      <AccessibilityAccordion />
      <main className="animate-fadeIn flex flex-col w-full h-full max-w-5xl p-2 sm:p-6 pt-6 mx-auto relative">
        <IntroSection def={def} data={data} />
        <QuoteSection def={def} data={data} />
        <ActionsSection def={def} data={data} />
        <AboutSection def={def} data={data} />
        <LinksSection def={def} data={data} />
        <FooterSection def={def} data={data} />
      </main>
    </div>
  );
}
