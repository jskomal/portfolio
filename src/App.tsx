import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import { links } from './assets/links'
import gitHub from './assets/images/github.svg'
import deploy from './assets/images/deploy-svgrepo-com.svg'

import './App.css'

function App() {
  const [linkIndex, setLinkIndex] = useState(0)

  const handleSlides = () => {
    if (linkIndex === links.length - 1) {
      setLinkIndex(0)
    } else {
      setLinkIndex((prev) => prev + 1)
    }
  }

  return (
    <div>
      <h1>
        <Typewriter words={["Hello there, I'm Jordan."]} />
      </h1>
      <p>Front End Software Engineer</p>
      <div className='project'>
        <h2>{links[linkIndex].title}</h2>
        <p>{links[linkIndex].description}</p>
        <img
          className='preview-img'
          src={links[linkIndex].previewImg}
          alt={links[linkIndex].title}
        />
        <div className='buttons-row'>
          <a href={links[linkIndex].githubURL}>
            <img className='svg' src={gitHub} alt='To GitHub' />
          </a>

          <a href={links[linkIndex].deployURL}>
            <img className='svg' src={deploy} alt='To Deploy Link' />
          </a>
          <a onClick={handleSlides}>Next Project</a>
        </div>
      </div>
      <footer>
        <a href='https://github.com/jskomal'>GitHub</a>
        <a href='https://www.linkedin.com/in/jskomal/'>LinkedIn</a>
        <a href='mailto:jskomal@gmail.com'>Email</a>
      </footer>
    </div>
  )
}

export default App
