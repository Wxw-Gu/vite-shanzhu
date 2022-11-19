import React, { useEffect, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import QRCode from 'qrcode'
import { homeContext } from '../context/index'
import { WelCome11 } from './Welcome1-1'

export const Welcome1: React.FC = () => {
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

  const [state, dispatch] = useReducer(reducer, {
    name: '全局的名称1',
  })

  useEffect(() => {
    QRCode.toDataURL('https://www.baidu.com', (err, svgDom) => {
      if (err)
        throw err
      const img = document.getElementById('image') as HTMLImageElement
      img.src = svgDom
    })
  }, [])

  return (
    <homeContext.Provider value={{ state, dispatch }}>
      <div flex justify-center items-center after="content-[hi] b-1 b-red" before="content-[hi] b-1 b-red" shadow >
        <header hover:bg-red duration-2000 w-100px b-1 b-red h-100px rd-50 >
          <img id="image" h-100px src=''/>
        </header>
        <main grow-1 b-1 b-blue h-100px>
          <WelCome11 />
          {/* <Button onClick={go}>跳转到WEelcome2</Button> */}
        </main>
        <footer w-200px b-1 b-black h-55px />
         <div>
      1<NavLink to='/welcome/2'>下一页</NavLink>
    </div>
      </div>
    </homeContext.Provider>
  )
}
