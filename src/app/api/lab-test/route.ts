import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmail, fieldRow, escapeHtml } from "@/lib/mailer";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  mode?: "branch" | "onsite";
  branch?: string;
  address?: string;
  poolType?: string;
  poolEnv?: string;
  poolVolume?: string;
  preferredDate?: string;
  symptoms?: string[];
  notes?: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Payload;
  const {
    name,
    email,
    phone,
    mode,
    branch,
    address,
    poolType,
    poolEnv,
    poolVolume,
    preferredDate,
    symptoms,
    notes,
  } = body;

  if (!name || !email || !phone || !mode) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (mode === "branch" && !branch) {
    return NextResponse.json({ error: "Branch is required" }, { status: 400 });
  }
  if (mode === "onsite" && !address) {
    return NextResponse.json({ error: "Address is required" }, { status: 400 });
  }

  const modeLabel =
    mode === "branch" ? "Drop sample at branch" : "On-site collection";
  const symptomsLine = (symptoms ?? []).join(", ") || "(none specified)";

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:620px;margin:0 auto;">
      <h2 style="font-size:18px;color:#0f172a;margin:0 0 4px;">New lab test booking</h2>
      <p style="color:#64748b;font-size:13px;margin:0 0 16px;">via /book-lab-test</p>

      <h3 style="font-size:13px;color:#00b4d8;text-transform:uppercase;letter-spacing:0.06em;margin:18px 0 6px;">Service</h3>
      <table style="border-collapse:collapse;width:100%;">
        ${fieldRow("Mode", modeLabel)}
        ${mode === "branch" ? fieldRow("Branch", branch) : fieldRow("Address", address)}
        ${fieldRow("Preferred date", preferredDate)}
      </table>

      <h3 style="font-size:13px;color:#00b4d8;text-transform:uppercase;letter-spacing:0.06em;margin:18px 0 6px;">Pool</h3>
      <table style="border-collapse:collapse;width:100%;">
        ${fieldRow("Type", poolType)}
        ${fieldRow("Environment", poolEnv)}
        ${fieldRow("Volume (m³)", poolVolume)}
        ${fieldRow("Reported issues", symptomsLine)}
      </table>

      <h3 style="font-size:13px;color:#00b4d8;text-transform:uppercase;letter-spacing:0.06em;margin:18px 0 6px;">Contact</h3>
      <table style="border-collapse:collapse;width:100%;">
        ${fieldRow("Name", name)}
        ${fieldRow("Email", email)}
        ${fieldRow("Phone", phone)}
      </table>

      ${
        notes
          ? `<h3 style="font-size:13px;color:#00b4d8;text-transform:uppercase;letter-spacing:0.06em;margin:18px 0 6px;">Notes</h3>
             <div style="padding:14px 16px;background:#f8fafc;border-left:3px solid #00b4d8;border-radius:4px;color:#0f172a;font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(notes)}</div>`
          : ""
      }

      <p style="margin-top:24px;color:#94a3b8;font-size:11px;">Sent from poolproandlab-site.vercel.app /book-lab-test</p>
    </div>
  `;

  const subject =
    mode === "branch"
      ? `[PPL Lab Test] ${branch} — ${name}`
      : `[PPL Lab Test] On-site — ${name}`;

  const result = await sendInquiryEmail({ subject, html, replyTo: email });
  if (!result.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
