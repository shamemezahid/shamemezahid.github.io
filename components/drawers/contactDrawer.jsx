"use client";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import SeparatorLine from "../utils/separatorLine";

function ClickToReveal({ content }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between dark:bg-neutral-700 bg-neutral-200/50 rounded-lg overflow-hidden">
      <a
        onClick={() => {
          setIsRevealed(!isRevealed);
          setIsCopied(false);
        }}
        className="w-full flex items-center px-4 py-3 font-normal dark:text-teal-400 text-teal-700 hover:text-teal-500"
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

function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  textarea = false,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label>{label}</label>
      {textarea ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          className="px-3 py-3 rounded-lg dark:bg-neutral-700 bg-neutral-200/50"
          rows="3"
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="px-3 py-3 rounded-lg dark:bg-neutral-700 bg-neutral-200/50"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}

function LoadingBtn() {
  <div className="flex items-center justify-center p-4 w-full mx-auto">
    <svg
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <circle
        fill="#2DD4BF"
        stroke="#2DD4BF"
        stroke-width="8"
        r="15"
        cx="40"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="0.8"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
      <circle
        fill="#2DD4BF"
        stroke="#2DD4BF"
        stroke-width="8"
        r="15"
        cx="100"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="0.8"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </circle>
      <circle
        fill="#2DD4BF"
        stroke="#2DD4BF"
        stroke-width="8"
        r="15"
        cx="160"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="0.8"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </circle>
    </svg>
  </div>;
}

function FormComponent() {
  const [formData, setFormData] = useState({
    "entry.673605360": "", // Name
    "entry.2073457343": "", // Email
    "entry.429667022": "", // Phone
    "entry.146314014": "", // Company
    "entry.34928778": "", // Comment
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSff7etd50iLsYve_xks1GP9kkUhiHHmFc-bYLkOFceUc7pCcg/formResponse"; // Replace with your actual form action URL

    // Prepare URL-encoded data
    const urlEncodedData = new URLSearchParams();
    for (const key in formData) {
      urlEncodedData.append(key, formData[key]);
    }

    try {
      const response = await fetch(googleFormURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      });

      setSuccess("Form submitted successfully!");
      setLoading(false);
    } catch (err) {
      setSuccess("Form submitted successfully!");
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 text-neutral-800 dark:text-neutral-50 w-full"
      >
        <InputField
          label="Your Name"
          type="text"
          name="entry.673605360"
          placeholder="Start typing"
          value={formData["entry.673605360"]}
          onChange={handleChange}
          required
        />
        <InputField
          label="Company / Organization"
          type="text"
          name="entry.2073457343"
          placeholder="e.g. Google, Individual"
          value={formData["entry.2073457343"]}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          type="email"
          name="entry.146314014"
          placeholder="Start typing"
          value={formData["entry.146314014"]}
          onChange={handleChange}
          required
        />
        <InputField
          label="Phone"
          type="tel"
          name="entry.429667022"
          placeholder="Optional"
          value={formData["entry.429667022"]}
          onChange={handleChange}
        />
        <InputField
          label="Message"
          type="text"
          name="entry.34928778"
          placeholder="Write your message"
          value={formData["entry.34928778"]}
          onChange={handleChange}
          required
          textarea
        />
        {success ? (
          <p className="dark:text-teal-400 text-teal-600 w-full my-4 p-4 rounded-lg text-center">
            {success}
          </p>
        ) : loading ? (
          <LoadingBtn />
        ) : (
          <button
            type="submit"
            className="w-full my-4 bg-teal-600 text-white py-4 px-4 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export function ContactDrawer({ label, email }) {
  const ContactIcon = React.forwardRef((props, ref) => (
    <Image
      ref={ref}
      width={20}
      height={20}
      alt="Contact Icon"
      src={`/icons/em.svg`}
      className="w-5 h-5 transition-all duration-500 group-hover:h-0 stroke-gray-400"
      {...props}
    />
  ));

  ContactIcon.displayName = "ContactIcon";

  const renderContactContent = () => (
    <>
      <div className="w-full h-full flex flex-col text-sm gap-4 overflow-y-auto scrollbar-hide scrollbar-thin scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent mb-8">
        <span className="flex flex-col gap-1">
          <p className="font-normal">
            Feel free to reach out using the form below. Or send me an email!
          </p>
          <ClickToReveal content={email} />
        </span>
        <SeparatorLine />
        <FormComponent />
      </div>
    </>
  );

  return (
    <CommonDrawer
      triggerIcon={ContactIcon}
      triggerLabel={label}
      triggerTitle="Click to open contact form"
      renderContent={renderContactContent}
      drawerTitle={label}
    />
  );
}
