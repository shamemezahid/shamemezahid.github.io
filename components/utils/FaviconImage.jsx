"use client";
import { useEffect, useState } from "react";

export const getFaviconUrl = (link) => {
  const DuckDuckGo_Favicon_API_URL = `https://icons.duckduckgo.com/ip3/`;
  const DuckDuckGo_Favicon = DuckDuckGo_Favicon_API_URL + link + `.ico`;

  // const Google_Favicon_API_URL = `https://www.google.com/s2/favicons?domain=`;
  // const Google_Favicon = Google_Favicon_API_URL + link;

  return DuckDuckGo_Favicon;
};

export default function FaviconImage({ link }) {
  const [faviconUrl, setFaviconUrl] = useState(null);

  useEffect(() => {
    const url = getFaviconUrl(link);
    setFaviconUrl(url);
  }, [link]);

  return (
    <img
      src={faviconUrl}
      alt="Favicon"
      className="w-5 h-5"
      loading="lazy"
      draggable="false"
      preload="true"
      onError={(e) => {
        e.target.onerror = null; 
      }}
    />
  );
}

