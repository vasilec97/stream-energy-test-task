import { Outlet } from "react-router-dom"
import { useTelegram } from "../../shared/lib/hooks/useTelegram"
import { useEffect } from "react"

export const RootLayout = () => {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <main className="app app-container">
      <Outlet />
    </main>
  )
}
