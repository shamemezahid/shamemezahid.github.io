import React from "react";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { Drawer } from "vaul";
import SeparatorLine from "../utils/separatorLine";

const TriggerButton = React.forwardRef(({ icon: Icon, label, title, styles, ...props }, ref) => (
  <button
    ref={ref}
    title={title}
    className={`group flex items-center gap-2 w-full sm:w-fit text-sm text-left font-semibold transition-all px-4 py-3 rounded-full text-teal-700 dark:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950 ${styles}`}
    {...props}
  >
    <div className="flex flex-col">
      <Icon className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-gray-400" />
      <DocumentArrowUpIcon className="w-5 h-0 transition-all duration-500 group-hover:w-5 group-hover:h-5" />
    </div>
    {label}
  </button>
));

TriggerButton.displayName = 'TriggerButton';

export function CommonDrawer({ 
  triggerIcon, 
  triggerLabel, 
  triggerTitle, 
  triggerStyles,
  renderContent,
  drawerTitle,
  contentStyles
}) {
  return (
    <Drawer.Root shouldScaleBackground={false}>
      <Drawer.Trigger>
        <TriggerButton 
          icon={triggerIcon} 
          label={triggerLabel} 
          title={triggerTitle} 
          styles={triggerStyles}
        />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content className={`cursor-pointer bg-neutral-50 dark:bg-neutral-800 flex flex-col items-center pt-12 pb-0 px-6 sm:px-10 gap-6 max-w-3xl mx-auto rounded-t-3xl h-[90%] fixed bottom-0 left-0 right-0 ${contentStyles}`}>
          <div className="absolute top-4 w-10 min-h-2 h-2 rounded-full dark:bg-neutral-500 bg-neutral-300"></div>
          <div className="relative w-full h-full flex flex-col gap-4 dark:text-neutral-50 text-neutral-700">
            <p className="w-full dark:text-neutral-50 text-neutral-700 text-xl font-semibold">{drawerTitle}</p>
            <SeparatorLine />
            {renderContent()}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}