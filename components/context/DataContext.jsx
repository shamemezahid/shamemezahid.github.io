"use client";

import { createContext, useContext, useState, useEffect } from "react";
import def from "/public/def.json";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(def); // Initialize with default data
  const API_URL = "https://api.jsonbin.io/v3/b/67ed82da8a456b79668155fb";
  const READ_ACCESS_KEY =
    "$2a$10$fFkcgBhr07FjK.iW/E3dO.6A6EGmCTpw8EpKcNqYlJHfyk4AzOOh6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "X-Access-Key": READ_ACCESS_KEY,
          },
        });

        if (!response.ok) {
          throw new Error("Network error, Failed to load data");
        }

        const jsonData = await response.json();
        setData(jsonData.record);
      } catch (error) {
        console.error("Error loading API data, keeping default data:", error);
      }
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
