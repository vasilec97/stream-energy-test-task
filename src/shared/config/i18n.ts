import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

export const initI18n = () => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: {},
      fallbackLng: "ru",

      interpolation: {
        escapeValue: false,
      },

      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    })
}
