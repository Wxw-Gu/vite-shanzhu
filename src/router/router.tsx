import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home/index'
import Welcome1 from '../pages/demo2/Welcome1'
import Welcome2 from '../pages/demo2/Welcome2'
import Welcome3 from '../pages/demo2/Welcome3'
import Welcome4 from '../pages/demo2/Welcome4'
import { RedirectToWelcome1 } from '../components/ErrorPage'
import WelcomeLayout from '../pages/demo2/WelcomeLayout'

// createBrowserRouter -> 生成history路由 创建路由实例 在方法中定义路由path和对应的组件
// createHashRouter -> 创建hash路由
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RedirectToWelcome1 /> },
      { path: 'welcome1', element: <Welcome1 /> },
      { path: 'welcome1/:id', element: <Welcome1 /> },
      { path: 'welcome2', element: <Welcome2 /> },
      { path: 'welcome2/:id', element: <Welcome2 /> },
      { path: 'welcome3', element: <Welcome3 /> },
      { path: 'welcome3/:id', element: <Welcome3 /> },
      { path: 'welcome4', element: <Welcome4 /> },
      { path: 'welcome4/:id', element: <Welcome4 /> },
      { path: 'welcomeLayout', element: <WelcomeLayout /> },
    ],
  },
  {
    path: '1',
    element: <div>1</div>,
  },
])
