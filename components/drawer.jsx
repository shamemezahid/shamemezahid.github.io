"use client";

import ResumeIcon from "@/public/icons/ResumeIcon";
import { Drawer } from "vaul";

export function BottomDrawer({ label, src }) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button
          title="Click to open resume"
          className="flex items-center gap-2 w-full sm:w-fit text-sm text-left font-semibold text-teal-700 transition-all px-4 py-3 rounded-full hover:bg-teal-50"
        >
          <ResumeIcon />
          {label}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content className="cursor-pointer bg-[#313131] flex flex-col items-center pt-4 pb-0 px-6 sm:px-10 gap-6 max-w-3xl mx-auto rounded-t-3xl h-[90%] fixed bottom-0 left-0 right-0">
          <>
            <div className="w-12 h-2 rounded-full bg-gray-500"></div>
            <div className="w-full h-full flex flex-col gap-4 text-white">
            <p className="text-2xl font-semibold px-2">{label}</p>
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
