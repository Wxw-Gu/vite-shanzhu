import { Button } from 'antd'
import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import QRCode from 'qrcode'
import { homeContext } from '../../context/index'
import { WelCome11 } from './Welcome1-1'
// 引入qrCode

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

  useEffect(() => {
    const opts = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.3,
      margin: 1,
      color: {
        dark: '#010599FF',
        light: '#FFBF60FF',
      },
      url: 'https://www.baidu.com',
    }

    // QRCode.toDataURL('www.baidu.com', opts, (err, url) => {
    //   if (err)
    //     throw err

    //   const img = document.getElementById('image')
    //   img.src = url
    // })

    if (1)
      console.log(2)

    QRCode.toString('http://49.235.73.2951/anguodong000@163.com', (err, svgDom) => {
      if (err)
        throw err
      // 把svgDom插入到页面中
      const img = document.getElementById('image')
      img.innerHTML = svgDom
    })
  }, [])

  return (
    <homeContext.Provider value={{ state, dispatch }}>
      <div flex justify-center items-center after="content-[hi] b-1 b-red" before="content-[hi] b-1 b-red" shadow >
        <header hover:bg-red duration-2000 w-100px b-1 b-red h-100px rd-50 >
          <div id="image" h-100px />
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
