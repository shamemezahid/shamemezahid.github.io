"use client";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ResumeDrawer } from "@/components/resumeDrawer";

import Image from "next/image";
import def from "/public/def.json";
import { ContactDrawer } from "@/components/contactDrawer";
import ThemeToggle from "@/components/themeToggler";
import { TestResumeDrawer } from "@/components/testResumeDrawer";
import { TestContactDrawer } from "@/components/testContactDrawer";

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
        <ThemeToggle className="sm:hidden" />
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
      <ThemeToggle className="hidden sm:block absolute top-6 right-6" />
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
      <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 items-start -mx-4">
        {data?.actions?.show && data?.actions?.resume?.show && (
          <TestResumeDrawer
            label={data?.actions?.resume?.label}
            src={data?.actions?.resume?.url}
          />
        )}
        {data?.actions?.show && data?.actions?.contact?.show && (
          <TestContactDrawer
            label={data?.actions?.contact?.label}
            email={data?.actions?.contact?.address}
          />
        )}
        {(data?.links.values || def.links.values).map((link, index) => (
          <a
            key={index}
            className="group flex items-center w-full sm:w-fit font-semibold text-teal-700 dark:text-teal-500 transition-all px-4 py-3 rounded-full hover:bg-teal-50 dark:hover:bg-teal-950"
            target="_blank"
            href={link.url}
            rel="noopener noreferrer"
            title={"Open " + link.label}
          >
            <ArrowUpRightIcon className="w-0 h-0 group-hover:w-5 group-hover:h-5 transition-all duration-500" />
            <Image
              width={20}
              height={20}
              alt="Link Icon"
              src={`/icons/${link.icon}.svg`}
              className="w-5 h-5 group-hover:w-0 group-hover:h-0 transition-all duration-500"
            ></Image>
            <p className="ml-2">{link.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function ExperiencesSection({ data }) {
  return (
    <div className="text-sm w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
      <h2 className="font-semibold text-gray-500 dark:text-neutral-400">
        {data?.experiences?.label || data?.experiences?.label}
      </h2>
      <div className="w-full flex flex-col gap-6 items-start text-gray-700 dark:text-neutral-200 text-left">
        {(data?.experiences.values || def.experiences.values).map(
          (experience, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {experience.workplace}
                </h3>
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  {experience.website}
                </a>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-gray-700 dark:text-neutral-200">
                  {experience.designation}
                </p>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  {experience.start} - {experience.end}
                </p>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                  {experience.shift}
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                  {experience.nature}
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-neutral-300 px-2 py-1 rounded text-xs">
                  {experience.location}
                </span>
              </div>
              <p className="text-gray-600 dark:text-neutral-300">
                {experience.responsibilities}
              </p>
            </div>
          )
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
      <main className="animate-fadeIn flex flex-col gap-2 w-full h-full max-w-5xl p-2 sm:p-6 pt-6 sm:pt-24 mx-auto">
        <IntroSection data={data} />
        <QuoteSection data={data} />
        <LinksSection data={data} />
        <ExperiencesSection data={data} />
        <AboutSection data={data} />
        <FooterSection data={data} />
      </main>
    </div>
  );
}
