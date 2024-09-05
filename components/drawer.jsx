"use client";

import ResumeIcon from "@/public/icons/ResumeIcon";
import { Drawer } from "vaul";

export function BottomDrawer({ label, src }) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button
          title="Click to open resume"
          className="flex items-center gap-3 p-2 pr-4 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-teal-700 w-fit hover:bg-teal-50"
        >
          <ResumeIcon /> {label}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content className="cursor-pointer bg-[#313131] flex flex-col items-center pt-4 pb-0 sm:px-4 gap-4 max-w-3xl mx-auto rounded-t-3xl h-[90%] fixed bottom-0 left-0 right-0">
          <>
            <div className="w-12 h-2 rounded-full bg-gray-300"></div>
            <div className="w-full h-full mx-auto sm:rounded-t-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src={src}
                allow="autoplay"
              ></iframe>
            </div>
          </>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
