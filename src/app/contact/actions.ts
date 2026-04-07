"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  business: z.string().min(1, "Business name is required"),
  website: z.string().optional(),
  services: z.array(z.string()).min(1, "Select at least one service"),
  budget: z.string().min(1, "Select a budget range"),
  source: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (at least 10 characters)"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    business: formData.get("business") as string,
    website: formData.get("website") as string,
    services: formData.getAll("services") as string[],
    budget: formData.get("budget") as string,
    source: formData.get("source") as string,
    message: formData.get("message") as string,
    honeypot: formData.get("honeypot") as string,
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Send email via Resend (when API key is configured)
  try {
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "Shiva Website <onboarding@resend.dev>",
        to: process.env.NOTIFICATION_EMAIL || "shivapawar@outlook.com",
        subject: `New Inquiry: ${result.data.name} — ${result.data.business}`,
        html: `
          <h2>New Client Inquiry</h2>
          <p><strong>Name:</strong> ${result.data.name}</p>
          <p><strong>Email:</strong> ${result.data.email}</p>
          <p><strong>Phone:</strong> ${result.data.phone || "Not provided"}</p>
          <p><strong>Business:</strong> ${result.data.business}</p>
          <p><strong>Website:</strong> ${result.data.website || "Not provided"}</p>
          <p><strong>Services:</strong> ${result.data.services.join(", ")}</p>
          <p><strong>Budget:</strong> ${result.data.budget}</p>
          <p><strong>How they found us:</strong> ${result.data.source || "Not specified"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${result.data.message}</p>
        `,
      });
    } else {
      // Log to console in development
      console.log("📩 New contact form submission:", result.data);
    }

    return {
      success: true,
      message:
        "Thanks for reaching out! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
