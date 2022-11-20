import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/ErrorPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRouters } from './WelcomeRouters'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <RedirectToWelcome1 />,
    children: [welcomeRouters],
  },
])
