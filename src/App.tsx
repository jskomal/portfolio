import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>
        <Typewriter words={["Hello there, I'm Jordan."]} />
      </h1>
      <p>Front End Software Engineer </p>
    </div>
  )
}

export default App
