import { NextRequest, NextResponse } from "next/server";

// TODO: Replace this stub with a real email provider (e.g. Resend, SendGrid, Nodemailer)
// Install: npm install resend
// Then: import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
// await resend.emails.send({ from: '...', to: 'info@poolproandlab.com', ... });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Stub: log the submission
  console.log("[Contact Form Submission]", {
    name,
    email,
    phone: phone || "(not provided)",
    subject,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
