"use client"

import { useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
  
    setIsDark(!isDark)
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />}
    </button>
  )
}
