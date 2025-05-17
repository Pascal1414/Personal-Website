import type AiTool from '~/types/AiTool'

export default defineEventHandler(async () => {
  const technologies: AiTool[] = [
    {
      image: '/ai-tools/clipboard.svg',
      title: 'Github Copilot',
      description:
        'Mit GitHub Copilot kann ich, ohne den Code-Editor zu wechseln, Vorschläge zu meinem Code von der KI erhalten. Es ermöglicht es mir, während dem Programmieren angefangene Zeilen zu vervollständigen, die nächsten Zeilen vorzuschlagen oder direkt nach den Lösungen eines kleinen Problems zu suchen.',
      link: 'https://github.com/features/copilot'
    },
    {
      image: '/ai-tools/message.svg',
      title: 'ChatGPT',
      description:
        'Ich nutze ChatGPT in verschiedenen Situationen. Es kann mir beispielsweise Konzepte erklären oder bei der Behebung komplexerer Fehler helfen. Ein weiteres Anwendungsbeispiel ist die Erstellung von Dokumentationen. Dabei kann ich es zur Überarbeitung von Texten, zur Verbesserung von Formulierungen oder zum Hinweis auf fehlerhafte oder fehlende Inhalte einsetzen.',
      link: 'https://openai.com/chatgpt/overview/'
    }
  ]
  return technologies
})
