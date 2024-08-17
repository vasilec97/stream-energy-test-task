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
    Icon: AriesIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 2, 21),
    endDate: new Date(2024, 3, 20),
  },
  {
    id: "taurus",
    name: "Taurus",
    Icon: TaurusIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 3, 21),
    endDate: new Date(2024, 4, 21),
  },
  {
    id: "gemini",
    name: "Gemini",
    Icon: GeminiIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 4, 22),
    endDate: new Date(2024, 5, 21),
  },
  {
    id: "cancer",
    name: "Cancer",
    Icon: CancerIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 5, 22),
    endDate: new Date(2024, 6, 22),
  },
  {
    id: "leo",
    name: "Leo",
    Icon: LeoIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 6, 23),
    endDate: new Date(2024, 7, 21),
  },
  {
    id: "virgo",
    name: "Virgo",
    Icon: VirgoIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 7, 22),
    endDate: new Date(2024, 8, 23),
  },
  {
    id: "libra",
    name: "Libra",
    Icon: LibraIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 8, 24),
    endDate: new Date(2024, 9, 23),
  },
  {
    id: "scorpio",
    name: "Scorpio",
    Icon: ScorpioIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 9, 24),
    endDate: new Date(2024, 10, 22),
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    Icon: SagittariusIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 10, 23),
    endDate: new Date(2024, 11, 22),
  },
  {
    id: "capricorn",
    name: "Capricorn",
    Icon: CapricornIcon,
    iconViewBox: "0 0 32 32",
    startDate: new Date(2024, 11, 23),
    endDate: new Date(2024, 0, 20),
  },
  {
    id: "aquarius",
    name: "Aquarius",
    Icon: AquariusIcon,
    iconViewBox: "0 0 52 52",
    startDate: new Date(2024, 0, 21),
    endDate: new Date(2024, 1, 19),
  },
  {
    id: "pisces",
    name: "Pisces",
    Icon: PiscesIcon,
    iconViewBox: "0 0 46 46",
    startDate: new Date(2024, 1, 20),
    endDate: new Date(2024, 2, 20),
  },
]
