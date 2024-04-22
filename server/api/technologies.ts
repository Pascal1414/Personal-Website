import { Technology } from '~/types/Technology'

export default defineEventHandler((event) => {
  // Return a list of technologies
  const technologies: Technology[] = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces'
    },
    {
      title: 'Vue',
      description: 'The Progressive JavaScript Framework'
    },
    {
      title: 'Angular',
      description: 'A platform and framework for building single-page client applications'
    }
  ]
  return technologies
})