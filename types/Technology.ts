import { type Icon } from './Icon'

export interface Technology {
  title: string
  shortDescription: string
  description: string
  icon: Icon
  link?: string
  weight: number
}
