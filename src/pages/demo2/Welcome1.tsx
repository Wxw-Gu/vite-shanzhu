import { Button } from 'antd'
import React from 'react'

import { useNavigate } from 'react-router-dom'

export const Welcome1: React.FC = () => {
  const navigate = useNavigate()

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
