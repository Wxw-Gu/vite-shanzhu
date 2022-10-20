import { Button } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome1() {
  const navigate = useNavigate()

  useEffect(() => {
    window.console.log('执行了')
  }, [])

  const go = () => {
    // react router6 跳转到welcome2
    navigate('/welcome2/1011?name=zhangjing')
  }

  return (
    <div>
      Welcome1
      <Button type='primary' onClick={go}>跳转到2</Button>
    </div >
  )
}
