"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface WaitlistData {
  email: string
  phone: string
}

export async function submitToWaitlist(data: WaitlistData) {
  try {
    const { email, phone } = data

    // Validate data
    if (!email || !phone) {
      return { success: false, error: "Email e telefone são obrigatórios" }
    }

    await resend.emails.send({
      from: "Pix do Casal <onboarding@resend.dev>", // Using Resend's default domain for now
      to: "willysvarela@gmail.com",
      subject: "🎉 Nova inscrição na lista de espera!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48;">Nova inscrição na lista de espera do Pix do Casal!</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>WhatsApp:</strong> ${phone}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Data: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
          </p>
        </div>
      `,
    })

    // You might want to also store this in a database
    console.log("New waitlist submission:", { email, phone })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Erro ao enviar email. Por favor, tente novamente." }
  }
}

