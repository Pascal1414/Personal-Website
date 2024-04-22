export enum TechType {
  ProgrammingLanguage,
  IDE
}
export interface Technology {
  title: string
  description: string
  icon: string
  type: TechType
}
