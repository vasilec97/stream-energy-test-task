import { useEffect, useState } from "react"
import cls from "./SelectOverlay.module.css"

export const SelectOverlay = ({ open }: { open: boolean }) => {
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setVisible(false)
      }, 200)
      return () => {
        clearTimeout(timer)
      }
    }
    setVisible(true)
    return () => {}
  }, [open])

  return visible ? <div className={cls.overlay} onClick={(e) => e.stopPropagation()} /> : null
}
