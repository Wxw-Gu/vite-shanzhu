/*
 * @Author: Wxw
 * @Date: 2022-10-20 14:46:25
 * @LastEditTime: 2022-10-20 14:47:26
 * @LastEditors: Wxw
 * @Description: 
 * @FilePath: \viteDemo\src\pages\demo2\router.tsx
 */
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Welcome1 from "./Welcome1";

//嵌套子路由
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="contact" element={<Welcome1 />}>
    </Route>
  )

)
