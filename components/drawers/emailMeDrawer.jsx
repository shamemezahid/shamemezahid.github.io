import React from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ClickToReveal } from "../utils/clickToReveal";

export function EmailMeDrawer({ label, email }) {
  const renderEmailContent = () => (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-center mb-4">Here's my email address:</p>
      <ClickToReveal content={email} />
    </div>
  );

  return (
    <CommonDrawer
      triggerIcon={EnvelopeIcon}
      triggerLabel={label || "Email Me"}
      triggerTitle="Click to view email"
      renderContent={renderEmailContent}
      drawerTitle="Email Me"
    />
  );
}
