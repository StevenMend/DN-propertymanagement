// import { NextResponse } from "next/server"

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, message } = body

//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "Nombre, email y mensaje son requeridos" }, { status: 400 })
//     }
//     console.log("Formulario recibido:", { name, email, phone, message })

//     return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" }, { status: 200 })
//   } catch (error) {
//     console.error("Error al procesar el formulario:", error)
//     return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
//   }
// }
