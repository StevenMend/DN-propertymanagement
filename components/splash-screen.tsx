"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="relative w-32 h-32">
        <Image
          src="/logo.png"
          alt="DN Property Management"
          fill
          className="object-contain splash-logo"
          sizes="(max-width: 640px) 128px, 128px"
          priority
        />
      </div>
    </div>
  )
}
