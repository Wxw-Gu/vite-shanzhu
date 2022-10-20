import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Welcome1 from './Welcome1'

// 嵌套子路由
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="contact" element={<Welcome1 />}>
    </Route>,
  ),
)
