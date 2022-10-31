import sampleSpaceImg from './images/sample-space.gif'
import rollForInitiativeImg from './images/roll-for-initiative.gif'
import ticTacToeImg from './images/tic-tac-toe.gif'

export type TProject = {
  title: string
  description: string
  deployURL?: string
  githubURL: string
  previewImg: string
  id: number
}

export const links: TProject[] = [
  {
    title: 'Sample Space',
    description:
      'Sample Space is an educational-minded drum machine that explores the sounds of SPACE, as sampled by NASA. Featuring 3 distinct kits, users can create sequences that delve into the bounds of our known universe and even beyond in an accessible and fun learning environment.',
    deployURL: 'https://sample-space-fe.herokuapp.com/',
    githubURL: 'https://github.com/Sample-Space/sampleSpaceFE',
    previewImg: sampleSpaceImg,
    id: 0
  },
  {
    title: 'Roll for Initiative',
    description:
      'Hail and well met, traveler! Roll for Initiative is a turn-based brawler featuring the mythical monsters and courageous heroes from the Dungeons and Dragons (DnD) universe! Engage in single combat against one of five unique monstrous foes using one of the three playable classes from classic DnD: Fighter, Cleric, or Rogue. Your fate is cast by the dice!',
    deployURL: 'https://roll-for-initiative-turing.herokuapp.com/',
    githubURL: 'https://github.com/jskomal/roll-for-initiative',
    previewImg: rollForInitiativeImg,
    id: 1
  },
  {
    title: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe written in React and Typescript',
    deployURL: 'https://tic-tac-toe-jskomal.herokuapp.com/',
    githubURL: 'https://github.com/jskomal/tic-tac-toe-react',
    previewImg: ticTacToeImg,
    id: 2
  }
]

export const cards = [
  {
    title: "Hello, I'm Jordan!",
    body: "I'm a Front End Engineer and I believe that any technology that has reached its full potential should appear indistinguishable from magic, and my goal is to facilitate bringing that magic home, providing an unparalleled user experience through immaculate design and implementation. As a strategic problem solver, I excel at planning, testing, and building designs, presenting clear and intuitive user flows, and materializing professionally unified styled UIs. I've always excelled at learning new languages, from literal languages achieving a summa cum laude award from the National Latin Exam during High School, to musical languages, following my collegiate journey culminating in my graduation from the New England Conservatory of Music. I, being a perpetual student, bring this same commitment of learning to my career in software development. Let's connect, talk music, learning, and web development!",
    img: null,
    link1: null,
    link2: null,
    project: null
  },
  {
    title: 'Hello, NUMBAH 2!',
    body: "I'm a Front End Engineer and I believe that any technology that has reached its full potential should appear indistinguishable from magic, and my goal is to facilitate bringing that magic home, providing an unparalleled user experience through immaculate design and implementation. As a strategic problem solver, I excel at planning, testing, and building designs, presenting clear and intuitive user flows, and materializing professionally unified styled UIs. I've always excelled at learning new languages, from literal languages achieving a summa cum laude award from the National Latin Exam during High School, to musical languages, following my collegiate journey culminating in my graduation from the New England Conservatory of Music. I, being a perpetual student, bring this same commitment of learning to my career in software development. Let's connect, talk music, learning, and web development!",
    img: null,
    link1: null,
    link2: null,
    project: null
  }
]