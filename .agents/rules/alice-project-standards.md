# ALICE & CO. — PROJECT EXECUTION RULES & GUIDELINES

Every assistant, agent, and developer working on this project MUST strictly follow these rules to ensure 100% fidelity to client requirements and branding standards.

---

## 1. SOURCE OF TRUTH
- All implementation must strictly align with [PROJECT_REQUIREMENTS.md](file:///d:/Career/Alice/Alice&CO/PROJECT_REQUIREMENTS.md).
- Do not invent services, alter contact information, or change the approved copywriting tone without explicit user instruction.

---

## 2. LANGUAGE MANDATE
- **100% English for all public UI**: All headings, body copy, tooltips, CTAs, forms, and footer items must be in professional, polished English.
- Target audience is international (foreign investors, global sourcing executives, expats, C-suite travelers).

---

## 3. DESIGN & AESTHETIC STANDARDS
- **Theme:** *Executive Luxury Consulting* — High-end, discreet, authoritative, and world-class.
- **Palette:**
  - **Deep Navy Blue:** Dark, rich navy foundations (`#0a1128`, `#0b132b`, `#0f172a`, `#1e293b`).
  - **Royal Gold:** Accents, badges, borders, CTA highlights (`#d4af37`, `#e5c05b`, `#f59e0b`, metallic gradients).
  - **Crisp Neutrals:** White, slate zinc for pristine readability.
- **Imagery:** High-definition Saigon / Ho Chi Minh City skyline, elegant architectural backdrops, sophisticated corporate imagery. Avoid generic or low-quality stock art.
- **Micro-interactions:** Smooth hover effects, subtle golden glows, polished transitions.

---

## 4. BRAND & CONTACT ACCURACY
- **Brand Name:** `ALICE & CO.`
- **Tagline:** `Your Local Partner in Vietnam`
- **Representative:** `Nguyen Thi Thao Uyen (Alice Nguyen)`
- **Phone / WhatsApp / Viber / Zalo:** `+84 334 095 326`
- **Official Email:** `alice.nguyen.lawbiz@gmail.com`
- **Location:** `Ho Chi Minh City, Vietnam`
- **Google Maps:** `https://maps.app.goo.gl/VLi6LK91YNqnUdEs6`
- **Google Drive Assets:** `https://drive.google.com/drive/folders/1TJ4mCRzhRtOoEZO81rRpxxqSk8cOySkS`

---

## 5. MANDATORY 10-SECTION FLOW
The single-page landing flow must follow this exact sequence:
1. **01 — Hero:** Punchy value proposition + Consultation CTA + Fast contact pill + HCMC skyline.
2. **02 — Pain Points:** Empathizing with international challenges in Vietnam ("Being in Vietnam shouldn't mean figuring everything out alone").
3. **03 — Services (3 Pillars):**
   - Pillar A: Business in Vietnam (Market Entry, Sourcing, Representation, Business Travel)
   - Pillar B: Relocation (6-step process + Pre-arrival rental inspection special offer)
   - Pillar C: Local Address / Mail (Mail, Packages, Storage, Forwarding, Presence)
4. **04 — Why Alice & Co. (5 Pillars):** Legal Background, Business Mindset, International Experience, Local Network, Direct Communication.
5. **05 — The Big Differentiator:** High-impact comparison: "Instead of hiring 7 fragmented parties → You have ONE Trusted Local Partner."
6. **06 — Who Is This For?:** 4 distinct cards (Business, Relocation, Visiting Vietnam, Local Support).
7. **07 — Low-Friction Offer:** FREE 30-Minute Initial Consultation.
8. **08 — Risk Reversal:** "Not Sure What You Need Yet? That's okay..."
9. **09 — Final CTA:** Twilight Saigon skyline background + Primary Consultation button + Instant chat buttons (WhatsApp/Viber/Zalo/Email).
10. **10 — Footer:** Full branding, services overview, contacts, legal copyright.

---

## 6. CODE & ARCHITECTURE STANDARDS
- **Directory Layout:**
  - Source files reside in `src/` (`src/app/`, `src/components/`, `src/data/`).
  - Path alias `@/*` points to `./src/*`.
  - Static public assets reside in root `/public/`.
- **Data Centralization:**
  - All textual copy, feature lists, pricing, testimonials, and navigation items must be exported from `src/data/content.js`.
  - Components must remain clean, modular, and presentational, consuming structured data.
- **Performance & Responsiveness:**
  - Mobile-first, fully tested across viewport widths (320px to 4K).
  - Server Components by default; `"use client"` only when interactive state is required (modals, accordions, mobile menu toggles).
