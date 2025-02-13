import Image from "next/image";
import React, { useState } from "react";
import { CommonDrawer } from "@/components/drawers/CommonDrawer";
import { ClickToReveal } from "../utils/ClickToReveal";
import { ContactFormSection } from "../sections/ContactFormSection";

const renderContactContent = ( data ) => (
  <>
    {data?.actions?.contact?.show_email && (
      <div className="flex flex-row w-full sm:w-fit whitespace-nowrap gap-3 sm:absolute sm:top-1 right-0">
        <ClickToReveal content={data?.actions?.contact?.address} />
      </div>
    )}
    <div className="w-full h-full flex flex-col text-sm gap-4 overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent mb-8">
      <ContactFormSection />
    </div>
  </>
);

export function ContactDrawer({ label, data }) {

  const ContactIcon = React.forwardRef((props, ref) => (
    <Image
      ref={ref}
      width={20}
      height={20}
      alt="Contact Icon"
      src={`/icons/em.svg`}
      className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-neutral-400"
      {...props}
    />
  ));

  ContactIcon.displayName = "ContactIcon";
  
  return (
    <CommonDrawer
      triggerIcon={ContactIcon}
      triggerLabel={label}
      triggerTitle="Click to open contact form"
      renderContent={() => renderContactContent(data)}
      drawerTitle={label}
      drawerSubtitle="Feel free to reach out using the form below."
    />
  );
}
