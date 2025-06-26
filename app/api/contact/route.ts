import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Forward data to Formspree
    const formspreeRes = await fetch("https://formspree.io/f/mrbqbqbj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    })

    if (!formspreeRes.ok) {
      const error = await formspreeRes.json()
      console.error("Formspree error:", error)
      return NextResponse.json({ error: "Failed to send message via Formspree" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json({ error: "Error processing request" }, { status: 500 })
  }
}

