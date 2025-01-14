export enum TechType {
  ProgrammingLanguage,
  IDE
}
export interface Technology {
  title: string
  description: string
  icon: string
  link: string
  type: TechType
  isSecondary?: boolean
}
