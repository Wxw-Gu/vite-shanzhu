import React from 'react'
import { Link, createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/ErrorPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRouters } from './WelcomeRouters'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <RedirectToWelcome1 />,
    children: [
      { index: true, element: <Link to='/welcome/1'>去welcome1</Link> }, // 路径为/时显示,
      welcomeRouters,
    ],
  },
])
