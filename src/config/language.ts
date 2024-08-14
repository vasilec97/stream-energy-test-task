import { saveLanguage } from "../shared/utils/saveLanguage"

export const initLanguage = () => {
  const initialLanguage = Telegram.WebApp.initDataUnsafe?.user?.language_code
  const lang = initialLanguage !== "ru" ? "en" : initialLanguage || ""

  saveLanguage(lang)
}
