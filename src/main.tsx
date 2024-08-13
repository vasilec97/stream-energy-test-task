import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./config/router.tsx"
import { createFetchInterceptors } from "./config/api.ts"
import { initLanguage } from "./config/language.ts"
import { initI18n } from "./shared/config/i18n.ts"

initLanguage()
initI18n()
createFetchInterceptors()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
