import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

interface Config {
  handleTouchStart?: (e: TouchEvent) => void
  handleTouchMove?: (e: TouchEvent) => void
  handleTouchEnd?: (e: TouchEvent) => void
}
export const useSwipe = (refElement: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right'>('')
  const startX = useRef(-1)

  const handleTouchStart = (e: TouchEvent) => {
    config?.handleTouchStart?.(e)
    startX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    config?.handleTouchMove?.(e)
    const newX = e.touches[0].clientX
    const d = newX - startX.current
    if (Math.abs(d) < 3) {
      setDirection('')
    } else if (d > 0 && direction !== 'right') {
      setDirection('right')
    }
    else if (d < 0 && direction !== 'left') {
      setDirection('left')
    }
  }

  const handleTouchEnd = (e: TouchEvent) => {
    config?.handleTouchEnd?.(e)
    setDirection('')
  }
  useEffect(() => {
    setDirection('')
    startX.current = 0
    if (!refElement.current) { return }
    refElement.current.addEventListener('touchstart', handleTouchStart)
    refElement.current.addEventListener('touchmove', handleTouchMove)
    refElement.current.addEventListener('touchend', handleTouchEnd)
    return () => {
      if (!refElement.current) { return }
      refElement.current.removeEventListener('touchstart', handleTouchStart)
      refElement.current.removeEventListener('touchmove', handleTouchMove)
      refElement.current.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])
  return { direction }
}
