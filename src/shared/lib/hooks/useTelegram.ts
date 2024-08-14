import { useNavigate } from "react-router-dom"

export const useTelegram = () => {
  const navigate = useNavigate()
  const tg = Telegram.WebApp

  const user = tg?.initDataUnsafe?.user

  const showBackButton = () => {
    tg.BackButton.show()
  }

  tg.BackButton.onClick(() => {
    navigate(-1)
    tg.BackButton.hide()
  })

  return {
    tg,
    user,
    showBackButton,
  }
}
