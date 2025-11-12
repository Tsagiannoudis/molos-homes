import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // --- Έλεγχος για τις μεταβλητές περιβάλλοντος ---
  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO;
  const emailFrom = process.env.EMAIL_FROM;

  if (!apiKey || !emailTo || !emailFrom) {
    console.error(
      "Server Error: Missing env vars",
      "RESEND_API_KEY:", !!apiKey,
      "EMAIL_TO:", !!emailTo,
      "EMAIL_FROM:", !!emailFrom
    );
    return NextResponse.json({ message: 'Server Error: mail is not configured.' }, { status: 500 });
  }

  try {
    // δεδομένα από το σώμα του request
    const { name, surname, email, phone, message } = await request.json();

    // έλεγχος required πεδία γίνεται απο τον client 
    // αλλά ένας επιπλέον έλεγχος εδώ είναι καλή πρακτική για ασφάλεια.
    if (!name || !surname || !email || !message) {
      return NextResponse.json({ message: 'Please fill in all the required fields.' }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Molos Homes <${emailFrom}>`,
      to: emailTo.split(',').map(e => e.trim()).filter(Boolean), // υποστηρίζει πολλούς παραλήπτες
      replyTo: email,
      subject: `Νέο μήνυμα από τη φόρμα επικοινωνίας - ${name} ${surname}`,
      html: `
        <h1>Νέο Μήνυμα Επικοινωνίας</h1>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Επώνυμο:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone || 'Δεν συμπληρώθηκε'}</p>
        <hr />
        <h2>Μήνυμα:</h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ message: 'Message failed to send. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (e) {
    console.error("API Route General Error:", e);
    return NextResponse.json({ message: 'Message failed to send. Please try again.' }, { status: 500 });
  }
}