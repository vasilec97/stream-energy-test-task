import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom"
import { zodiacApi } from "../api/zodiac"
import { Language } from "../../../shared/types/language"
import i18n from "i18next"

export const loader: LoaderFunction<any> = async ({
  params,
}: LoaderFunctionArgs<{ params: { zodiacId: string } }>) => {
  const lang = i18n.language as Language | undefined
  const res = await zodiacApi.getZodiacDescription(params.zodiacId, lang)
  return res.json()
}
