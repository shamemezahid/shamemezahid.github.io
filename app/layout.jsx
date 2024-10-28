import React from "react";
import Script from "next/script";
import "./globals.css";
import { Merriweather_Sans } from "next/font/google";
import { AccessibilityProvider } from "@/components/context/AccessibilityContext";

const font = Merriweather_Sans({ subsets: ["latin-ext"] });

export const metadata = {
  title: "I'm Shamim Bin Zahid",
  description: "Hi, Welcome to my site 👋",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-br from-cyan-50/25 via-lime-50/25 to-neutral-50 dark:from-cyan-950/30 dark:via-cyan-950/20 dark:to-neutral-950">
      <GoogleAnalytics/>
      <AccessibilityProvider>
        <body className={font.className}>{children}</body>
      </AccessibilityProvider>
    </html>
  );
}
