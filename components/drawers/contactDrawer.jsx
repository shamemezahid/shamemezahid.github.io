import Image from "next/image";
import React, { useState } from "react";
import { CommonDrawer } from "@/components/drawers/commonDrawer";
import { ContactCardDrawer } from "@/components/drawers/contactCardDrawer";
import { EmailMeDrawer } from "@/components/drawers/emailMeDrawer";
import { ClickToReveal } from "../utils/clickToReveal";

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
      <label className="ml-4">{label}</label>
      {textarea ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          className="px-3 py-3 rounded-2xl dark:bg-neutral-700 bg-neutral-200/50"
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
          className="px-4 py-3 rounded-2xl dark:bg-neutral-700 bg-neutral-200/50"
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
      // TODO: This is where engineering peaks
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
          <p className="dark:text-emerald-400 text-emerald-600 w-full my-4 p-4 rounded-lg text-center">
            {success}
          </p>
        ) : loading ? (
          <LoadingBtn />
        ) : (
          <button
            type="submit"
            className="w-full my-4 bg-emerald-600 text-white py-4 px-4 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export function ContactDrawer({ label, email, showEmailMe, showContactCard }) {
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

  const renderContactContent = () => (
    <>
      <div className="w-full h-full flex flex-col text-sm gap-4 overflow-y-auto scrollbar-hide scrollbar-none scrollbar-thumb-rounded-full border-x-0 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-200 scrollbar-track-transparent mb-8">
        {(
          showEmailMe
        ) && (
          <div className="flex flex-row w-fit whitespace-nowrap gap-3 sm:absolute sm:top-1 right-0">
            <ClickToReveal content={email} />
          </div>
        )}
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
      drawerSubtitle="Feel free to reach out using the form below."
    />
  );
}
