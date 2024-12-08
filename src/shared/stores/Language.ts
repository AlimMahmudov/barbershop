import { create } from "zustand";

interface LanguageStore {
  language: "ru" | "kg" | "en";
  setLanguage: (language: "ru" | "kg" | "en") => void;
  translate: (ru: string, kg: string, en: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "ru",
  setLanguage: (language: "ru" | "kg" | "en") => set({ language }),
  translate: (ru: string, kg: string, en: string) => {
    const blablaLanguage = get().language;
    if (blablaLanguage === "kg") return kg;
    if (blablaLanguage === "en") return en;
    return ru;
  },
}));
