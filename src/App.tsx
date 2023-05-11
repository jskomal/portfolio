import { Typewriter } from 'react-simple-typewriter'
import Skills from './Skills'
import Projects from './Projects'

import gitHub from './assets/images/github.svg'
import email from './assets/images/email-svgrepo-com.svg'
import linkedIn from './assets/images/linkedin-svgrepo-com.svg'
import headshot from './assets/images/headshot.png'

import './App.css'

function App() {
  return (
    <main>
      <h1>
        <Typewriter
          words={["Hey there, I'm Jordan"]}
          cursor={true}
          cursorBlinking={false}
          cursorStyle='👋'
        />
      </h1>
      <div className='grid'>
        <img className='headshot' src={headshot} alt='Jordan Skomal photo' />
        <div className='about'>
          <p>Software Engineer</p>
          <p>Jazz Trumpeter</p>
          <p>Problem Solver</p>
          <div className='links'>
            <a href='https://github.com/jskomal'>
              <img className='svg' src={gitHub} alt='Link to my Github page' />
            </a>
            <a href='mailto:jskomal@gmail.com'>
              <img src={email} alt='email me!' className='svg' />
            </a>
            <a href='https://www.linkedin.com/in/jskomal/'>
              <img src={linkedIn} alt='Link to my LinkedIn page' className='svg' />
            </a>
          </div>
        </div>
      </div>
      <article className='blurb'>
        <h2 className='bold'>
          Musician and Educator -{'>'} Software Bootcamp -{'>'} Computer Science
        </h2>
        <p>
          I am a Jazz Musician turned Software Engineer, pursuing a degree in Computer
          Science.
        </p>
        <p>
          Bringing extensive experience in customer-facing roles, I thrive in fast-paced
          environments. By starting my career in music I understand how to apply
          creativity to complex problems, collaborate in a customer-focused environment,
          and understand the nature and benefits of dedicated practice as deeply as the
          best software developers.
        </p>
        <Skills />
        <Projects />
        <p>More coming soon...</p>
      </article>
    </main>
  )
}

export default App
