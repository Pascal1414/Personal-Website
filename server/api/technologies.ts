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
      title: 'Html & Css',
      description:
        'Als Entwickler kommt man ständig mit HTML und CSS in Berührung. Ob in der Berufsschule, im Betrieb oder in der Freizeit habe ich viele Webseiten erstellt und dabei HTML und CSS sehr gut kennengelernt. Was die Entwicklung einer Webseite vereinfacht ist die Verwendung eines CSS Frameworks wie Tailwind oder DaisyUI. Diese habe ich in Projekten wie dieser Webseite oder auch auf der Webseite für den Fischerverein verwendet.', icon: '/technology/html-css.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
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
        'Um die Webentwicklung einfacher zu machen, habe ich ein paar Webseiten mit Vue erstellt. Es sind mehrere Projekte auf meinem Github zu finden, welche als Vue Projekt begonnen haben. Darunter ffvgs oder auch diese Webseite. Der Code kann in der Commit History eingesehen werden, da diese Projekte nun auf Nuxt umgestellt wurden.',
      icon: '/technology/vue.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://vuejs.org/'
    },
    {
      title: 'Nuxt.js',
      description:
        'Nuxt ist ein open source Vue Framework, welches einige Vorteile wie die Rendering Strategy, das Routing oder Data Fetching zu Vue Components hinzufügt. Diese Webseite, wie auch Projekte wie FFVGS sind mit Nuxt geschrieben. ',
      icon: '/technology/nuxt.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://nuxt.com/'
    },
    {
      title: 'Javascript Entwickler-Tools',
      description: 'Für die Entwicklung von Javascript Webseiten habe ich diverse Tools für die Unterstützung verwendet. Beispiele sind ESLint für die Analyse von Quellcode, Prettier für die Formatierung oder Node als Laufzeitumgebung und viele weitere.',
      icon: '/technology/javascript-tools.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects',
      isSecondary: true
    },
    {
      title: 'SQL',
      description: 'Bereits früh in der Lehre habe ich SQL kennen gelernt. Verschiedene Module in der Berufsschule sowie in einem ÜK handelten über die Datenbanken und SQL. In der Praxis habe ich dann auch oft mit ORM\'s gearbeitet.',
      icon: '/technology/sql.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.sql.org/',
      isSecondary: true
    },
    {
      title: 'Express',
      description: 'In einem Ük über die Backend Entwicklung haben wir mit Express gearbeitet. Das Framework hat sich gut dafür geeignet, um in die Welt der Backend Entwicklung einzusteigen, da die Sprache nicht allzu komplex ist.',
      icon: '/technology/express.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://expressjs.com/',
      isSecondary: true
    },
    {
      title: 'Bash',
      description: 'Ich habe Bash in der Berufsschule kennen gelernt, als wir damit kleine Scripte geschrieben haben, welche mit Git interagieren. In der Praxis verwende ich Bash gerne für die Bedienung der Konsole.',
      icon: '/technology/bash.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.gnu.org/software/bash/',
      isSecondary: true
    },
    {
      title: 'React',
      description: 'Die Grundlagen von React habe ich mir selbst beigebracht. Ich habe ein paar kleine Projekte mit React erstellt, um die Funktionsweise zu verstehen.',
      icon: '/technology/react.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://reactjs.org/',
      isSecondary: true
    },
    {
      title: 'Docker',
      description: 'Über Docker habe ich sowohl in mehreren Modulen in der Berufsschule als auch in einem Ük kennengelernt und angewendet. Die Einfachkeit von Docker macht es sehr angenehm damit zu arbeiten. Für was ich Docker oft verwende, ist um eine lokale Datenbank zu erstellen.',
      icon: '/technology/docker.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.docker.com/',
      isSecondary: true
    },
    {
      title: 'Docker compose',
      description: 'In den Modulen und dem Ük, in dem wir Docker kennengelernt haben, haben wir auch Docker compose verwendet. Ich habe für mehrere Projekte eine Docker compose Konfiguration erstellt, um die App einfach lokal zu starten.',
      icon: '/technology/docker-compose.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://docs.docker.com/compose/',
      isSecondary: true
    },
    {
      title: 'Scala',
      description: 'In der Schule haben wir ein Modul über die Funktionale Programmierung mit der Programmiersprache Scala gehabt. Das Konzept der Funktionalen Programmierung hat mir Spass gemacht und ich programmiere gerne in Scala.',
      icon: '/technology/scala.svg',
      type: TechType.ProgrammingLanguage,
      link: 'https://www.scala-lang.org/',
      isSecondary: true
    },
    {
      title: 'Android Studio',
      description:
        'Android Studio ist die offizielle Entwicklungsumgebung für die Android-Softwareentwicklung. Die vielen Tools helfen einem bei der Entwicklung von den unterschiedlichsten Mobile-Apps.',
      icon: '/technology/android-studio.svg',
      type: TechType.IDE,
      link: 'https://developer.android.com/studio'
    },
    {
      title: 'Visual Studio',
      description:
        'Visual Studio ist eine umfassende IDE für die Entwicklung von .NET und C++ Anwendungen von Microsoft. Sie bietet viele Funktionen für die Verbesserung des Softwareentwicklungsprozesses.',
      icon: '/technology/visual-studio.svg',
      type: TechType.IDE,
      link: 'https://visualstudio.microsoft.com/'
    },
    {
      title: 'Visual Studio Code',
      description:
        'Visual Studio Code ist ein leichtgewichtiger Code-Editor von Microsoft. Aufgrund der Vielzahl an verfügbaren Erweiterungen kann praktisch in jeder Programmiersprachen entwickelt werden.',
      icon: '/technology/visual-studio-code.svg',
      type: TechType.IDE,
      link: 'https://code.visualstudio.com/'
    },
    {
      title: 'Rider',
      description:
        'Rider ist eine IDE für .NET und Gameentwicklung von JetBrains. Sie bietet eine Vielzahl an Funktionen und mit dem neuen Design sieht sie sehr modern aus.',
      icon: '/technology/rider.svg',
      type: TechType.IDE,
      link: 'https://www.jetbrains.com/rider/'
    },
    {
      title: 'IntelliJ IDEA',
      description:
        'IntelliJ IDEA ist eine IDE für Java und Kotlin von JetBrains. Sie bietet eine Vielzahl an Funktionen und mit dem neuen Design sieht sie sehr modern aus.',
      icon: '/technology/idea.svg',
      type: TechType.IDE,
      link: 'https://www.jetbrains.com/idea/'
    }
  ]
  return technologies
})
