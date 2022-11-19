import React from 'react'
import { Outlet } from 'react-router-dom'
import { Welcome1 } from '../pages/Welcome1'
import { Welcome2 } from '../pages/Welcome2'
import { Welcome3 } from '../pages/Welcome3'
import { Welcome4 } from '../pages/Welcome4'

export const welcomeRouters = {
  // { index: true, element: <div>请选择123</div> }, // 路径为/时显示
  path: 'welcome',
  element: <div><Outlet /></div>,
  children: [
    { index: true, element: <div>空</div> },
    {
      path: '1',
      element: <Welcome1 />,
    },
    {
      path: '2',
      element: <Welcome2 />,
    },
    {
      path: '3',
      element: <Welcome3 />,
    },
    {
      path: '4',
      element: <Welcome4 />,
    },
  ],
}
