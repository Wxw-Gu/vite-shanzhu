import { createRouter } from '@remix-run/router';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import Home from '../pages/Home/index'
import Welcome1 from '../pages/demo2/Welcome1'
import Welcome2 from '../pages/demo2/Welcome2'
import Welcome3 from '../pages/demo2/Welcome3'
import Welcome4 from '../pages/demo2/Welcome4'
import WelcomeLayout from '../pages/demo2/WelcomeLayout'
import RedirectUnwelcome1 from '../router/RedirectTowelcome1'

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Demo1 />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "events/:id",
//         element: <Event />,
//         loader: eventLoader,
//       },
//     ],
//   },
// ]);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <RedirectUnwelcome1 />,
    children: [
      { path: 'welcome1', element: <Welcome1 /> },
      { path: 'welcome2', element: <Welcome2 /> },
      { path: 'welcome3', element: <Welcome3 /> },
      { path: 'welcome4', element: <Welcome4 /> },
    ]
  },
  {
    path: 'home',
    element: <RedirectUnwelcome1 />
  }
])

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       <Route path="welcome1" element={<Welcome1 />} />
//       <Route path="welcome2" element={<Welcome2 />} />
//       <Route element={<Welcome3 />}>
//         <Route path="welcome3" element={<Welcome4 />} />
//         <Route path="logout" />
//       </Route>
//     </Route>
//   )
// )
