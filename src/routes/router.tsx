import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/ErrorPage'
import Home from '../pages/Home'
import { welcomeRouters } from './WelcomeRouters'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <RedirectToWelcome1 />,
    children: [welcomeRouters],
  },
])
