import sampleSpaceImg from './images/sample-space.gif';
import rollForInitiativeImg from './images/roll-for-initiative.gif';
import ideaBoxImg from './images/ideabox.png';

export type TProject = {
  title: string
  description: string
  deployURL: string
  githubURL: string
  previewImg: string
  id: number
  stack: string
}

export const links: TProject[] = [
  {
    title: 'Sample Space',
    description:
      'Sample Space is an educational-minded drum machine that explores the sounds of SPACE, as sampled by NASA. Featuring 3 distinct kits, users can create sequences that delve into the bounds of our known universe and even beyond in an accessible and fun learning environment.',
    deployURL: 'https://sample-space-fe.herokuapp.com/',
    githubURL: 'https://github.com/Sample-Space/sampleSpaceFE',
    previewImg: sampleSpaceImg,
    id: 0,
    stack:
      'Built with React and Ruby on Rails, Samples hosted with Amazon Web Services, tested with Cypress'
  },
  {
    title: 'Roll for Initiative',
    description:
      'Hail and well met, traveler! Roll for Initiative is a turn-based brawler featuring the mythical monsters and courageous heroes from the Dungeons and Dragons (DnD) universe! Engage in single combat against one of five unique monstrous foes using one of the three playable classes from classic DnD: Fighter, Cleric, or Rogue. Your fate is cast by the dice!',
    deployURL: 'https://roll-for-initiative-one.vercel.app/',
    githubURL: 'https://github.com/jskomal/roll-for-initiative',
    previewImg: rollForInitiativeImg,
    id: 1,
    stack:
      'Built with Typescript and React, styled with CSS, tested with Cypress, Routed with React Router'
  },
  {
    title: 'Idea Ideabox Box',
    description:
      'Built to help students get out of a rut building the same project over and over again, get inspired with the magic of adjectives.',
    deployURL: 'https://idea-idea-box-box.vercel.app/',
    githubURL: 'https://github.com/jskomal/idea-idea-box-box',
    previewImg: ideaBoxImg,
    id: 2,
    stack:
      'Built with Typescript and React, styled with CSS, tested with Cypress, Routed with React Router'
  }
]
