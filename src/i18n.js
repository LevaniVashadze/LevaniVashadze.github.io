import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "/translations/de.json";
import ka from "/translations/ka.json";
import en from "/translations/en.json";

const resources = {
  en: {
    translation: en,
  },
  ka: {
    translation: ka,
  },
  de: {
    translation: de,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["en", "ka", "de"],
    nonExplicitSupportedLngs: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
