"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AgeContext = createContext(false);

export function useAgeVerified() {
  return useContext(AgeContext);
}

export function AgeProvider({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    setVerified(sessionStorage.getItem("age-verified") === "true");
  }, []);

  useEffect(() => {
    const handler = () => setVerified(true);
    window.addEventListener("age-verified", handler);
    return () => window.removeEventListener("age-verified", handler);
  }, []);

  if (verified === null) return null;

  return <AgeContext.Provider value={verified}>{children}</AgeContext.Provider>;
}
