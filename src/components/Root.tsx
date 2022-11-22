import React from 'react'
import { Navigate } from 'react-router-dom'

export const Root: React.FC = () => {
  const hasRead = localStorage.getItem('hasRead')

  if (hasRead === 'yes') {
    return <Navigate to='/home'/>
  } else {
    return <Navigate to='/welcome/1'/>
  }
}