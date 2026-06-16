import {
  ContactInquiryError,
  parseContactInquiry,
} from "@/lib/contact-inquiry";
import { sendContactEmail } from "@/lib/send-contact-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const inquiry = parseContactInquiry(body);
    await sendContactEmail(inquiry);

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof ContactInquiryError) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    console.error("Kontaktformular:", error);

    return Response.json(
      {
        error:
          "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      },
      { status: 500 },
    );
  }
}
