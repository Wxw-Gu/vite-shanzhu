import React = require('react')
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
// import App from './src/App'
import { router } from './src/router/router'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

// RouterProvider作为一个组件渲染 并且传入createBrowserRouter执行后生成router实例
// React.StrictMode严格模式的用处是检查出开发中不规范的地方  Effect会执行两次
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
