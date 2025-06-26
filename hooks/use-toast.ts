"use client"

// Simplified version for the demo
import { useState } from "react"

type ToastProps = {
  title: string
  description: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts((prev) => [...prev, props])
    // In a real implementation, we would also handle removing toasts after a timeout
    console.log("Toast:", props)
  }

  return { toast, toasts }
}
