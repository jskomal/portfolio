import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Redirect from './Redirect'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/roll-for-initiative',
    element: <Redirect url='https://roll-for-initiative-jskomal.vercel.app/' />
  },
  {
    path: 'sample-space',
    element: <Redirect url='https://samplespace.surge.sh/' />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
