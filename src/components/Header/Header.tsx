import { LangSwitcher } from "../LangSwitcher/LangSwitcher"
import cls from "./Header.module.css"

export const Header = () => {
  return (
    <div className={cls.header}>
      <LangSwitcher />
    </div>
  )
}
