# Brigid Law

A professional law firm website built with Next.js, Tailwind CSS, and pnpm.

---

## Development

```bash
pnpm dev       # start dev server at http://localhost:3000
pnpm build     # production build
pnpm start     # run production build locally
```

---

## Contact Form Setup (Resend)

The contact form uses **Resend** to email submissions directly to the lawyer's inbox. When a client submits the form, the lawyer receives an email and can reply directly to the client — no dashboards or forwarding needed.

### Setup steps (takes ~5 minutes)

1. Go to [resend.com](https://resend.com) and create a free account
2. Go to **API Keys** and create a new key — copy it
3. Open `.env.local` and fill in both values:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=lawyer@example.com
   ```
4. **For production:** verify your domain in Resend (under **Domains**), then update the `from` address in `app/api/contact/route.ts`:
   ```ts
   from: "Brigid Law <noreply@brigidlaw.com>",
   ```
   Until your domain is verified you can test using the default `onboarding@resend.dev` sender.

### How it works

- Form submissions are handled by a server-side API route (`app/api/contact/route.ts`) — the API key is never exposed to the browser
- The email arrives in the lawyer's inbox with the client's email set as `Reply-To`, so hitting reply goes straight to the client
- Free plan: 3,000 emails/month, 100/day — more than sufficient for a law firm contact page

---

## Replacing Placeholder Content

| What | Where |
|---|---|
| Hero background image | `app/page.tsx` — replace the Unsplash URL in the `backgroundImage` style |
| Founder photo | `app/about/page.tsx` — replace the SVG placeholder with `<Image src="/founder.jpg" ... />` |
| Office/location photo | `app/contact/page.tsx` — replace the SVG placeholder with `<Image src="/office.jpg" ... />` |
| Contact details (address, phone, email) | `app/contact/page.tsx` and `components/Footer.tsx` |
| Founder name, bio, credentials | `app/about/page.tsx` |
| Service descriptions | `app/services/page.tsx` |

Place your images in the `/public` folder and reference them as `/filename.jpg`.

---

## Deploying to Vercel

Vercel is the simplest hosting option for Next.js — it is made by the same team. The free **Hobby** plan is sufficient for a small professional site.

### Steps

1. Push your code to a GitHub repository (private repo is fine on the free plan)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** and import your repository
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live at a `*.vercel.app` URL within ~1 minute.

### Custom domain

1. In Vercel, go to your project → **Settings** → **Domains**
2. Add your domain (e.g. `brigidlaw.com`)
3. Update your domain's DNS records as instructed by Vercel (usually just two records)
4. SSL/HTTPS is provisioned automatically — no extra steps

### Environment variables

Add the following to your Vercel project under **Settings → Environment Variables**:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_EMAIL` | The lawyer's email address |

These are already in `.env.local` for local development — Vercel needs them set separately for production.

### Cost

- **Vercel Hobby (free)** — sufficient for a low-traffic professional site. Includes HTTPS, CDN, and automatic deployments on every git push.
- **Vercel Pro (~$20/mo)** — needed if you expect high traffic, want password protection, or need team collaboration features.
