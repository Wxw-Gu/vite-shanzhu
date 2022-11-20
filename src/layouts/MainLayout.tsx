import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  const nav = useNavigate()

  const go = () => {
    nav('/welcome/1')
  }

  return (
    <div>
      {/* <span onClick={go}>跳转到welcome1</span> */}
      <Outlet />
    </div>
  )
}
