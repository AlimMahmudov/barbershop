// import { create } from "zustand";

// interface LanguageStore {
//   language: "ru" | "kg" | "en";
//   translate: (language: "ru" | "kg" | "en") => void;
//   t: (ky: string, ru: string, en: string) => string;
// }

// export const useLanguageStore = create<LanguageStore>((set, get) => ({
//   language: "ru",
//   translate: (language: "ru" | "kg" | "en") => set({ language }),
//   t: (kg: string, ru: string, en: string) => {
//     const currentLanguage = get().language;
//     if (currentLanguage === "kg") return kg;
//     if (currentLanguage === "en") return en;
//     return ru;
//   },
// }));
