import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, product, quantity } = await req.json();

    const productLabel =
      product === "standard"
        ? "VEK Standard (RSD 6.500)"
        : "VEK Premium (RSD 9.500)";

    const { error } = await resend.emails.send({
      from: "Destilerija VEK <onboarding@resend.dev>",
      to: "destilerijavek@gmail.com",
      subject: `Nova porudžbina - ${name}`,
      html: `
        <h2>Nova porudžbina sa sajta</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr><td style="padding: 8px; font-weight: bold;">Ime:</td><td style="padding: 8px;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Telefon:</td><td style="padding: 8px;">${phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Adresa:</td><td style="padding: 8px;">${address}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Proizvod:</td><td style="padding: 8px;">${productLabel}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Količina:</td><td style="padding: 8px;">${quantity}</td></tr>
        </table>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Greška pri slanju poruke." },
      { status: 500 }
    );
  }
}
