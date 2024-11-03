import React, { useState } from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { QrCodeIcon, ArrowPathIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function ContactCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const downloadCard = () => {
    // Implement download functionality here
    // You might want to use a library like js-file-download or create a backend endpoint
    console.log("Downloading card...");
  };

  return (
    <div className="flex flex-col w-full h-full items-center py-8">
      <div className={`relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''} preserve-3d`}>
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src="/images/card-front.svg"
            alt="Business Card Front"
            layout="fill"
            className="rounded-lg shadow-lg overflow-hidden"
          />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Image
            src="/images/card-back.svg"
            alt="Business Card Back"
            layout="fill"
            className="rounded-lg shadow-lg overflow-hidden"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={flipCard}
          className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
        >
          <ArrowPathIcon className="w-5 h-5 mr-2" />
          Flip Card
        </button>
        <button
          onClick={downloadCard}
          className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
        >
          <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
          Download
        </button>
      </div>
    </div>
  );
}

export function ContactCardDrawer({ label }) {
  const renderContactCardContent = () => (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-y-auto scrollbar-hide">
      <ContactCard />
    </div>
  );

  return (
    <CommonDrawer
      triggerIcon={QrCodeIcon}
      triggerLabel={label || "Contact Card"}
      triggerTitle="Click to view contact card"
      renderContent={renderContactCardContent}
      drawerTitle="My Contact Card"
    />
  );
}

