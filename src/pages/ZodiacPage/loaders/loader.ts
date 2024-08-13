import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom"
import { zodiacApi } from "../api/zodiac"
import { useTelegram } from "../../../shared/lib/hooks/useTelegram"
import { Language } from "../../../shared/types/language"

export const loader: LoaderFunction<any> = async ({
  params,
}: LoaderFunctionArgs<{ params: { zodiacId: string } }>) => {
  const { user } = useTelegram()
  const lang = user?.language_code as Language | undefined
  const res = await zodiacApi.getZodiacDescription(params.zodiacId, lang)
  return res.json()
}
