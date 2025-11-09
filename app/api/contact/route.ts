import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Η διεύθυνση email στην οποία θα στέλνονται τα μηνύματα
const emailTo = process.env.EMAIL_TO;
const emailFrom = process.env.EMAIL_FROM || 'Molos Homes <onboarding@resend.dev>';

export async function POST(request: Request) {
  // Έλεγχος ασφαλείας: Βεβαιωνόμαστε ότι οι μεταβλητές υπάρχουν
  if (!process.env.RESEND_API_KEY || !emailTo) {
    console.error("Resend API Key or Email To is not configured.");
    return NextResponse.json({ message: 'Σφάλμα διακομιστή. Παρακαλώ δοκιμάστε ξανά αργότερα.' }, { status: 500 });
  }

  // Δημιουργούμε ένα instance του Resend client μέσα στο handler
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Παίρνουμε τα δεδομένα από το σώμα του request (από τη φόρμα)
    const { name, surname, email, phone, message } = await request.json();

   
    const { data, error } = await resend.emails.send({
      from: emailFrom,
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
      console.error("Resend error:", error);
      return NextResponse.json({ message: 'Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Το μήνυμά σας στάλθηκε με επιτυχία!' }, { status: 200 });

  } catch (e) {
    console.error("API route error:", e);
    return NextResponse.json({ message: 'Η αποστολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.' }, { status: 500 });
  }
}