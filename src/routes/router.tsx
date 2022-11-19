import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/ErrorPage'
import { welcomeRouters } from './WelcomeRouters'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Outlet /></div>,
    errorElement: <RedirectToWelcome1 />,
    children: [welcomeRouters],
  },
])
