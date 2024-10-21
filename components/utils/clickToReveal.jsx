import React, { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export function ClickToReveal({ content }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between dark:bg-neutral-700 bg-neutral-200/50 rounded-lg overflow-hidden">
      <a
        onClick={() => {
          setIsRevealed(!isRevealed);
          setIsCopied(false);
        }}
        className="w-full flex items-center px-4 py-3 font-normal dark:text-emerald-400 text-emerald-700 hover:text-emerald-500"
      >
        <EyeIcon
          className={
            isRevealed
              ? "w-0 h-0 transition-all"
              : "w-5 h-5 dark:text-neutral-400 text-neutral-500 transition-all"
          }
        />
        <EyeSlashIcon
          className={
            isRevealed
              ? "w-5 h-5 dark:text-neutral-400 text-neutral-500 transition-all"
              : "w-0 h-0 transition-all"
          }
        />

        <p
          className={
            isRevealed
              ? "ml-3 transition-all duration-500"
              : "ml-0 w-0 h-0 opacity-0"
          }
        >
          {content}
        </p>
        <p
          className={
            isRevealed
              ? "ml-0 w-0 h-0 opacity-0"
              : "ml-3 transition-all duration-500"
          }
        >
          Click to reveal email
        </p>
      </a>
      <a
        className={
          isRevealed
            ? "w-full sm:w-fit flex gap-3 items-center px-4 py-3 dark:bg-neutral-600 bg-neutral-300 hover:bg-neutral-200 whitespace-nowrap transition-all duration-100"
            : "w-0 h-0 transition-all duration-100"
        }
        onClick={() =>
          navigator.clipboard
            .writeText(content)
            .then(setIsCopied(true))
            .catch((err) => console.error("Error copying to clipboard", err))
        }
      >
        {isCopied ? (
          <>
            <CheckCircleIcon className="w-5 h-5 text-neutral-400" />
            <p>Copied</p>
          </>
        ) : (
          <>
            <DocumentDuplicateIcon className="w-5 h-5 text-neutral-400" />
            <p>Click to Copy</p>
          </>
        )}
      </a>
    </div>
  );
}

