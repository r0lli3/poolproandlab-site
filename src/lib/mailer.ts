import { Resend } from "resend";

const INBOX = "rollie@jdpools.com";
const FROM = process.env.RESEND_FROM || "Pool Pro&Lab <onboarding@resend.dev>";

type SendArgs = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendInquiryEmail({ subject, html, replyTo }: SendArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[mailer] RESEND_API_KEY is not set; falling back to log.", {
      subject,
      replyTo,
    });
    return { ok: false as const, reason: "missing_api_key" };
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [INBOX],
    subject,
    html,
    replyTo,
  });

  if (error) {
    console.error("[mailer] resend error", error);
    return { ok: false as const, reason: "send_failed", error };
  }

  return { ok: true as const, id: data?.id };
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function fieldRow(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#64748b;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#0f172a;font-size:14px;">${escapeHtml(value)}</td></tr>`;
}
