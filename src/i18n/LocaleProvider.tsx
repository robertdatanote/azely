"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Locale } from "@/types";

import enDict from "./en.json";
import nlDict from "./nl.json";
import esDict from "./es.json";

type DictShape = typeof enDict;

const dicts: Record<Locale, DictShape> = {
  en: enDict,
  nl: nlDict,
  es: esDict as DictShape,
};

interface LocaleContextValue {
  locale: Locale;
  dict: DictShape;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  dict: enDict,
  setLocale: () => {},
});

export function LocaleProvider({
  children,
  initial = "en",
}: {
  children: ReactNode;
  initial?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initial);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.cookie = `locale=${l};path=/;max-age=31536000`;
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, dict: dicts[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
