import { NextResponse } from "next/server";

async function sendEmail(payload: { from: string; to: string; subject: string; html: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
  return res.json();
}

export async function POST(req: Request) {
  const { email, fullName, eventDate, eventTime, numberOfGuests, reservationType, reservationComment, reservationComment2 } = await req.json();

  const fromEmail = process.env.RESEND_FROM_EMAIL!;
  const isConfirmed = reservationType === "CONFIRMÉE";
  const statusLabel = isConfirmed ? "✅ Confirmée" : "❌ Refusée";

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="color:#002E6D;margin-top:0;">FloridaBlanca — Réservation ${statusLabel}</h2>
      <p>Bonjour <strong>${fullName}</strong>,</p>
      <p>${reservationComment}</p>
      ${reservationComment2 ? `<p>${reservationComment2}</p>` : ""}
      <table style="width:100%;border-collapse:collapse;margin-top:20px;">
        <tr><td style="padding:6px 0;color:#6b7280;width:140px;">📅 Date</td><td style="padding:6px 0;">${eventDate}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">🕐 Heure</td><td style="padding:6px 0;">${eventTime}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">👥 Couverts</td><td style="padding:6px 0;">${numberOfGuests}</td></tr>
      </table>
      <p style="margin-top:32px;color:#6b7280;font-size:13px;">FloridaBlanca · 22 rue Trivalle, Carcassonne · 04 30 34 58 55</p>
    </div>
  `;

  try {
    await sendEmail({
      from: `FloridaBlanca <${fromEmail}>`,
      to: email,
      subject: `FloridaBlanca — Votre réservation est ${reservationType}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
