import ts from './assets/images/typescript-official-svgrepo-com.svg'
import react from './assets/images/react.svg'
import node from './assets/images/node-js-svgrepo-com.svg'
import python from './assets/images/python-svgrepo-com.svg'
import go from './assets/images/Go-Logo_Aqua.svg'
import aws from './assets/images/aws-svgrepo-com.svg'
import cypress from './assets/images/cypress-svgrepo-com.svg'
import graphql from './assets/images/graph-ql-svgrepo-com.svg'
import html from './assets/images/html-5-svgrepo-com.svg'
import css from './assets/images/css-3-svgrepo-com.svg'

type TSkills = {
  img: string
  name: string
}

const skills: TSkills[] = [
  { img: ts, name: 'Typescript' },
  { img: react, name: 'React' },
  { img: node, name: 'Node.js' },
  { img: python, name: 'Python' },
  { img: go, name: 'Go' },
  { img: aws, name: 'AWS' },
  { img: cypress, name: 'Cypress' },
  { img: graphql, name: 'Graph QL' },
  { img: html, name: 'HTML' },
  { img: css, name: 'CSS' }
]

const Skills = () => {
  return (
    <>
      <h2 className='bold'>Skills</h2>
      <ul className='skills-grid'>
        {skills.map((skill) => (
          <div>
            <img src={skill.img} alt={skill.name} className='skills-badge' />
            <p className='badge-text'>{skill.name}</p>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Skills
