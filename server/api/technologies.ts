import { Technology } from '~/types/Technology'

export default defineEventHandler((event) => {
  // Return a list of technologies
  const technologies: Technology[] = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces',
      icon: '/technology/react.svg'
    },
    {
      title: 'Nuxt.js',
      description: 'The Progressive JavaScript Framework',
      icon: '/technology/nuxt.svg'
    },
    {
      title: 'Angular',
      description: 'A platform and framework for building single-page client applications',
      icon: '/technology/react.svg'
    }
  ]
  return technologies
})
