import { TFunction } from "i18next"
import { Select, SelectItem } from "../../shared/ui/Select/Select"
import { useTranslation } from "react-i18next"
import FlagRU from "../../assets/icons/flag-ru.svg?react"
import FlagUK from "../../assets/icons/flag-uk.svg?react"
import cls from "./LangSwitcher.module.css"
import { ReactNode, useState } from "react"
import { useRevalidator } from "react-router-dom"
import { saveLanguage } from "../../shared/utils/saveLanguage"

const options = (t: TFunction) => [
  { id: "en", lng: t("en"), icon: <FlagUK /> },
  { id: "ru", lng: t("ru"), icon: <FlagRU /> },
]

export const LangSwitcher = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { t, i18n } = useTranslation()
  const revalidator = useRevalidator()

  const onChange = (id: string) => {
    i18n.changeLanguage(id)
    saveLanguage(id)
    revalidator.revalidate()
  }

  return (
    <Select
      onValueChange={onChange}
      onOpenChange={setOpen}
      open={open}
      defaultValue={i18n.language}
      sideOffset={5}
    >
      {options(t).map((option) => (
        <SelectItem key={option.id} value={option.id} className={cls.item}>
          <Option option={option} />
        </SelectItem>
      ))}
    </Select>
  )
}

type TOption = {
  id: string
  lng: string
  icon: ReactNode
}

const Option = ({ option }: { option: TOption }) => (
  <div className={cls.value}>
    <span>{option?.icon}</span>
    <span className={cls.lngName}>{option?.lng}</span>
  </div>
)
