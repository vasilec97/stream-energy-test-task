import { $fetch } from "../../../shared/api/fetch"
import { GET_SIGN_DESCRIPTION } from "../../../shared/const/endpoints"

export const zodiacApi = {
  getZodiacDescription: (zodiacId: string | undefined, language: string) => {
    return $fetch(GET_SIGN_DESCRIPTION, {
      method: "POST",
      body: JSON.stringify({
        sign: zodiacId,
        language,
        period: 'today'
      }),
    })
  },
}
