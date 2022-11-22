import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStore } from '../stores/useLocalStore'

export const Root: React.FC = () => {
  const { hasRead } = useLocalStore()

  // fixme 测试
  if (hasRead === 'yes') {
    return <Navigate to='/home2'/>
  } else {
    return <Navigate to='/welcome/1'/>
  }
}
