import { useNavigate } from "react-router-dom"

export const useTelegram = () => {
  const navigate = useNavigate()
  const tg = Telegram.WebApp

  const user = tg?.initDataUnsafe?.user

  const showBackButton = () => {
    tg.BackButton.isVisible = true
  }

  tg.BackButton.onClick(() => {
    navigate(-1)
  })

  return {
    tg,
    user,
    showBackButton,
  }
}
