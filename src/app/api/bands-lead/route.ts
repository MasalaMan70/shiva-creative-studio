import { NextRequest, NextResponse } from "next/server";

// Lead capture for the B.A.N.D.S. site (served statically at /ai).
// Reuses the same Resend config as the photo-site contact form.
export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => ({}));

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const business = String(data.business ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const message = String(data.message ?? "").trim();
    const kind = String(data.kind ?? "Lead").trim(); // "Lead" | "Call request"
    const date = String(data.date ?? "").trim();
    const time = String(data.time ?? "").trim();
    const honeypot = String(data.company ?? ""); // bots fill hidden "company"

    if (honeypot) return NextResponse.json({ ok: true }); // silently drop bots

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const subject =
      kind === "Call request"
        ? `B.A.N.D.S. — Call request from ${name || email}`
        : `B.A.N.D.S. — New lead from ${name || email}`;

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "B.A.N.D.S. Website <onboarding@resend.dev>",
        to: process.env.NOTIFICATION_EMAIL || "shivapawar@outlook.com",
        replyTo: email || undefined,
        subject,
        html: `
          <h2>${kind === "Call request" ? "New call request" : "New lead"} — B.A.N.D.S.</h2>
          <p><strong>Name:</strong> ${name || "—"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Business:</strong> ${business || "—"}</p>
          ${date ? `<p><strong>Preferred date:</strong> ${date}</p>` : ""}
          ${time ? `<p><strong>Preferred time:</strong> ${time}</p>` : ""}
          <hr />
          <p><strong>What's eating their time:</strong></p>
          <p>${message ? message.replace(/\n/g, "<br/>") : "—"}</p>
        `,
      });
    } else {
      console.log("📩 B.A.N.D.S. lead:", { kind, name, email, business, phone, date, time, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("bands-lead error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please email us directly." },
      { status: 500 }
    );
  }
}
