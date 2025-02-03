import type { AiTool } from '~/types/AiTool'

export default defineEventHandler(async () => {
  const technologies: AiTool[] = [
    {
      image: 'testimage',
      title: 'testtitle',
      description: 'testdesc',
      link: 'testlink'
    },
    {
      image: 'testimage',
      title: 'testtitle',
      description: 'testdesc',
      link: 'testlink'
    }
  ]
  return technologies
})
