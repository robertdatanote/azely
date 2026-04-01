import type { Locale } from "@/types";

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import("./en.json").then((m) => m.default),
  nl: () => import("./nl.json").then((m) => m.default),
  es: () => import("./es.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale = "en") {
  return dictionaries[locale]();
}

// Type-safe dictionary access
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
