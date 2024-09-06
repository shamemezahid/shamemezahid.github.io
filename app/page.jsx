"use client";
import { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { BottomDrawer } from "@/components/drawer";
import EmailIcon from "@/public/icons/EmailIcon";

import Image from "next/image";
import def from "/public/def.json";

function Loading() {
  return (
    <div className="grid w-full h-screen place-items-center">
      <Image
        src="/loaders/loading.svg"
        alt="Loading Animation"
        width={256}
        height={256}
        className="w-16"
      />
    </div>
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

  console.log(data);

  return (
    <div className="flex flex-col gap-4 md:h-screen md:justify-center">
      {/* Background Pattern */}
      <Image
        src="/images/pattern-diam.jpg"
        width={1920}
        height={1080}
        alt="background pattern"
        className="absolute inset-0 h-screen -z-50 bg-repeat opacity-50"
      ></Image>

      {/* The main content */}
      <main className="animate-fadeIn flex flex-col gap-4 w-full h-full lg:justify-center max-w-5xl p-2 sm:p-6 mx-auto">
        {/* Intro section */}
        <div className="flex flex-col justify-start sm:flex-row sm:items-center gap-4 p-4 rounded-l-full rounded-r-3xl md:bg-gray-50/25">
          <Image
            alt="shamimbinzahid"
            src="/images/shameme.webp"
            id="shameme"
            height={512}
            width={512}
            className="w-32 aspect-1 rounded-full border border-gray-200"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800">
              {data.intro.greetings || def.intro.greetings}
            </h1>
            <span className="text-base font-normal text-gray-700">
              {data.intro.tagline || def.intro.tagline}
            </span>
            <span className="flex gap-1">
              <MapPinIcon className="w-4 text-gray-500" />
              <span className="text-sm font-light text-gray-500">
                {data.intro.location || def.intro.location}
              </span>
            </span>
          </div>
        </div>

        {/* Rest of the content after the intro */}
        <div className="flex flex-col justify-center items-start gap-2">
          {/* Conditional sections : View Resume Btn & Email Me Btn */}
          {/* {data?.actions?.show && (
            <div className="flex gap-3 px-4 py-2">
              {data?.actions?.resume?.show && (
                <BottomDrawer
                  label={data?.actions?.resume?.label}
                  src={data?.actions?.resume?.url}
                />
              )}
              {data?.actions?.email?.show && (
                <a
                  href={data?.actions?.email?.url}
                  title={data?.actions?.email?.address}
                  className="flex items-center gap-3 p-2 pr-4 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-teal-700 w-fit hover:bg-teal-50"
                >
                  <EmailIcon /> {data?.actions?.email?.label}
                </a>
              )}
            </div>
          )} */}

          {/* Quote section */}
          <p className="p-4 text-base font-medium text-gray-700 text-left sm:text-justify">
            {data.intro.quote || def.intro.quote}
          </p>

          {/* About section */}
          <div className="flex flex-col justify-start gap-2 p-4 rounded-xl">
            <h2 className="text-base font-semibold text-gray-600">
              {data.about.label || def.about.label}
            </h2>
            <p className="text-sm text-gray-700 text text-left sm:text-justify">
              {data.about.value || def.about.value}
            </p>
          </div>
        </div>

        {/* Links section */}
        <div className="w-full flex flex-col justify-start gap-2 p-4 rounded-xl">
          <h2 className="text-base font-semibold text-gray-600">Links</h2>
          <div className="w-full grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 items-start -mx-4">
            {data?.actions?.resume?.show && (
              <BottomDrawer
                label={data?.actions?.resume?.label}
                src={data?.actions?.resume?.url}
              />
            )}
            {(data.links.values || def.links.values).map((link, index) => (
              <a
                key={index}
                className="flex items-center gap-2 w-full sm:w-fit text-sm font-semibold text-teal-700 transition-all px-4 py-2 rounded-full hover:bg-teal-50"
                target="_blank"
                href={link.url}
                rel="noopener noreferrer"
              >
                <Image
                  width={20}
                  height={20}
                  alt="Link Icon"
                  src={`/icons/${link.icon}.svg`}
                  className="w-5 h-5 stroke-gray-400"
                ></Image>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer section */}
        <h2 className="mx-auto text-sm text-center text-gray-400 mt-8 pb-6">
          2024 ©️ {data.intro.name || def.intro.name}
        </h2>
      </main>
    </div>
  );
}
