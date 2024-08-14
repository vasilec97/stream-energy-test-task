import { TouchEvent } from "react"
import cls from "./SwipeBack.module.css"
import { useNavigate } from "react-router-dom"

export const SwipeBack = () => {
  const navigate = useNavigate()

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (e.changedTouches[0].clientX > 100) {
      navigate(-1)
    }
  }

  return <div className={cls.swipe} onTouchEnd={handleTouchEnd} />
}
