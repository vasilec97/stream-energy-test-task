import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./config/router.tsx"
import { initI18n } from "./shared/config/i18n.ts"
import { initLanguage } from "./config/language.ts"

initLanguage()
initI18n()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
