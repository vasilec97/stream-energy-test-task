import { useLoaderData } from "react-router-dom"
import { GetZodiacDescriptionResponse } from "../types/types"
import cls from "./ZodiacPage.module.css"
import { classNames } from "../../../shared/lib/classNames/classNames"

export const ZodiacPage = () => {
  const { horoscope } = useLoaderData() as GetZodiacDescriptionResponse

  return (
    <div className={classNames(cls.ZodiacPage, {}, ["page"])}>
      <h2 className={cls.horoscope}>{horoscope}</h2>
    </div>
  )
}
