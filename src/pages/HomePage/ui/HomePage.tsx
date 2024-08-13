import { ZodiacCard } from "../../../modules/ZodiacCard/ui/ZodiacCard"
import { classNames } from "../../../shared/lib/classNames/classNames"
import cls from "./HomePage.module.css"
import { zodiacs } from "../const/zodiacs"
import { useTranslation } from "react-i18next"

export const HomePage = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div className={classNames(cls.HomePage, {}, ["page"])}>
      <h1>{lang}</h1>
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.id} zodiac={zodiac} />
      ))}
    </div>
  )
}
