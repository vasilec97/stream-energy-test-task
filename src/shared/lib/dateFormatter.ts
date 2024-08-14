const languageToLocale = {
  en: "en-US",
  ru: "ru-RU",
}

export const formatDate = (date: Date, lang: "ru" | "en") => {
  const DATE_FORMATTER = new Intl.DateTimeFormat(languageToLocale[lang] || "ru-RU", {
    day: "2-digit",
    month: "short",
  })

  return DATE_FORMATTER.format(date)
}
