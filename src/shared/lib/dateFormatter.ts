export const formatDate = (date: Date, locale?: string) => {
  const DATE_FORMATTER = new Intl.DateTimeFormat(locale || "ru-RU", {
    day: "2-digit",
    month: "short",
  })

  return DATE_FORMATTER.format(date)
}
