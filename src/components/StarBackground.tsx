"use client"

import { useEffect } from 'react'

export function StarBackground() {
  useEffect(() => {
    // Generate random star positions
    const generateStars = (n: number) => {
      let value = ''
      for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000)
        const y = Math.floor(Math.random() * 2000)
        value += `${x}px ${y}px #FFF${i === n - 1 ? '' : ','} `
      }
      return value
    }

    // Apply star shadows to elements
    const starsSmall = document.getElementById('stars')
    const starsMedium = document.getElementById('stars2')
    const starsBig = document.getElementById('stars3')

    if (starsSmall) starsSmall.style.boxShadow = generateStars(700)
    if (starsMedium) starsMedium.style.boxShadow = generateStars(200)
    if (starsBig) starsBig.style.boxShadow = generateStars(100)
  }, [])

  return (
    <div className="star-background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  )
}