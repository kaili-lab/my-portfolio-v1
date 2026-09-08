"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "./portfolio-data";

const LocaleContext = createContext<{ locale: Locale; toggleLocale: () => void } | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale: () => setLocale((value) => value === "en" ? "zh" : "en") }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale requires LocaleProvider");
  return context;
}
