import { TechType, Technology } from '~/types/Technology'

export default defineEventHandler((event) => {
  // Return a list of technologies
  const technologies: Technology[] = [
    {
      title: 'C#',
      description: 'Description',
      icon: '/technology/c-sharp.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://dotnet.microsoft.com/en-us/languages/csharp'
    },
    {
      title: 'Kotlin',
      description: 'Description',
      icon: '/technology/kotlin.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://kotlinlang.org/'
    },
    {
      title: 'Java',
      description: 'Description',
      icon: '/technology/java.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.java.com/'
    },
    {
      title: 'JavaScript',
      description: 'Description',
      icon: '/technology/javascript.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      title: 'TypeScript',
      description: 'Description',
      icon: '/technology/typescript.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.typescriptlang.org/'
    },
    {
      title: 'Vue.js',
      description: 'Description',
      icon: '/technology/vue.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://vuejs.org/'
    },
    {
      title: 'Nuxt.js',
      description: 'Description',
      icon: '/technology/nuxt.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://nuxt.com/'
    },
    {
      title: 'Android Studio',
      description: 'Description',
      icon: '/technology/android-studio.svg',
      type: TechType.IDE,
      link: 'https://developer.android.com/studio'
    },
    {
      title: 'Visual Studio',
      description: 'Description',
      icon: '/technology/visual-studio.svg',
      type: TechType.IDE,
      link: 'https://visualstudio.microsoft.com/'
    },
    {
      title: 'Visual Studio Code',
      description: 'Description',
      icon: '/technology/visual-studio-code.svg',
      type: TechType.IDE,
      link: 'https://code.visualstudio.com/'
    },
    {
      title: 'Rider',
      description: 'Description',
      icon: '/technology/rider.svg',
      type: TechType.IDE,
      link: 'https://www.jetbrains.com/rider/'
    },
    {
      title: 'IntelliJ IDEA',
      description: 'Description',
      icon: '/technology/idea.svg',
      type: TechType.IDE,
      link: 'https://www.jetbrains.com/idea/'
    }
  ]
  return technologies
})
