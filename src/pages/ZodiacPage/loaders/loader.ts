import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom"
import { zodiacApi } from "../api/zodiac"

export const loader: LoaderFunction<any> = async ({
  params,
}: LoaderFunctionArgs<{ params: { zodiacId: string } }>) => {
  const res = await zodiacApi.getZodiacDescription(params.zodiacId, "ru")
  return res.json()
}
