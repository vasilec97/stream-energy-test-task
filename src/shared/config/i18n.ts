import LanguageDetector from "i18next-browser-languagedetector"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import Backend from "i18next-http-backend"

export const initI18n = () => {
  i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      fallbackLng: "ru",

      interpolation: {
        escapeValue: false,
      },

      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    })
}
