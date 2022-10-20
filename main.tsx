import React from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './src/App'
import { router } from './src/router/router'



const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);