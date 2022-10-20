import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Welcome1() {
  const [params] = useSearchParams();
  const name = params.get('name');
  const navigate = useNavigate()

  useEffect(() => {
    console.log('name:', name)
    console.log(params, 'params')
  }, [])

  const go = () => {
    //react router6 跳转到welcome2
    navigate('/welcome2/1011?name=zhangjing')
  }

  return (
    <div>
      Welcome1
      <Button type='primary' onClick={go}>跳转到2</Button>
    </div >
  )
}
