import Image from "next/image";
import React, { useState } from "react";
import { CommonDrawer } from "@/components/drawers/CommonDrawer";
import { ClickToReveal } from "../utils/ClickToReveal";
import { ContactFormSection } from "../sections/ContactFormSection";
import { MailCheckIcon } from "lucide-react";

const renderContactContent = ( data ) => (
  <>
    {data?.actions?.contact?.show && (
      <div className="flex flex-row w-full sm:w-fit whitespace-nowrap gap-3 sm:absolute sm:top-1 right-0">
        <ClickToReveal content={data?.actions?.contact?.address} />
      </div>
    )}
    <div className="w-full h-full flex flex-col text-sm gap-4 overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent mb-8">
      <ContactFormSection />
    </div>
  </>
);

export function ContactDrawer({ label, subtitle, data }) {
  return (
    <CommonDrawer
      triggerIcon={MailCheckIcon}
      triggerLabel={label}
      triggerTitle="Click to open contact form"
      renderContent={() => renderContactContent(data)}
      drawerTitle={label}
      drawerSubtitle={subtitle}
    />
  );
}
