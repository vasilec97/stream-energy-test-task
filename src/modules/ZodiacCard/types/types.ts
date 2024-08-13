export type Zodiac = {
  id: string
  name: string
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  iconViewBox: string
  startDate: Date
  endDate: Date
}
