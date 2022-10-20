/*
 * @Author: Wxw
 * @Date: 2022-10-20 10:32:35
 * @LastEditTime: 2022-10-20 14:49:40
 * @LastEditors: Wxw
 * @Description: 
 * @FilePath: \viteDemo\src\pages\Home\index.tsx
 */
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom'
import Welcome1 from '../demo2/Welcome1'
import Welcome2 from '../demo2/Welcome2'
const items = [
  {
    label: '测试菜单',
    key: 'mail',
    icon: <MailOutlined />,
    children: [
      {
        type: 'group',
        label: 'group',
        children: [
          {
            label: (<NavLink to="/welcome1">Navigation one</NavLink>),
            key: 'setting:1',
            //跳转<NavLink to="/welcome/1">Navigation One</NavLink>
          },
          {
            label: (<NavLink to="/welcome2">Navigation two</NavLink>),
            key: 'setting:2',
          },
        ],
      },
      // {
      //   type: 'group',
      //   label: (<NavLink to="/welcome/2">Navigation two</NavLink>),
      //   children: [
      //     {
      //       label: 'Option 3',
      //       key: 'setting:3',
      //     },
      //     {
      //       label: 'Option 4',
      //       key: 'setting:4',
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   label: <NavLink to="/welcome/2">Navigation Two</NavLink>,
  //   key: 'SubMenu',
  //   icon: <SettingOutlined />,
  //   component: <Welcome2 />,
  // },
];

export default function Index() {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      {/* 配置路由 */}
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}>
        {/* <Menu.Item key="mail">
          <NavLink to="/welcome/1">Navigation one</NavLink>
        </Menu.Item>
        <Menu.Item key="app">
          <NavLink to="/welcome/2">Navigation Two</NavLink>
        </Menu.Item>
        <Menu.Item key="SubMenu">
          <NavLink to="/welcome/3">Navigation Three - Submenu</NavLink>
        </Menu.Item> */}
      </Menu>
      <Outlet></Outlet>
      {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /> */}
    </div>
  )
}
