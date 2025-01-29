import React from "react";
import Script from "next/script";
import "./globals.css";
import { Merriweather_Sans, Figtree } from "next/font/google";
import { AccessibilityProvider } from "@/components/context/AccessibilityContext";
import { DataProvider } from "@/components/context/DataContext";

// const font = Figtree({ subsets: ["latin"] });
const font = Merriweather_Sans({ subsets: ["latin-ext"] });

export const metadata = {
  title: "Shamim Bin Zahid",
  description:
    "I'm Shamim Bin Zahid, A UI/UX Designer from Bangladesh with over 4 years of experience. I specialize in Software Product Design, UI/UX, Software Engineering and more. I am also known as shamimbinzahid & shamemezahid in other platforms.",
};

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-1CH564CXRP"}
      />

      <Script id="ga-id" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1CH564CXRP');
        `}
      </Script>
    </>
  );
};

export const Head = () => {
  return (
    <head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="google-site-verification"
        content="LBVaADvhEAQ71RT5noFGfqymwq9No4ZYCQNRUMZ-KcA"
      />
    </head>
  );
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-br from-primary-50/25 via-lime-50/25 to-neutral-50 dark:from-primary-950/30 dark:via-primary-950/20 dark:to-neutral-950"
    >
      <Head />
      <GoogleAnalytics />
      <AccessibilityProvider>
        <DataProvider>
          <body className={font.className}>{children}</body>
        </DataProvider>
      </AccessibilityProvider>
    </html>
  );
}
