import { ReactNode } from "react"

export type Zodiac = {
  id: string
  name: string
  icon: ReactNode
  startDate: Date
  endDate: Date
}
