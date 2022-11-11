import { Button } from 'antd'
import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { homeContext } from '../../context/index'
import { WelCome11 } from './Welcome1-1'

export default function Welcome1() {
  const navigate = useNavigate()

  const reducer = (state, action) => {
    switch (action.type) {
      case 'edit':
        return { ...state, ...action }
      case 'add':
        window.console.log('调用add接口')
        return state
      case 'delete':
        window.console.log('调用delete接口')
        return state
      default:
        return state
    }
  }

  // const go = () => {
  //   navigate('/welcome2/1011?name=zhangjing')
  // }

  const [state, dispatch] = useReducer(reducer, {
    name: '全局的名称1',
  })

  return (
    <homeContext.Provider value={{ state, dispatch }}>
      <div flex justify-center items-center after="content-[hi] b-1 b-red" before="content-[hi] b-1 b-red" shadow >
        <header hover:bg-red duration-2000 w-100px b-1 b-red h-100px rd-50 >
          <div flex-none>ddddsadasdasdasd</div>
        </header>
        <main grow-1 b-1 b-blue h-100px>
          <WelCome11></WelCome11>
          {/* <Button onClick={go}>跳转到WEelcome2</Button> */}
        </main>
        <footer w-200px b-1 b-black h-55px></footer>
      </div>
    </homeContext.Provider>
  )
}
