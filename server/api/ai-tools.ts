import type { AiTool } from '~/types/AiTool'

export default defineEventHandler(async () => {
  const technologies: AiTool[] = [
    {
      image: '/ai-tools/clipboard.svg',
      title: 'Github Copilot',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
      link: 'https://github.com/features/copilot'
    },
    {
      image: '/ai-tools/message.svg',
      title: 'ChatGPT',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
      link: 'https://openai.com/chatgpt/overview/'
    }
  ]
  return technologies
})
