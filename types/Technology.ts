import { type Icon } from './Icon'
import type { TechnologyType } from './TechnologyType'

export default interface Technology {
  title: string
  shortDescription: string
  description: string
  icon: Icon
  link?: string
  weight: number
  type: TechnologyType
}
