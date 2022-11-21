import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

export const RedirectToWelcome1: React.FC = () => {
  const [countDown, setCountDown] = useState(3)
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown === 1) {
        clearInterval(timer)
        navigate('/welcome/1')
      }

      setCountDown(countDown - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [countDown])

  // useEffect(() => {
  //   navigate('/welcome/1')
  // }, [])

  return <div>
    组件有错误，将在{countDown}秒后跳转到/welcome/1
  </div>
}
