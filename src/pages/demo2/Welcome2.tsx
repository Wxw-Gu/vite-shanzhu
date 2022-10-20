/* eslint-disable no-console */
import { Button } from 'antd'
import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function Welcome2() {
  const [params] = useSearchParams()// 获取搜索参数 url ?name=xxx
  const _parmas = useParams()// 路由所需的参数来匹配
  const id = _parmas.id

  const name = params.get('name')
  useEffect(() => {
    console.log('name:', name)
    console.log(params, 'params')
    console.log(_parmas, '_parmas')
  }, [])

  const navigate = useNavigate()
  const goback = () => {
    navigate(-1)
  }
  return (
    <div>
      Welcome2
      <Button type='primary' onClick={goback}>跳回到1 id是{id}</Button>
    </div>
  )
}
