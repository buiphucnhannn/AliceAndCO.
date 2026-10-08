import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { footerData } from "@/data/content";
import { mapsEmbedSrc } from "@/components/ui/maps";

const footerMapSrc = mapsEmbedSrc(footerData.contacts.mapsQuery);

function Icon({ name, className = "w-4 h-4" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.1-7-11.5a7 7 0 0114 0C19 14.9 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-3.88V9.75z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" strokeWidth={2.4} />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
        </svg>
      );
    default:
      return null;
  }
}

const socialIcon = { linkedin: "linkedin", instagram: "instagram", email: "mail" };

export default function Footer() {
  const { contacts } = footerData;

  return (
    <footer className="bg-[#050b18] text-slate-300 border-t border-[#d4af37]/20 pt-20 pb-12">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <BrandLogo size="md" light={true} className="mb-5" />
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm mt-3 mb-6">
              {footerData.blurb}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-400">
              {footerData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-9 h-9 rounded-full border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#050b18] hover:border-[#d4af37] flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon name={socialIcon[social.icon]} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fae49d] mb-5">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1 text-xs sm:text-[13px]">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-8 justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fae49d] mb-5">
                Contact
              </h4>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-400 font-light">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center shrink-0">
                    <Icon name="pin" />
                  </span>
                  <span>{contacts.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center shrink-0">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <a
                      href="https://wa.me/84334095326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {contacts.phone}
                    </a>
                    <span className="block text-[11px] text-slate-500">{contacts.channels}</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center shrink-0">
                    <Icon name="mail" />
                  </span>
                  <a
                    href={`mailto:${contacts.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {contacts.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Live Google Map */}
            <div className="shrink-0 w-full sm:w-56">
              <div className="rounded-xl overflow-hidden border border-[#d4af37]/30 bg-slate-900 shadow-lg">
                <iframe
                  title={`Map of ${contacts.mapsQuery}`}
                  src={footerMapSrc}
                  className="block w-full h-36 border-0 grayscale-[35%] contrast-[1.05] hover:grayscale-0 transition-[filter] duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={contacts.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[11px] text-slate-400 px-3 py-2 hover:text-[#fae49d] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <Icon name="external" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footerData.copyright}</p>
          <div className="flex items-center space-x-6">
            {footerData.legalLinks.map((legal) => (
              <a
                key={legal.label}
                href={legal.href}
                className="hover:text-slate-400 transition-colors"
              >
                {legal.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
