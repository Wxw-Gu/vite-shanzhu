import React from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './src/App'
import { router } from './src/router/router'



const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

//RouterProvider作为一个组件渲染 并且传入createBrowserRouter执行后生成router实例
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);