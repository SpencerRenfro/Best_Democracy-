# Best Democracy — Next.js Website

A full-featured Next.js 14 website for [bestdemocracy.org](https://bestdemocracy.org), built with:

- **Next.js 14** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS** (custom design system)
- **Prisma ORM** + **PostgreSQL**
- **NextAuth v5** (credentials + OAuth ready)
- **Nodemailer** (transactional email)
- **WCAG 2.1 AA** accessibility compliance

---

## Quick Start

### 1. Clone & install

```bash
git clone <your-repo>
cd best-democracy
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` with your values:
- `DATABASE_URL` — PostgreSQL connection string
- `NEXTAUTH_SECRET` — generate with `openssl rand -base64 32`
- `SMTP_*` — your email provider credentials

### 3. Set up the database

```bash
# Push schema to your database
npm run db:push

# Generate Prisma client
npm run db:generate

# Seed with initial data (admin user + sample content)
npm run db:seed
```

> **Default admin credentials:**
> - Email: `jesse@bestdemocracy.org`
> - Password: `changeme123!`
> - **Change this immediately after first login!**

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout (nav, footer, auth)
│   ├── globals.css           # Global styles + design tokens
│   │
│   ├── about/                # About Jesse Kumin
│   ├── abolish-senate/       # Abolish the Senate
│   ├── at-large-elections/   # At-Large Elections problem
│   ├── best-democracy-index/ # Best Democracy Index
│   ├── blog/                 # Discussion forum
│   │   ├── page.tsx          # Forum listing
│   │   ├── new/              # Create new post (auth required)
│   │   └── [slug]/           # Post detail + comments
│   ├── court-cases/          # Notable court cases
│   ├── democratize-supreme-court/
│   ├── direct-democracy/
│   ├── electoral-college/
│   ├── events/               # Events listing + RSVP
│   ├── home-rule/
│   ├── hybrid-proportional-representation/
│   ├── identifying-issues/
│   ├── mixed-member-proportional/
│   ├── party-list/
│   ├── single-transferable-vote/
│   ├── slavery-and-us-elections/
│   │
│   ├── auth/                 # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   │
│   ├── contact/              # Contact form
│   ├── privacy/              # Privacy policy
│   ├── accessibility/        # Accessibility statement
│   │
│   └── api/                  # API routes
│       ├── auth/             # NextAuth + registration
│       ├── contact/          # Contact form
│       ├── newsletter/       # Subscribe + confirm
│       └── posts/            # Blog posts + comments
│
├── components/
│   ├── layout/               # Navbar, Footer, AuthProvider
│   ├── sections/             # PageHero, NewsletterForm
│   └── ui/                   # Toaster
│
└── lib/
    ├── auth.ts               # NextAuth configuration
    ├── prisma.ts             # Prisma client singleton
    ├── email.ts              # Nodemailer email templates
    └── utils.ts              # cn(), slugify(), formatDate()
```

---

## Database Schema

The Prisma schema (`prisma/schema.prisma`) includes:

| Model | Purpose |
|-------|---------|
| `User` | Members with roles: MEMBER, MODERATOR, ADMIN |
| `Account` / `Session` | NextAuth OAuth support |
| `Post` | Blog articles, news, and forum discussions |
| `Comment` | Moderated post comments |
| `Event` | Events with RSVP support |
| `EventRSVP` | Attendance tracking |
| `NewsletterSubscription` | Double opt-in newsletter list |
| `ContactNote` | CRM contact form submissions |

---

## Email Templates

Transactional emails are sent via Nodemailer (`src/lib/email.ts`):

- **Welcome email** — on registration
- **Email verification** — confirm account
- **Password reset** — forgot password flow
- **Newsletter confirmation** — double opt-in
- **Event reminder** — for RSVPd events
- **Contact confirmation** — when contact form submitted

### Recommended email providers (production):

| Provider | Free tier | Notes |
|----------|-----------|-------|
| SendGrid | 100/day | Most popular |
| Mailgun | 1000/month | Developer-friendly |
| AWS SES | 62K/month (from EC2) | Cheapest at scale |
| Resend | 3000/month | Modern API |

Update `SMTP_*` vars in `.env` accordingly.

---

## Accessibility (WCAG 2.1 AA)

Key accessibility features implemented:

- ✅ Skip-to-content link
- ✅ Semantic HTML5 with ARIA landmarks
- ✅ All form inputs have associated `<label>` elements
- ✅ Error messages use `role="alert"`
- ✅ Color contrast ≥ 4.5:1 for normal text
- ✅ Visible focus indicators on all interactive elements
- ✅ Keyboard-navigable dropdowns
- ✅ `<time>` elements with `dateTime` attributes
- ✅ Images use alt text or `aria-hidden`
- ✅ `aria-live` regions for dynamic updates
- ✅ `aria-expanded` / `aria-haspopup` on menus
- ✅ `lang="en"` on `<html>`
- ✅ Security headers via `next.config.js`

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Docker

```bash
# Build
docker build -t best-democracy .

# Run
docker run -p 3000:3000 --env-file .env best-democracy
```

### Self-hosted (Ubuntu)

```bash
npm run build
npm start
# Use nginx as reverse proxy, certbot for SSL
```

---

## Adding Content

### New pages
Add a `page.tsx` file in `src/app/your-page/`. Use the `<PageHero>` component and wrap content in `<article className="max-w-4xl mx-auto px-6 py-16 prose-bd">`.

### Blog posts
Admin users can publish blog posts via the forum (they publish immediately). Member posts require moderation.

### Events
Add events directly via Prisma Studio (`npm run db:studio`) or build an admin panel.

---

## CRM / Contact Management

Contact form submissions are stored in the `ContactNote` model with statuses: `NEW`, `IN_PROGRESS`, `RESOLVED`, `ARCHIVED`. View and manage via Prisma Studio or connect a CRM like Airtable / Notion.

---

## License

© 2024 Best Democracy / Jesse Kumin. All rights reserved.
