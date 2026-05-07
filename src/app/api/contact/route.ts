import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmail, fieldRow, escapeHtml } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="font-size:18px;color:#0f172a;margin:0 0 16px;">New contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;">
        ${fieldRow("Name", name)}
        ${fieldRow("Email", email)}
        ${fieldRow("Phone", phone)}
        ${fieldRow("Subject", subject)}
      </table>
      <div style="margin-top:18px;padding:14px 16px;background:#f8fafc;border-left:3px solid #00b4d8;border-radius:4px;color:#0f172a;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(message)}</div>
      <p style="margin-top:24px;color:#94a3b8;font-size:11px;">Sent from poolproandlab-site.vercel.app /contactus</p>
    </div>
  `;

  const result = await sendInquiryEmail({
    subject: `[PPL Contact] ${subject}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
