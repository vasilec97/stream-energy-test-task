const languageToLocale = {
  en: "en-US",
  ru: "ru-RU",
}

export const formatDate = (date: Date, lang: string) => {
  const locale = languageToLocale?.[lang as "ru" | "en"] || languageToLocale.ru

  const DATE_FORMATTER = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
  })

  return DATE_FORMATTER.format(date)
}
