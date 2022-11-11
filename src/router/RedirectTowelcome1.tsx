import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export const RedirectTowelcome1 = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])

  // useEffect(() => {
  //   const change = (e) => {
  //     window.console.log(e)
  //   }
  //   window.addEventListener('mousemove', change)
  //   window.addEventListener('click', change)
  //   return () => {
  //     window.removeEventListener('mousemove', change)
  //     window.removeEventListener('click', change)
  //   }
  // }, [])

  useEffect(() => {
    let timer: any = null
    const change = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        window.console.log('停止了')
      }, 3000)
    }
    window.addEventListener('mousemove', change)
    window.addEventListener('click', change)
    return () => {
      window.removeEventListener('mousemove', change)
      window.removeEventListener('click', change)
    }
  }, [])

  return <div h-screen>123211</div>
}
