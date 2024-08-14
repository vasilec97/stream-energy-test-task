import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom"
import { zodiacApi } from "../api/zodiac"
import { STORAGE_LANGUAGE } from "../../../shared/const/storage"

export const loader: LoaderFunction<any> = async ({
  params,
}: LoaderFunctionArgs<{ params: { zodiacId: string } }>) => {
  const lng = localStorage.getItem(STORAGE_LANGUAGE) || ""
  const lngType = lng === "ru" ? "original" : "translated"
  const res = await zodiacApi.getZodiacDescription(params.zodiacId, lngType)
  return res.json()
}
