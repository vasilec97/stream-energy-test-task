import { FC } from "react"
import { Zodiac } from "../types/types"
import { Link } from "react-router-dom"
import cls from "./ZodiacCard.module.css"
import { formatDate } from "../../../shared/lib/dateFormatter"

type ZodiacCardProps = {
  zodiac: Zodiac
}

export const ZodiacCard: FC<ZodiacCardProps> = ({ zodiac }) => {
  const { id, name, icon, startDate, endDate } = zodiac

  return (
    <article className={cls.ZodiacListWrapper}>
      <Link to={id} className={cls.link}>
        <div className={cls.ZodiacCard}>
          <header className={cls.top}>
            <h2 className={cls.title}>{name}</h2>
            <p className={cls.date}>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</p>
          </header>
          <div className={cls.image}>{icon}</div>
        </div>
      </Link>
    </article>
  )
}
