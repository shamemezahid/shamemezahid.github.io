"use client";

import ResumeIcon from "@/public/icons/ResumeIcon";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { Drawer } from "vaul";

export function ResumeDrawer({ label, src }) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button
          title="Click to open resume"
          className="group flex items-center gap-2 w-full sm:w-fit text-sm text-left font-semibold text-teal-700 dark:text-teal-500 transition-all px-4 py-3 rounded-full hover:bg-teal-50 dark:hover:bg-teal-950"
        >
          <div className="flex flex-col">
            <ResumeIcon className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-gray-400" />
            <DocumentArrowUpIcon className="w-5 h-0 transition-all duration-500 group-hover:w-5 group-hover:h-5" />
          </div>
          {label}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content className="cursor-pointer bg-neutral-50 dark:bg-[#313131] flex flex-col items-center pt-4 pb-0 px-6 sm:px-10 gap-6 max-w-3xl mx-auto rounded-t-3xl h-[90%] fixed bottom-0 left-0 right-0">
          <>
            <div className="w-12 h-2 rounded-full dark:bg-neutral-500 bg-neutral-300"></div>
            <div className="w-full h-full flex flex-col gap-4 dark:text-neutral-50 text-neutral-700">
              <p className="text-xl font-semibold px-2">{label}</p>
              <div className="w-full h-full mx-auto sm:rounded-t-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={src}
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
