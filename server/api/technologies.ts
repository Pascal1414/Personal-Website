import { Icon } from '~/types/Icon'
import { type Technology } from '~/types/Technology'

export default defineEventHandler(() => {
  const technologies: Technology[] = [
    {
      title: 'C#',
      shortDescription:
        'Eine objektorientierte Programmiersprache für die Entwicklung von Anwendungen auf der .NET-Plattform.',
      description:
        'Seit dem Anfang meiner Lehre habe ich immer wieder mit C# entwickelt. Dabei habe ich Programme mit Win Forms, WPF aber auch Web Applikationen im Frontend mit Blazor und API Anwendungen, bei denen ich auch das Entity Framework verwendet habe.',
      icon: Icon.PROGRAMMING_LANGUAGE,
      link: 'https://dotnet.microsoft.com/en-us/languages/csharp',
      weight: 1,
      backgroundColor: '#390090'
    },
    {
      title: 'Kotlin',
      shortDescription: 'Eine moderne, vielseitige Programmiersprache von JetBrains.',
      description:
        'Ich verwende Kotlin, um Android Apps zu entwickeln. Dabei verwende ich das Toolkit Jetpack Compose, welches mit der MVVM Architektur funktioniert. Die Apps style ich mit dem Material Theme. Ein solches Projekt ist der Protein-Counter welches auf GitHub veröffentlicht ist und dort eingesehen werden kann. Während dem überbetrieblichen Kurs M335 habe ich das Abschlussprojekt auf diese Weise programmiert. Ich mag den klaren und modernen Syntax von Kotlin.',
      icon: Icon.PROGRAMMING_LANGUAGE,
      link: 'https://kotlinlang.org/',
      weight: 1,
      backgroundColor: '#7f52ff'
    },
    {
      title: 'Java',
      shortDescription: 'Eine plattformunabhängige, objektorientierte Programmiersprache.',
      description:
        'Sämtliche Module in der Berufsschule, welche mit objektorientierter Programmierung oder Testing zu tun hatten, wurden in Java durchgeführt. Zudem habe ich auch ein paar kleine Android Anwendungen in Java realisiert. Aufgrund des ähnlichen Syntax zu C# fällt es mir einfach Java zu programmieren.',
      icon: Icon.PROGRAMMING_LANGUAGE,
      link: 'https://www.java.com/',
      weight: 1,
      backgroundColor: '#5382ff'
    },
    {
      title: 'Html & Css',
      shortDescription: 'Die Grundlagen für die Entwicklung von Webseiten.',
      description:
        'Als Entwickler kommt man ständig mit HTML und CSS in Berührung. Ob in der Berufsschule, im Betrieb oder in der Freizeit habe ich viele Webseiten erstellt und dabei HTML und CSS sehr gut kennengelernt. Was die Entwicklung einer Webseite vereinfacht ist die Verwendung eines CSS Frameworks wie Tailwind oder DaisyUI. Diese habe ich in Projekten wie dieser Webseite oder auch auf der Webseite für den Fischerverein verwendet.',
      icon: Icon.HTML_CSS,
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      weight: 1,
      backgroundColor: '#000000'
    },
    {
      title: 'JavaScript',
      shortDescription: 'Eine der wichtigsten Programmiersprachen für die Webentwicklung.',
      description:
        'Beim Programmieren kommt man nicht um Javascript herum. Die ersten Erfahrungen habe ich in einem überbetrieblichem Kurs gesammelt, in welchem es um Frontend Webapps ging. Dort habe ich das Abschlussprojekt mit plain Javascript realisiert. Später habe ich dann mit verschiedensten Javascript Frameworks gearbeitet.',
      icon: Icon.JAVASCRIPT,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      weight: 1,
      backgroundColor: '#f7df1e'
    },
    {
      title: 'TypeScript',
      shortDescription: 'Ein Superset von JavaScript, welches statische Typisierung unterstützt.',
      description:
        'Irgendwann habe ich von Javascript auf TypeScript umgestellt. Das Typensystem hilft, Fehler frühzeitig zu erkennen und die Codequalität zu verbessern. Heute verwende ich TypeScript bei allen Javascript Frameworks, bei denen dies möglich ist.',
      icon: Icon.PROGRAMMING_LANGUAGE,
      link: 'https://www.typescriptlang.org/',
      weight: 1,
      backgroundColor: '#007acc'
    },
    {
      title: 'Vue.js',
      shortDescription: 'Ein JavaScript Framework für die Entwicklung von Benutzeroberflächen.',
      description:
        'Um die Webentwicklung einfacher zu machen, habe ich ein paar Webseiten mit Vue erstellt. Es sind mehrere Projekte auf meinem Github zu finden, welche als Vue Projekt begonnen haben. Darunter ffvgs oder auch diese Webseite. Der Code kann in der Commit History eingesehen werden, da diese Projekte nun auf Nuxt umgestellt wurden.',
      icon: Icon.VUE,
      link: 'https://vuejs.org/',
      weight: 1,
      backgroundColor: '#1a1a1a'
    },
    {
      title: 'Nuxt.js',
      shortDescription: 'Ein open source Vue Framework für die Entwicklung von Webseiten.',
      description:
        'Nuxt ist ein open source Vue Framework, welches einige Vorteile wie die Rendering Strategy, das Routing oder Data Fetching zu Vue Components hinzufügt. Diese Webseite, wie auch Projekte wie FFVGS sind mit Nuxt geschrieben. ',
      icon: Icon.NUXT,
      link: 'https://nuxt.com/',
      weight: 1,
      backgroundColor: '#020420'
    },
    {
      title: 'Javascript Dev-Tools',
      shortDescription: 'Tools für die Entwicklung von Javascript Webseiten.',
      description:
        'Für die Entwicklung von Javascript Webseiten habe ich diverse Tools für die Unterstützung verwendet. Beispiele sind ESLint für die Analyse von Quellcode, Prettier für die Formatierung oder Node als Laufzeitumgebung und viele weitere.',
      icon: Icon.TOOL,
      weight: 2,
      backgroundColor: '#f7df1e'
    },
    {
      title: 'SQL',
      shortDescription: 'Eine Sprache zur Abfrage von Datenbanken.',
      description:
        "Bereits früh in der Lehre habe ich SQL kennen gelernt. Verschiedene Module in der Berufsschule sowie in einem ÜK handelten über die Datenbanken und SQL. In der Praxis habe ich dann auch oft mit ORM's gearbeitet.",
      icon: Icon.DATABASE,
      weight: 2,
      backgroundColor: '#111827'
    },
    {
      title: 'Express',
      shortDescription: 'Ein Webframework für Node.js.',
      description:
        'In einem Ük über die Backend Entwicklung haben wir mit Express gearbeitet. Das Framework hat sich gut dafür geeignet, um in die Welt der Backend Entwicklung einzusteigen, da die Sprache nicht allzu komplex ist.',
      icon: Icon.FRAMEWORK,
      link: 'https://expressjs.com/',
      weight: 2,
      backgroundColor: '#000000'
    },
    {
      title: 'Bash',
      shortDescription: 'Eine Skriptsprache für die Bedienung der Konsole.',
      description:
        'Ich habe Bash in der Berufsschule kennen gelernt, als wir damit kleine Scripte geschrieben haben, welche mit Git interagieren. In der Praxis verwende ich Bash gerne für die Bedienung der Konsole.',
      icon: Icon.TERMINAL,
      link: 'https://www.gnu.org/software/bash/',
      weight: 2,
      backgroundColor: '#000000'
    },
    {
      title: 'React',
      shortDescription: 'Ein JavaScript Framework für die Entwicklung von Benutzeroberflächen.',
      description:
        'Die Grundlagen von React habe ich mir selbst beigebracht. Ich habe ein paar kleine Projekte mit React erstellt, um die Funktionsweise zu verstehen.',
      icon: Icon.REACT,
      link: 'https://reactjs.org/',
      weight: 2,
      backgroundColor: '#61dafb'
    },
    {
      title: 'Docker',
      shortDescription: 'Ein Tool, um Anwendungen in Containern zu verpacken (Cloud). ',
      description:
        'Über Docker habe ich sowohl in mehreren Modulen in der Berufsschule als auch in einem Ük kennengelernt und angewendet. Die Einfachkeit von Docker macht es sehr angenehm damit zu arbeiten. Für was ich Docker oft verwende, ist um eine lokale Datenbank zu erstellen.',
      icon: Icon.TOOL,
      link: 'https://www.docker.com/',
      weight: 2,
      backgroundColor: '#2496ed'
    },
    {
      title: 'Docker compose',
      shortDescription: 'Ein Tool, um mehrere Docker Container zu verwalten.',
      description:
        'In den Modulen und dem Ük, in dem wir Docker kennengelernt haben, haben wir auch Docker compose verwendet. Ich habe für mehrere Projekte eine Docker compose Konfiguration erstellt, um die App einfach lokal zu starten.',
      icon: Icon.TOOL,
      link: 'https://docs.docker.com/compose/',
      weight: 2,
      backgroundColor: '#2496ed'
    },
    {
      title: 'Scala',
      shortDescription: 'Eine funktionale Programmiersprache für die JVM.',
      description:
        'In der Schule haben wir ein Modul über die Funktionale Programmierung mit der Programmiersprache Scala gehabt. Das Konzept der Funktionalen Programmierung hat mir Spass gemacht und ich programmiere gerne in Scala.',
      icon: Icon.PROGRAMMING_LANGUAGE,
      link: 'https://www.scala-lang.org/',
      weight: 2,
      backgroundColor: '#dc322f'
    }
  ]
  return technologies.sort((a, b) => a.weight - b.weight)
})
