import { Resend } from "resend";
import {
  formatContactInquiryHtml,
  formatContactInquiryText,
  type ContactInquiry,
} from "@/lib/contact-inquiry";

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Resend ist nicht konfiguriert.");
  }

  return { apiKey, from, to };
}

export async function sendContactEmail(inquiry: ContactInquiry) {
  const { apiKey, from, to } = getResendConfig();
  const resend = new Resend(apiKey);

  const subject = `Neue Wartungsanfrage – ${inquiry.name}`;
  const text = formatContactInquiryText(inquiry);
  const html = formatContactInquiryHtml(inquiry);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: inquiry.email,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(error.message || "E-Mail konnte nicht gesendet werden.");
  }
}
