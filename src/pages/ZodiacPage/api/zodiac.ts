import i18n from "i18next"
import { $fetch } from "../../../shared/api/fetch"
import { GET_SIGN_DESCRIPTION } from "../../../shared/const/endpoints"

export const zodiacApi = {
  getZodiacDescription: (zodiacId: string | undefined) => {
    const language = i18n.language == "ru" ? "original" : "translated"
    return $fetch(GET_SIGN_DESCRIPTION, {
      method: "POST",
      body: JSON.stringify({
        sign: zodiacId,
        language,
      }),
    })
  },
}
