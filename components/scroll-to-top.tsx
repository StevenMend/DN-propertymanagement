"use client"

import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  return (
    <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <ChevronUp className="h-5 w-5 text-white" />
    </div>
  )
}
