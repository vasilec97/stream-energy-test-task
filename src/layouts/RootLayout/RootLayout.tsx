import { Outlet } from "react-router-dom"

export const RootLayout = () => {
  return (
    <main className="app app-container">
      <Outlet />
    </main>
  )
}
