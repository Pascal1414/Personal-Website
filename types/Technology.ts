import { type Icon } from './Icon'

export default interface Technology {
  title: string
  shortDescription: string
  description: string
  icon: Icon
  link?: string
  weight: number
  backgroundColor?: string
}
