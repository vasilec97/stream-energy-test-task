import { ZodiacCard } from "../../../modules/ZodiacCard/ui/ZodiacCard"
import { classNames } from "../../../shared/lib/classNames/classNames"
import cls from "./HomePage.module.css"
import { zodiacs } from "../const/zodiacs"

export const HomePage = () => {
  return (
    <div className={classNames(cls.HomePage, {}, ["page"])}>
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.id} zodiac={zodiac} />
      ))}
    </div>
  )
}
