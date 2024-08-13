import { useLoaderData } from "react-router-dom"
import { GetZodiacDescriptionResponse } from "../types/types"
import cls from "./ZodiacPage.module.css"

export const ZodiacPage = () => {
  const { horoscope } = useLoaderData() as GetZodiacDescriptionResponse

  return <h2 className={cls.horoscope}>{horoscope}</h2>
}
