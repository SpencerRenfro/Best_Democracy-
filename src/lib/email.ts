// src/lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT ?? 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = process.env.EMAIL_FROM ?? 'Best Democracy <noreply@bestdemocracy.org>';
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

// ── Helpers ──────────────────────────────────────────────────────────────

function baseTemplate(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Best Democracy</title>
  <style>
    body { margin:0; padding:0; background:#F5F0E8; font-family: Georgia, serif; color: #0D1B2A; }
    .wrapper { max-width:600px; margin:0 auto; }
    .header  { background:#0D1B2A; padding:32px 40px; text-align:center; }
    .header h1 { color:#C8972A; font-size:28px; margin:0; letter-spacing:2px; }
    .body    { background:#fff; padding:40px; }
    .footer  { background:#0D1B2A; padding:20px 40px; text-align:center; color:#8A9BB0; font-size:13px; }
    .btn     { display:inline-block; background:#1B4FE8; color:#fff; padding:14px 28px;
               text-decoration:none; border-radius:4px; font-size:16px; margin:20px 0; }
    p        { line-height:1.7; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header"><h1>BEST DEMOCRACY</h1></div>
    <div class="body">${content}</div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Best Democracy · <a href="${SITE}/unsubscribe" style="color:#8A9BB0;">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>`;
}

// ── Exported functions ────────────────────────────────────────────────────

export async function sendVerificationEmail(email: string, token: string) {
  const url = `${SITE}/auth/verify?token=${token}`;
  await transporter.sendMail({
    from: FROM,
    to:   email,
    subject: 'Verify your Best Democracy account',
    html: baseTemplate(`
      <h2>Welcome to Best Democracy!</h2>
      <p>Thank you for registering. Please verify your email address to activate your account.</p>
      <a href="${url}" class="btn">Verify Email</a>
      <p style="font-size:13px;color:#8A9BB0;">If you didn't create an account, you can ignore this email.</p>
    `),
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const url = `${SITE}/auth/reset-password?token=${token}`;
  await transporter.sendMail({
    from: FROM,
    to:   email,
    subject: 'Reset your Best Democracy password',
    html: baseTemplate(`
      <h2>Password Reset</h2>
      <p>We received a request to reset your password. Click the button below to set a new password.</p>
      <a href="${url}" class="btn">Reset Password</a>
      <p style="font-size:13px;color:#8A9BB0;">This link expires in 1 hour. If you didn't request this, please ignore.</p>
    `),
  });
}

export async function sendNewsletterConfirmation(email: string, token: string) {
  const url = `${SITE}/api/newsletter/confirm?token=${token}`;
  await transporter.sendMail({
    from: FROM,
    to:   email,
    subject: 'Confirm your Best Democracy newsletter subscription',
    html: baseTemplate(`
      <h2>One more step!</h2>
      <p>Please confirm your subscription to receive updates on election reform, events, and proportional representation news.</p>
      <a href="${url}" class="btn">Confirm Subscription</a>
    `),
  });
}

export async function sendEventReminder(
  email: string,
  userName: string,
  eventTitle: string,
  eventDate: string,
  eventUrl: string,
) {
  await transporter.sendMail({
    from: FROM,
    to:   email,
    subject: `Reminder: ${eventTitle} — Best Democracy`,
    html: baseTemplate(`
      <h2>Event Reminder</h2>
      <p>Hi ${userName},</p>
      <p>This is a reminder that <strong>${eventTitle}</strong> is coming up on <strong>${eventDate}</strong>.</p>
      <a href="${eventUrl}" class="btn">View Event Details</a>
    `),
  });
}

export async function sendWelcomeEmail(email: string, name: string) {
  await transporter.sendMail({
    from: FROM,
    to:   email,
    subject: 'Welcome to Best Democracy!',
    html: baseTemplate(`
      <h2>Welcome, ${name}!</h2>
      <p>Your Best Democracy account is now active. You can now:</p>
      <ul>
        <li>Participate in our member discussion forum</li>
        <li>RSVP to local and virtual events</li>
        <li>Receive our newsletter on election reform</li>
        <li>Connect with other democracy advocates</li>
      </ul>
      <a href="${SITE}/blog" class="btn">Visit the Forum</a>
      <p>Together we can bring Proportional Representation to the United States.</p>
      <p>— Jesse Kumin & the Best Democracy team</p>
    `),
  });
}

export async function sendContactConfirmation(
  email: string,
  name: string,
  subject: string,
) {
  await transporter.sendMail({
    from: FROM,
    to:   email,
    subject: `Re: ${subject} — Best Democracy`,
    html: baseTemplate(`
      <h2>Thanks for reaching out, ${name}!</h2>
      <p>We've received your message about "<strong>${subject}</strong>" and will get back to you soon.</p>
      <p>In the meantime, explore our resources on election reform and proportional representation.</p>
      <a href="${SITE}" class="btn">Visit bestdemocracy.org</a>
    `),
  });
}
