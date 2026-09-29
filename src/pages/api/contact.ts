import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactBody = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  message?: unknown;
};

type ContactResponse = {
  ok?: boolean;
  error?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as ContactBody;
  const firstName = getString(body.firstName);
  const lastName = getString(body.lastName);
  const email = getString(body.email);
  const message = getString(body.message);

  if (
    !firstName ||
    !lastName ||
    !message ||
    !emailPattern.test(email) ||
    firstName.length > 100 ||
    lastName.length > 100 ||
    email.length > 254 ||
    message.length > 5000
  ) {
    return res.status(400).json({ error: "Invalid form data" });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.CONTACT_EMAIL || from;

  if (!host || !port || !user || !pass || !from || !to) {
    console.error("Contact email is not configured");
    return res.status(500).json({ error: "Email service is not configured" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Novo contato: ${firstName} ${lastName}`,
      text: [
        `Nome: ${firstName} ${lastName}`,
        `E-mail: ${email}`,
        "",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
