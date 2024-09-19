"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, ChevronDownIcon, Cog6ToothIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ResumeDrawer } from "@/components/resumeDrawer";

import Image from "next/image";
import def from "/public/def.json";
import ThemeToggle from "@/components/themeToggler";
import { ContactDrawer } from "@/components/contactDrawer";
import { ExperiencesDrawer } from "@/components/experiencesDrawer";
import TextSizeToggle from "@/components/textsizeToggler";
import { EducationDrawer } from "@/components/educationDrawer";

function Loading() {
  return (
    <div className="bg-[#313131] grid w-full h-screen place-items-center transition-all">
      <Image
        src="/loaders/loading.svg"
        alt="Loading Animation"
        width={256}
        height={256}
        className="w-16 animate-pulse"
      />
    </div>
  );
}

function IntroSection({ data }) {
  return (
    <div className="relative flex flex-col justify-start sm:flex-row sm:items-center gap-4 p-4 rounded-tr-[64px] rounded-br-[64px] rounded-tl-[100px] rounded-bl-[100px]">
      <div className="flex w-full sm:w-fit justify-between items-start">
        <Image
          alt="shamimbinzahid"
          src="/images/shameme.webp"
          id="shameme"
          height={512}
          width={512}
          className="w-32 aspect-1 rounded-full border border-gray-200 dark:border-neutral-700"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-neutral-100">
          {data?.intro.greetings || def.intro.greetings}
        </h1>
        <span className="text-base font-normal text-gray-700 dark:text-neutral-200">
          {data?.intro.tagline || def.intro.tagline}
        </span>
        <span className="flex gap-1">
          <MapPinIcon className="w-4 text-gray-500 dark:text-neutral-400" />
          <span className="text-sm font-light text-gray-500 dark:text-neutral-400">
            {data?.intro.location || def.intro.location}
          </span>
        </span>
      </div>
    </div>
  );
}

function AccessibilityAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (accordionRef.current && !accordionRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={accordionRef} className="w-fit flex flex-col items-end absolute z-[2] top-8 right-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-2 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-neutral-100 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
      >
        <span className={`text-sm overflow-hidden whitespace-nowrap ${isOpen ? 'w-32 opacity-100 mx-2' : 'w-0 opacity-0'} transition-all duration-500`}>Accessibility Menu</span>
        <Cog6ToothIcon className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`w-full grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="p-2 bg-white/10 dark:bg-neutral-900/10 rounded-b-3xl rounded-t-lg flex flex-col gap-2">
            <ThemeToggle />
            <TextSizeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteSection({ data }) {
  return (
    <p className="p-4 text-sm font-medium text-gray-700 dark:text-neutral-200 text-left sm:text-justify">
      {data?.intro.quote || def.intro.quote}
    </p>
  );
}

function LinksSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
      <h2 className="font-semibold text-gray-500 dark:text-neutral-400">
        {data?.links?.label || def?.links?.label}
      </h2>
      <div className="w-full flex flex-wrap gap-3 items-start -mx-4 transition-all duration-500">
        {(data?.links.values || def.links.values).map((link, index) => (
          <a
            key={index}
            className="group flex items-center w-fit font-semibold text-teal-700 dark:text-teal-500 transition-all duration-500 p-3 rounded-full hover:bg-teal-50 dark:hover:bg-teal-950"
            target="_blank"
            href={link.url}
            rel="noopener noreferrer"
            title={"Open " + link.label}
          >
            <ArrowUpRightIcon className="w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-500" />
            <Image
              width={20}
              height={20}
              alt="Link Icon"
              src={`/icons/${link.icon}.svg`}
              className="w-6 h-6 group-hover:w-0 group-hover:h-0 transition-all duration-500"
            />
            <p className="ml-2 whitespace-nowrap">{link.label}</p>
            {/* <div className="overflow-hidden w-0 group-hover:w-full transition-all duration-500"></div> */}
          </a>
        ))}
      </div>
    </div>
  );
}

function ActionsSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
      <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 items-start -mx-4 transition-all">
        {data?.actions?.show && data?.actions?.resume?.show && (
          <ResumeDrawer
            label={data?.actions?.resume?.label}
            src={data?.actions?.resume?.url}
          />
        )}

        {data?.actions?.show && data?.actions?.contact?.show && (
          <ContactDrawer
            label={data?.actions?.contact?.label}
            email={data?.actions?.contact?.address}
          />
        )}

        {data?.actions?.show && data?.actions?.experiences?.show && (
          <ExperiencesDrawer label="Experiences" data={data} />
        )}

        {data?.actions?.show && data?.actions?.educations?.show && (
          <EducationDrawer label="Education" data={data} />
        )}
      </div>
    </div>
  );
}

function AboutSection({ data }) {
  return (
    <div className="text-sm flex flex-col justify-start gap-2 p-4 rounded-xl">
      <h2 className="font-semibold text-gray-500 dark:text-neutral-400">
        {data?.about.label || def.about.label}
      </h2>
      <p className="text-gray-700 dark:text-neutral-200 text text-left sm:text-justify">
        {data?.about.value || def.about.value}
      </p>
    </div>
  );
}

function FooterSection({ data }) {
  return (
    <h2 className="mx-auto text-sm text-center text-gray-400 dark:text-neutral-400 mt-8 pb-6">
      2024 ©️ {data?.intro.name || def.intro.name}
    </h2>
  );
}

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/26d72e7109e9b8d9abfc"
        );
        if (!response.ok) {
          throw new Error("Network error, Failed to load data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col gap-4 md:justify-center min-h-screen dark:bg-neutral-900 transition-all duration-200 ease-in">
      <div className="absolute inset-0 h-screen w-full bg-[url('/images/noise.jpg')] bg-repeat opacity-80 dark:opacity-0 transition-all duration-200 ease-in"></div>
      <AccessibilityAccordion />
      <main className="animate-fadeIn flex flex-col gap-2 w-full h-full max-w-5xl p-2 sm:p-6 pt-6 sm:pt-24 mx-auto relative">
        <IntroSection data={data} />
        <QuoteSection data={data} />
        <ActionsSection data={data} />
        <AboutSection data={data} />
        <LinksSection data={data} />
        <FooterSection data={data} />
      </main>
    </div>
  );
}
