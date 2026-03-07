import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, area, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>", // replace with your verified domain e.g. "Brigid Law <noreply@brigidlaw.com>"
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `New enquiry${area ? ` — ${area}` : ""} from ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      area ? `Area: ${area}` : null,
      ``,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
