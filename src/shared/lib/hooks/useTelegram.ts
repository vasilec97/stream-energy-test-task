export const useTelegram = () => {
  const tg = Telegram.WebApp

  const user = tg?.initDataUnsafe?.user

  return {
    user,
    tg,
  }
}
