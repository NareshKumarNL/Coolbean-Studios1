# Sargam Arts Academy — Website

A clean, soft-minimal Next.js website for the Sargam Arts Academy covering Music, Dance, and Chess.

## Pages Built (Phase 1)

- **`/`** — Home page: hero, category overview, achievements, about teaser, CTA
- **`/about`** — About Us: history timeline, vision, mission, founders
- **`/courses`** — Courses: interactive category tabs, course cards with details
- **`/contact`** — Contact: enquiry form with validation + contact info sidebar

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom palette: cream, gold, sage, charcoal)
- **Google Fonts** — Cormorant Garamond (headings) + DM Sans (body)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Customisation

### Academy name & contact details

Search for `Sargam Arts Academy` and replace with your real academy name across:
- `src/app/layout.tsx` (metadata)
- `src/components/Navbar.tsx` (logo text)
- `src/components/Footer.tsx` (logo, address, phone, email)
- `src/app/contact/page.tsx` (address, phone, email)

### Courses

Edit the `categories` array in `src/app/courses/page.tsx` to add, remove, or update courses and tutors.

### Achievements

Edit the `achievements` array in `src/app/page.tsx`.

### Founders

Edit the `founders` array in `src/app/about/page.tsx`.

### Colours

All custom colours are defined in `tailwind.config.ts` under `theme.extend.colors`.

---

## Next Steps (Phase 2+)

- [ ] Connect enquiry form to `POST /api/enquiries` backend
- [ ] Add Prisma + PostgreSQL
- [ ] Build student login + dashboard
- [ ] Build tutor dashboard
- [ ] Add notification system
- [ ] Integrate Razorpay payments

See `PROJECT_BLUEPRINT.md` for the full development roadmap.
