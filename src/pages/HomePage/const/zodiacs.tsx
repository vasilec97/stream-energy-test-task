import AriesIcon from "../../../assets/icons/aries.svg?react"
import TaurusIcon from "../../../assets/icons/taurus.svg?react"
import GeminiIcon from "../../../assets/icons/gemini.svg?react"
import CancerIcon from "../../../assets/icons/cancer.svg?react"
import LeoIcon from "../../../assets/icons/leo.svg?react"
import VirgoIcon from "../../../assets/icons/virgo.svg?react"
import LibraIcon from "../../../assets/icons/libra.svg?react"
import ScorpioIcon from "../../../assets/icons/scorpio.svg?react"
import SagittariusIcon from "../../../assets/icons/sagittarius.svg?react"
import CapricornIcon from "../../../assets/icons/capricorn.svg?react"
import AquariusIcon from "../../../assets/icons/aquarius.svg?react"
import PiscesIcon from "../../../assets/icons/pisces.svg?react"
import { Zodiac } from "../../../modules/ZodiacCard"

export const zodiacs: Zodiac[] = [
  {
    id: "aries",
    name: "Aries",
    icon: <AriesIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 3, 21),
    endDate: new Date(2024, 4, 20),
  },
  {
    id: "taurus",
    name: "Taurus",
    icon: <TaurusIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 4, 21),
    endDate: new Date(2024, 5, 21),
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: <GeminiIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 5, 22),
    endDate: new Date(2024, 6, 21),
  },
  {
    id: "cancer",
    name: "Cancer",
    icon: <CancerIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 6, 22),
    endDate: new Date(2024, 7, 22),
  },
  {
    id: "leo",
    name: "Leo",
    icon: <LeoIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 7, 23),
    endDate: new Date(2024, 8, 21),
  },
  {
    id: "virgo",
    name: "Virgo",
    icon: <VirgoIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 8, 22),
    endDate: new Date(2024, 9, 23),
  },
  {
    id: "libra",
    name: "Libra",
    icon: <LibraIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 9, 24),
    endDate: new Date(2024, 10, 23),
  },
  {
    id: "scorpio",
    name: "Scorpio",
    icon: <ScorpioIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 10, 24),
    endDate: new Date(2024, 11, 22),
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    icon: <SagittariusIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 11, 23),
    endDate: new Date(2024, 12, 22),
  },
  {
    id: "capricorn",
    name: "Capricorn",
    icon: <CapricornIcon viewBox="0 0 32 32" width={200} height={250} />,
    startDate: new Date(2024, 12, 23),
    endDate: new Date(2024, 1, 20),
  },
  {
    id: "aquarius",
    name: "Aquarius",
    icon: <AquariusIcon viewBox="0 0 52 52" width={200} height={250} />,
    startDate: new Date(2024, 1, 21),
    endDate: new Date(2024, 2, 19),
  },
  {
    id: "pisces",
    name: "Pisces",
    icon: <PiscesIcon viewBox="0 0 46 46" width={200} height={250} />,
    startDate: new Date(2024, 2, 20),
    endDate: new Date(2024, 3, 20),
  },
]
