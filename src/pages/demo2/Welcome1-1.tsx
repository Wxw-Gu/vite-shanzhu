import { Button } from 'antd'
import React, { useContext, useEffect } from 'react'
import { homeContext } from '../../context/index'

export const WelCome11: React.FC = () => {
  const { state, dispatch } = useContext(homeContext)

  const clickButton = () => {
    dispatch({ type: 'edit', name: '修改后的名称' })
  }

  const clickButton2 = () => {
    dispatch({ type: 'add', name: '1' })
  }

  return (
    <div b-1 bg-red flex justify-around>
      <div>子组件 name是{state.name}</div>
      <Button onClick={clickButton} type="primary">获取state</Button>
      <Button onClick={clickButton2} type="primary">调用接口</Button>
    </div>
  )
}
