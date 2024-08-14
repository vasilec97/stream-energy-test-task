import { TouchEvent } from "react"
import cls from "./SwipeBack.module.css"
import { useLocation, useNavigate } from "react-router-dom"

export const SwipeBack = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const $page = getPage(e)

    const x = e.changedTouches[0].clientX > 150 ? 100 : e.changedTouches[0].clientX
    if (pathname !== "/") {
      $page.style.transform = `translateX(${x}px)`
    }
  }

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    const $page = getPage(e)

    if (e.changedTouches[0].clientX > 100) {
      navigate(-1)
      $page!.style.transform = `translateX(0)`
    }
  }

  return <div className={cls.swipe} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} />
}

const getPage = (e: TouchEvent<HTMLDivElement>) => {
  const $app = (e.target as HTMLDivElement).closest(".app")!
  let $page: HTMLDivElement

  for (const child of $app.children) {
    if (child.classList.contains("page")) $page = child as HTMLDivElement
  }
  return $page!
}
