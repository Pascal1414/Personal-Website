import { TechType, Technology } from '~/types/Technology'

export default defineEventHandler((event) => {
  // Return a list of technologies
  const technologies: Technology[] = [
    {
      title: 'C#',
      description:
        'Seit dem Anfang meiner Lehre habe ich immer wieder mit C# entwickelt. Dabei habe ich Programme mit Win Forms, WPF aber auch Web Applikationen im Frontend mit Blazor und API Anwendungen, bei denen ich auch das Entity Framework verwendet habe.',
      icon: '/technology/c-sharp.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://dotnet.microsoft.com/en-us/languages/csharp'
    },
    {
      title: 'Kotlin',
      description:
        'Ich verwende Kotlin, um Android Apps zu entwickeln. Dabei verwende ich das Toolkit Jetpack Compose, welches mit der MVVM Architektur funktioniert. Die Apps style ich mit dem Material Theme. Ein solches Projekt ist der Protein-Counter welches auf GitHub veröffentlicht ist und dort eingesehen werden kann. Während dem überbetrieblichen Kurs M335 habe ich das Abschlussprojekt auf diese Weise programmiert. Ich mag den klaren und modernen Syntax von Kotlin.',
      icon: '/technology/kotlin.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://kotlinlang.org/'
    },
    {
      title: 'Java',
      description:
        'Sämtliche Module in der Berufsschule, welche mit objektorientierter Programmierung oder Testing zu tun hatten, wurden in Java durchgeführt. Zudem habe ich auch ein paar kleine Android Anwendungen in Java realisiert. Aufgrund des ähnlichen Syntax zu C# fällt es mir einfach Java zu programmieren.',
      icon: '/technology/java.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.java.com/'
    },
    {
      title: 'JavaScript',
      description:
        'Beim Programmieren kommt man nicht um Javascript herum. Die ersten Erfahrungen habe ich in einem überbetrieblichem Kurs gesammelt, in welchem es um Frontend Webapps ging. Dort habe ich das Abschlussprojekt mit plain Javascript realisiert. Später habe ich dann mit verschiedensten Javascript Frameworks gearbeitet.',
      icon: '/technology/javascript.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      title: 'TypeScript',
      description:
        'Irgendwann habe ich von Javascript auf TypeScript umgestellt. Das Typensystem hilft, Fehler frühzeitig zu erkennen und die Codequalität zu verbessern. Heute verwende ich TypeScript bei allen Javascript Frameworks, bei denen dies möglich ist.',
      icon: '/technology/typescript.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.typescriptlang.org/'
    },
    {
      title: 'Vue.js',
      description:
        'Description  //Einige Veröffentlichte nuxt projekte waren zu erst in vue geschreiebn',
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
