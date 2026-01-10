import en from "./translations/en.json";
import pl from "./translations/pl.json";

export const languages = {
  en: "English",
  pl: "Polski",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "en";

export const translations = { en, pl } as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguage(lang: Language): Language {
  return lang === "en" ? "pl" : "en";
}

export function getAlternatePath(currentPath: string, lang: Language): string {
  if (lang === "en") {
    // Going from English to Polish: add /pl prefix
    return `/pl${currentPath}`;
  } else {
    // Going from Polish to English: remove /pl prefix
    return currentPath.replace(/^\/pl/, "") || "/";
  }
}
