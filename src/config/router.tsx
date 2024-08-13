import { ZodiacPage, zodiacPageLoader } from "../pages/ZodiacPage"
import { RootLayout } from "../layouts/RootLayout/RootLayout"
import { HomePage } from "../pages/HomePage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: ":zodiacId",
        element: <ZodiacPage />,
        loader: zodiacPageLoader,
      },
    ],
  },
])
