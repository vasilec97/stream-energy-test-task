import { STORAGE_LANGUAGE } from "../shared/const/storage"

export const initLanguage = () => {
  const initialLanguage = Telegram.WebApp.initDataUnsafe?.user?.language_code
  const lang = initialLanguage !== "ru" ? "en" : initialLanguage || "ru"

  localStorage.setItem(STORAGE_LANGUAGE, lang)
  sessionStorage.setItem(STORAGE_LANGUAGE, lang)
}
