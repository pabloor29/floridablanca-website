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
  const { fullName, email, numberOfGuests, eventDate, eventTime, specialRequests } = await req.json();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.floridablanca.fr";
  const restaurantEmail = process.env.RESTAURANT_CONTACT_EMAIL!;
  const fromEmail = process.env.RESEND_FROM_EMAIL!;

  const validationUrl = `${siteUrl}/reservation-autoreply?date=${encodeURIComponent(eventDate)}&heure=${encodeURIComponent(eventTime)}&invites=${encodeURIComponent(numberOfGuests)}&nom=${encodeURIComponent(fullName)}&commentaire=${encodeURIComponent(specialRequests || "")}&email=${encodeURIComponent(email)}`;

  const notifHtml = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="color:#002E6D;margin-top:0;">🍽️ Nouvelle demande de réservation</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#6b7280;width:160px;">👤 Nom</td><td style="padding:8px 0;font-weight:600;">${fullName}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">✉️ Email</td><td style="padding:8px 0;">${email}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">📅 Date</td><td style="padding:8px 0;">${eventDate}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">🕐 Heure</td><td style="padding:8px 0;">${eventTime}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">👥 Couverts</td><td style="padding:8px 0;">${numberOfGuests}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">💬 Commentaire</td><td style="padding:8px 0;">${specialRequests || "Aucun"}</td></tr>
      </table>
      <div style="margin-top:28px;text-align:center;">
        <a href="${validationUrl}" style="display:inline-block;background:#002E6D;color:#fff;text-decoration:none;padding:14px 32px;border-radius:6px;font-weight:600;font-size:15px;">
          Confirmer ou refuser la réservation
        </a>
      </div>
    </div>
  `;

  const ackHtml = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="color:#002E6D;margin-top:0;">FloridaBlanca — Demande reçue ✅</h2>
      <p>Bonjour <strong>${fullName}</strong>,</p>
      <p>Nous avons bien reçu votre demande de réservation pour le <strong>${eventDate} à ${eventTime}</strong> (${numberOfGuests} couvert${Number(numberOfGuests) > 1 ? "s" : ""}).</p>
      <p>Votre réservation sera confirmée dans les plus brefs délais par email. Merci pour votre patience !</p>
      <p style="background:#fef9c3;border:1px solid #fde047;padding:12px 16px;border-radius:6px;font-size:14px;">
        ⚠️ <strong>Pensez à vérifier vos courriers indésirables (spam)</strong> si vous ne recevez pas notre email de confirmation.
      </p>
      <p style="margin-top:32px;color:#6b7280;font-size:13px;">FloridaBlanca · 22 rue Trivalle, Carcassonne · 04 30 34 58 55</p>
    </div>
  `;

  try {
    await Promise.all([
      sendEmail({
        from: `FloridaBlanca Réservations <${fromEmail}>`,
        to: restaurantEmail,
        subject: `Demande de réservation — ${fullName} le ${eventDate} à ${eventTime}`,
        html: notifHtml,
      }),
      sendEmail({
        from: `FloridaBlanca <${fromEmail}>`,
        to: email,
        subject: "FloridaBlanca — Nous avons reçu votre demande de réservation",
        html: ackHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
