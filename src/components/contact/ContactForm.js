"use client";

import { useState } from "react";
import { contactData, siteConfig } from "@/data/content";
import LineIcon from "@/components/ui/LineIcon";

const field =
  "w-full rounded-xl bg-white/80 border border-[#d4af37]/25 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 shadow-[0_2px_10px_rgba(120,95,40,0.04)] outline-none transition-all focus:border-[#d4af37] focus:bg-white focus:ring-4 focus:ring-[#d4af37]/15";

// No mail backend yet: submitting opens the visitor's email app with a pre-filled message
// to Alice. Swap handleSubmit for a POST to a route handler / form service when one exists.
export default function ContactForm() {
  const { form } = contactData;
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const subject = `Free consultation request — ${data.get("interest")}`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Interested in: ${data.get("interest")}`,
      "",
      data.get("message") || "",
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input name="name" required autoComplete="name" placeholder="Full Name *" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email *" className={field} />
        </label>
      </div>

      <label className="block relative">
        <span className="sr-only">What are you interested in?</span>
        <select name="interest" required defaultValue="" className={`${field} appearance-none pr-10 invalid:text-slate-400`}>
          <option value="" disabled>
            What are you interested in? *
          </option>
          {form.interests.map((opt) => (
            <option key={opt} value={opt} className="text-slate-800">
              {opt}
            </option>
          ))}
        </select>
        <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b8860b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>

      <label className="block">
        <span className="sr-only">Message</span>
        <textarea name="message" rows={5} placeholder="Tell me more about your plans or questions..." className={`${field} resize-y min-h-[130px]`} />
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0a1128] bg-gradient-to-r from-[#fae49d] via-[#d4af37] to-[#ba9324] hover:from-[#fff0b8] hover:to-[#dfaf35] shadow-[0_6px_20px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
        >
          <span>{form.submitLabel}</span>
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        {sent && (
          <p role="status" className="text-xs text-slate-600">
            Your email app should open with the message ready — just hit send.
          </p>
        )}
      </div>

      <p className="flex items-start gap-2 text-xs text-slate-500 pt-1">
        <LineIcon name="lock" className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#b8860b]" strokeWidth={1.8} />
        {form.privacyNote}
      </p>
    </form>
  );
}
