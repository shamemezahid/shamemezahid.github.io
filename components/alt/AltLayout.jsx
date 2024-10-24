import React, { useState, useEffect } from 'react';
import TopBar from '@/components/alt/TopBar';
import IntroSection from '@/components/sections/introSection';
import About from '@/components/alt/About';
import Experience from '@/components/alt/Experience';
import Skills from '@/components/alt/Skills';
import Education from '@/components/alt/Education';
import Research from '@/components/alt/Research';
import Contact from '@/components/alt/Contact';
import AccessibilityAccordion from '@/components/utils/accessibilitySettings';
import LoadingScreen from '@/components/utils/loadingScreen';
import def from '@/public/def.json';
import ExperiencesSection from '../drawers/experiencesDrawer';

export default function AltLayout() {
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
  if (error) console.error(error, "Error loading data, loading default data instead");

  return (
    <div className="flex flex-col min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
      <div className="absolute inset-0 w-full h-screen bg-[url('/images/noise.jpg')] bg-repeat opacity-80 dark:opacity-0 transition-all duration-200 ease-in"></div>
      <AccessibilityAccordion />
      <TopBar />
      <main className="flex-grow max-w-6xl mx-auto w-full p-4">
        <IntroSection def={def} data={data} />
        <About def={def} data={data} />
        <Experience def={def} data={data} />
        <Skills def={def} data={data} />
        <Education def={def} data={data} />
        <Research def={def} data={data} />
        <Contact def={def} data={data} />
      </main>
    </div>
  );
}
