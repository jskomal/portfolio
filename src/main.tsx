import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RollForInitiative from './redirect_components/RollForInitiative'
import SampleSpace from './redirect_components/SampleSpace'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/roll-for-initiative',
    element: <RollForInitiative />
  },
  {
    path: 'sample-space',
    element: <SampleSpace />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
