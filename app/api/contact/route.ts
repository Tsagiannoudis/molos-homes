import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {  
  try {
    // Παίρνουμε τα δεδομένα από το σώμα του request (από τη φόρμα)
    const { name, surname, email, phone, message } = await request.json();

    // --- Βελτιωμένος Έλεγχος ---
    // 1. Έλεγχος για τις μεταβλητές περιβάλλοντος
    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;

    if (!apiKey || !emailTo) {
      console.error("Server Error: RESEND_API_KEY or EMAIL_TO is not configured.");
      return NextResponse.json({ message: 'Σφάλμα διακομιστή. Η παραμετροποίηση δεν είναι σωστή.' }, { status: 500 });
    }

    // 2. Έλεγχος για τα απαραίτητα πεδία της φόρμας
    if (!name || !surname || !email || !message) {
      return NextResponse.json({ message: 'Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία.' }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `Molos Homes <onboarding@resend.dev>`,
      to: [emailTo],
      replyTo: email,
      subject: `Νέο μήνυμα από τη φόρμα επικοινωνίας - ${name} ${surname}`,
      html: `
        <h1>Νέο Μήνυμα Επικοινωνίας</h1>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Επώνυμο:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone || 'Δεν δόθηκε'}</p>
        <hr />
        <h2>Μήνυμα:</h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ message: 'Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Το μήνυμά σας στάλθηκε με επιτυχία!' }, { status: 200 });

  } catch (e) {
    console.error("API Route General Error:", e);
    return NextResponse.json({ message: 'Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.' }, { status: 500 });
  }
}