import { STORAGE_LANGUAGE } from "../const/storage"

export const saveLanguage = (lng: string) => {
  localStorage.setItem(STORAGE_LANGUAGE, lng)
  sessionStorage.setItem(STORAGE_LANGUAGE, lng)
}
