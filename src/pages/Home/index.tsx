import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'
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
            label: (<NavLink to="/welcome/1">去welcome1</NavLink>),
            key: 'welcome1',
            // 跳转<NavLink to="/welcome/1">Navigation One</NavLink>
          },
          {
            label: (<NavLink to="/welcome/2">去welcome2</NavLink>),
            key: 'welcome2',
          },
        ],
      },
    ],
  },
]

export default function Index() {
  const [current, setCurrent] = useState('mail')
  const onClick = (e) => {
    window.console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <div>
      {/* 配置路由 */}
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <Outlet />
      {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /> */}
    </div>
  )
}
