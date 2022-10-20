import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const RedirectTowelcome1 = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])

  return <div>123211</div>
}
