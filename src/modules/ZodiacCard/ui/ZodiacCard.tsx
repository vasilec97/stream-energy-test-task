import { FC } from "react"
import { Zodiac } from "../types/types"
import { Link } from "react-router-dom"
import cls from "./ZodiacCard.module.css"
import { formatDate } from "../../../shared/lib/dateFormatter"
import { useTranslation } from "react-i18next"
import { useTelegram } from "../../../shared/lib/hooks/useTelegram"

type ZodiacCardProps = {
  zodiac: Zodiac
}

export const ZodiacCard: FC<ZodiacCardProps> = ({ zodiac }) => {
  const {
    i18n: { language },
  } = useTranslation()
  const { id, Icon, iconViewBox, startDate, endDate } = zodiac
  const { t } = useTranslation()
  const { showBackButton } = useTelegram()

  return (
    <article className={cls.ZodiacListWrapper} onClick={showBackButton}>
      <Link to={id} className={cls.link}>
        <div className={cls.ZodiacCard}>
          <header className={cls.top}>
            <h2 className={cls.title}>{t(id)}</h2>
            <p className={cls.date}>{`${formatDate(
              startDate,
              language as "ru" | "en"
            )} - ${formatDate(endDate, language as "ru" | "en")}`}</p>
          </header>
          <div className={cls.image}>
            <Icon
              width={200}
              height={250}
              viewBox={iconViewBox}
              fill="var(--tg-theme-text-color)"
            />
          </div>
        </div>
      </Link>
    </article>
  )
}
