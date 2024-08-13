import { ZodiacCard } from "../../../modules/ZodiacCard/ui/ZodiacCard"
import { classNames } from "../../../shared/lib/classNames/classNames"
import cls from "./HomePage.module.css"
import { zodiacs } from "../const/zodiacs"
import { useTelegram } from "../../../shared/lib/hooks/useTelegram"

export const HomePage = () => {
  const { user } = useTelegram()
  const lang = user?.language_code

  return (
    <div className={classNames(cls.HomePage, {}, ["page"])}>
      <h1>{lang}</h1>
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.id} zodiac={zodiac} />
      ))}
    </div>
  )
}
