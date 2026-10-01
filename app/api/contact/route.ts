import { Resend } from "resend";
import { NextResponse } from "next/server";
import { logSpam, overLength, spamReason } from "@/lib/spam-guard";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const tooLong = overLength(body, { name: 120, email: 200, message: 5000 });
  if (tooLong) return NextResponse.json({ error: `${tooLong} is too long` }, { status: 400 });
  const spam = spamReason(body, { email: "email", names: ["name"], messages: ["message"] });
  if (spam) {
    logSpam("contact", spam);
    return NextResponse.json({ success: true });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <no-reply@stackdstudiosai.com>",
    to: "chanel@stackdstudiosai.com",
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
