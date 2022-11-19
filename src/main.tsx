import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'virtual:uno.css'
import Welcome1 from './pages/demo2/Welcome1'
import Welcome2 from './pages/demo2/Welcome2'
import Welcome3 from './pages/demo2/Welcome3'
import Welcome4 from './pages/demo2/Welcome4'
import WelcomeLayout from './pages/demo2/WelcomeLayout'
import Home from './pages/Home'
import { RedirectToWelcome1 } from './components/ErrorPage'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Outlet /></div>,
    errorElement: <RedirectToWelcome1 />,
    children: [
      { index: true, element: <div>请选择123</div> }, // 路径为/时显示
      {
        path: 'welcome',
        element: <div><Outlet /></div>,
        children: [
          { index: true, element: <div>空</div> },
          {
            path: '1',
            element: (
            <div>
              1<NavLink to='/welcome/2'>下一页</NavLink>
            </div>
            ),
          },
          {
            path: '2',
            element: (
            <div>
                2<NavLink to='/welcome/3'>下一页</NavLink>
            </div>
            ),
          },
          {
            path: '3',
            element: (
            <div>
                3<NavLink to='/welcome/4'>下一页</NavLink>
            </div>
            ),
          },
          {
            path: '4',
            element: (
            <div>
                4<NavLink to='/welcome/xxxx'>下一页</NavLink>
            </div>
            ),
          },
        ],
      },
      // { index: true, element: <ErrorPage /> },
      // { path: 'welcome1', element: <Welcome1 /> },
      // { path: 'welcome1/:id', element: <Welcome1 /> },
      // { path: 'welcome2', element: <Welcome2 /> },
      // { path: 'welcome2/:id', element: <Welcome2 /> },
      // { path: 'welcome3', element: <Welcome3 /> },
      // { path: 'welcome3/:id', element: <Welcome3 /> },
      // { path: 'welcome4', element: <Welcome4 /> },
      // { path: 'welcome4/:id', element: <Welcome4 /> },
      // { path: 'welcomeLayout', element: <WelcomeLayout /> },
    ],
  },
  // {
  //   path: '1',
  //   element: <div>1</div>,
  // },
])

// RouterProvider作为一个组件渲染 并且传入createBrowserRouter执行后生成router实例
// React.StrictMode严格模式的用处是检查出开发中不规范的地方  Effect会执行两次
root.render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
