import { STORAGE_LANGUAGE } from "../shared/const/storage"

export const initLanguage = () => {
  const initialLanguage = Telegram.WebApp.initDataUnsafe?.user?.language_code

  localStorage.setItem(STORAGE_LANGUAGE, initialLanguage || "ru")
  sessionStorage.setItem(STORAGE_LANGUAGE, initialLanguage || "ru")
}
