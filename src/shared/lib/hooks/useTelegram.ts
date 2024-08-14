import { useNavigate } from "react-router-dom"

export const useTelegram = () => {
  const navigate = useNavigate()
  const tg = Telegram.WebApp

  const user = tg?.initDataUnsafe?.user

  const showBackButton = () => {
    tg.BackButton.show()
  }

  const navigateToBack = () => {
    navigate("/")
    tg.BackButton.hide()
  }

  tg.BackButton.onClick(navigateToBack)

  return {
    tg,
    user,
    showBackButton,
    navigateToBack,
  }
}
