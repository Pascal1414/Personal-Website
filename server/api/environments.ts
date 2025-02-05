import { type Technology } from '~/types/Technology'

export default defineEventHandler(() => {
  const environnements: Technology[] = [
    {
      title: 'Android Studio',
      description:
        'Android Studio ist die offizielle Entwicklungsumgebung für die Android-Softwareentwicklung. Die vielen Tools helfen einem bei der Entwicklung von den unterschiedlichsten Mobile-Apps.',
      icon: '/technology/android-studio.svg',
      link: 'https://developer.android.com/studio',
      weight: 1
    },
    {
      title: 'Visual Studio',
      description:
        'Visual Studio ist eine umfassende IDE für die Entwicklung von .NET und C++ Anwendungen von Microsoft. Sie bietet viele Funktionen für die Verbesserung des Softwareentwicklungsprozesses.',
      icon: '/technology/visual-studio.svg',
      link: 'https://visualstudio.microsoft.com/',
      weight: 1
    },
    {
      title: 'Visual Studio Code',
      description:
        'Visual Studio Code ist ein leichtgewichtiger Code-Editor von Microsoft. Aufgrund der Vielzahl an verfügbaren Erweiterungen kann praktisch in jeder Programmiersprachen entwickelt werden.',
      icon: '/technology/visual-studio-code.svg',
      link: 'https://code.visualstudio.com/',
      weight: 1
    },
    {
      title: 'Rider',
      description:
        'Rider ist eine IDE für .NET und Gameentwicklung von JetBrains. Sie bietet eine Vielzahl an Funktionen und mit dem neuen Design sieht sie sehr modern aus.',
      icon: '/technology/rider.svg',
      link: 'https://www.jetbrains.com/rider/',
      weight: 1
    },
    {
      title: 'IntelliJ IDEA',
      description:
        'IntelliJ IDEA ist eine IDE für Java und Kotlin von JetBrains. Sie bietet eine Vielzahl an Funktionen und mit dem neuen Design sieht sie sehr modern aus.',
      icon: '/technology/idea.svg',
      link: 'https://www.jetbrains.com/idea/',
      weight: 1
    }
  ]
  return environnements
})
