// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // Default Resend sender
      to: "ndunewesolomon@gmail.com", // Replace with your inbox
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br />${message}</p>
      `,
    })

    return res.status(200).json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending failed:", error)
    return res.status(500).json({ error: "Failed to send email" })
  }
}
