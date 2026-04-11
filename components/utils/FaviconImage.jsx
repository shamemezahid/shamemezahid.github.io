"use client";
import { useEffect, useState } from "react";

export const getFaviconUrl = (link, method = "google") => {
  if (method === "google") {
    const Google_Favicon_API_URL = `https://www.google.com/s2/favicons?domain=`;
    const Google_Favicon = Google_Favicon_API_URL + link + `&sz=64`;
    return Google_Favicon;
  }

  else if (method === "duck") {
    const DuckDuckGo_Favicon_API_URL = `https://icons.duckduckgo.com/ip3/`;
    const DuckDuckGo_Favicon = DuckDuckGo_Favicon_API_URL + link + `.ico`;
    return DuckDuckGo_Favicon;
  }

  else if (method === "horse") {
    const Horse_Favicon_API_URL = `https://icon.horse/icon/`;
    const Horse_Favicon = Horse_Favicon_API_URL + link;
    return Horse_Favicon;
  }

};

export default function FaviconImage({ link, ddg = false }) {
  const [faviconUrl, setFaviconUrl] = useState(null);

  useEffect(() => {
    const url = getFaviconUrl(link, "google");
    setFaviconUrl(url);
  }, [link]);

  return (
    <img
      src={faviconUrl}
      alt="Favicon"
      className="w-5 h-5 rounded-md"
      loading="lazy"
      draggable="false"
      preload="true"
      onError={(e) => {
        e.target.onerror = null;
      }}
    />
  );

}

