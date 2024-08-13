import { GET_SIGN_DESCRIPTION } from "../../../shared/const/endpoints"
import { Language } from "../../../shared/types/language"

export const zodiacApi = {
  getZodiacDescription: (zodiacId: string | undefined, lang: Language | undefined) =>
    fetch(GET_SIGN_DESCRIPTION, {
      method: "POST",
      body: JSON.stringify({
        sign: zodiacId,
        language: lang === "ru" || lang === undefined ? "original" : "translated",
      }),
    }),
}
