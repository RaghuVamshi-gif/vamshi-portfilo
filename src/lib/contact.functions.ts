import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(1).max(5000),
});

const TO = "raghuvamshipapa@gmail.com";

function base64url(input: string) {
  return Buffer.from(input, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
    if (!lovableKey || !gmailKey) {
      throw new Error("Email is not configured yet.");
    }

    const subject = `Portfolio contact from ${data.name}`;
    const raw = base64url(
      [
        `To: ${TO}`,
        `Reply-To: ${data.email}`,
        `Subject: ${subject}`,
        'Content-Type: text/plain; charset="UTF-8"',
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        "",
        data.message,
      ].join("\r\n"),
    );

    const res = await fetch(
      "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": gmailKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ raw }),
      },
    );

    if (!res.ok) {
      const body = await res.text();
      console.error(`Gmail send failed [${res.status}]: ${body}`);
      throw new Error(`Gmail send failed [${res.status}]: ${body}`);
    }

    return { ok: true as const };
  });
