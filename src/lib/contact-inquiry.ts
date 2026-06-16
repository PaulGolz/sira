import { wizardSteps } from "@/lib/content";

export type ContactInquiry = {
  name: string;
  email: string;
  telefon: string;
  ort: string;
  nachricht: string;
  paket: string;
  typ: string;
  alter: string;
  anliegen: string;
};

export class ContactInquiryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactInquiryError";
  }
}

function readString(value: unknown, field: string, required = true): string {
  if (typeof value !== "string") {
    if (required) {
      throw new ContactInquiryError(`${field} ist erforderlich.`);
    }
    return "";
  }

  const trimmed = value.trim();
  if (required && !trimmed) {
    throw new ContactInquiryError(`${field} ist erforderlich.`);
  }

  return trimmed;
}

function readOptionalString(value: unknown, maxLength: number): string {
  if (value == null || value === "") return "";
  if (typeof value !== "string") {
    throw new ContactInquiryError("Ungültige Eingabe.");
  }

  const trimmed = value.trim();
  if (trimmed.length > maxLength) {
    throw new ContactInquiryError("Die Nachricht ist zu lang.");
  }

  return trimmed;
}

export function parseContactInquiry(body: unknown): ContactInquiry {
  if (!body || typeof body !== "object") {
    throw new ContactInquiryError("Ungültige Anfrage.");
  }

  const data = body as Record<string, unknown>;

  const name = readString(data.name, "Name");
  const email = readString(data.email, "E-Mail");
  const telefon = readString(data.telefon, "Telefon");
  const ort = readString(data.ort, "Ort");

  if (name.length > 120) {
    throw new ContactInquiryError("Der Name ist zu lang.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    throw new ContactInquiryError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
  }

  if (telefon.length > 40 || ort.length > 120) {
    throw new ContactInquiryError("Eine Eingabe ist zu lang.");
  }

  return {
    name,
    email,
    telefon,
    ort,
    nachricht: readOptionalString(data.nachricht, 4000),
    paket: readOptionalString(data.paket, 80),
    typ: readOptionalString(data.typ, 80),
    alter: readOptionalString(data.alter, 80),
    anliegen: readOptionalString(data.anliegen, 80),
  };
}

export function formatContactInquiryText(inquiry: ContactInquiry): string {
  const wizardLines = wizardSteps
    .map((step) => {
      const value = inquiry[step.id as keyof ContactInquiry];
      if (!value) return null;
      return `${step.frage}: ${value}`;
    })
    .filter(Boolean);

  const lines = [
    "Neue Wartungsanfrage über die Website",
    "",
    `Name: ${inquiry.name}`,
    `E-Mail: ${inquiry.email}`,
    `Telefon: ${inquiry.telefon}`,
    `Ort: ${inquiry.ort}`,
    "",
    "Angaben zur Anlage",
    ...(wizardLines.length > 0 ? wizardLines : ["Keine Angaben"]),
    "",
    inquiry.nachricht ? `Nachricht:\n${inquiry.nachricht}` : "Nachricht: –",
  ];

  return lines.join("\n");
}

export function formatContactInquiryHtml(inquiry: ContactInquiry): string {
  const text = formatContactInquiryText(inquiry);
  return `<pre style="font-family: ui-monospace, SFMono-Regular, Menlo, monospace; white-space: pre-wrap;">${escapeHtml(text)}</pre>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
