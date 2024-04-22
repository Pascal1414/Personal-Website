import { TechType, Technology } from '~/types/Technology'

export default defineEventHandler((event) => {
  // Return a list of technologies
  const technologies: Technology[] = [
    {
      title: 'C#',
      description: 'Description',
      icon: '/technology/c-sharp.svg',
      type: TechType.ProgrammingLanguage
    },
    {
      title: 'Kotlin',
      description: 'Description',
      icon: '/technology/kotlin.svg',
      type: TechType.ProgrammingLanguage
    },
    {
      title: 'Java',
      description: 'Description',
      icon: '/technology/java.svg',
      type: TechType.ProgrammingLanguage
    },
    {
      title: 'JavaScript',
      description: 'Description',
      icon: '/technology/javascript.svg',
      type: TechType.ProgrammingLanguage
    },
    {
      title: 'TypeScript',
      description: 'Description',
      icon: '/technology/typescript.svg',
      type: TechType.ProgrammingLanguage
    },
    {
      title: 'Vue.js',
      description: 'Description',
      icon: '/technology/vue.svg',
      type: TechType.ProgrammingLanguage
    },
    {
      title: 'Nuxt.js',
      description: 'Description',
      icon: '/technology/nuxt.svg',
      type: TechType.ProgrammingLanguage
    },
    {
      title: 'Android Studio',
      description: 'Description',
      icon: '/technology/android-studio.svg',
      type: TechType.IDE
    },
    {
      title: 'Visual Studio',
      description: 'Description',
      icon: '/technology/visual-studio.svg',
      type: TechType.IDE
    },
    {
      title: 'Visual Studio Code',
      description: 'Description',
      icon: '/technology/visual-studio-code.svg',
      type: TechType.IDE
    },
    {
      title: 'Rider',
      description: 'Description',
      icon: '/technology/rider.svg',
      type: TechType.IDE
    },
    {
      title: 'IntelliJ IDEA',
      description: 'Description',
      icon: '/technology/idea.svg',
      type: TechType.IDE
    }
  ]
  return technologies
})
