// src/BackgroundEffect.tsx
import { useEffect, useRef } from 'react'
import './BackgroundEffect.css'

import aceLogo from './assets/ACELogo.png'

export default function BackgroundEffect() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Blur increases with scroll, max 16px
      const blur = Math.min(scrollY / 40, 16)
      // Zoom increases slightly with scroll, max 1.08
      const scale = 1 + Math.min(scrollY / 2000, 0.08)
      if (bgRef.current) {
        bgRef.current.style.filter = `blur(${blur}px)`
        bgRef.current.style.transform = `scale(${scale})`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={bgRef}
      className="background-effect"
      aria-hidden="true"
      style={{ backgroundImage: `linear-gradient(120deg, #081848 0%, #00bfff 100%), url(${aceLogo})` }}
    />
  )
}
