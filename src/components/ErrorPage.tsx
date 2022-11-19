import type React from 'react'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export const RedirectToWelcome1: React.FC = () => {
  // const [countDown, setCountDown] = useState(3)
  const navigate = useNavigate()
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (countDown === 1) {
  //       clearInterval(timer)
  //       navigate('/welcome1')
  //     }

  //     setCountDown(countDown - 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [countDown])

  useEffect(() => {
    navigate('/welcome/1')
  }, [])

  return null
}
