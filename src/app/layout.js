import { Geist, Playfair_Display, Alex_Brush } from "next/font/google";
import "./globals.css";
import MotionManager from "@/components/layout/MotionManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Alice & Co. | Your Local Partner in Vietnam | Executive Consulting & Relocation",
  description:
    "From business market entry and trade sourcing to expat relocation, home finding, and everyday on-the-ground support, Alice & Co. is your trusted executive partner in Ho Chi Minh City, Vietnam.",
  keywords: [
    "Alice & Co",
    "Vietnam Market Entry",
    "Vietnam Sourcing Agent",
    "Ho Chi Minh City Relocation",
    "Local Partner Vietnam",
    "Vietnam Business Consultant",
  ],
  authors: [{ name: "Alice Nguyen" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the head script below adds motion classes to <html> before hydration
    <html
      lang="en"
      suppressHydrationWarning
      // Lets Next turn smooth scrolling off during route changes (new pages open at the top instantly)
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${playfair.variable} ${alexBrush.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Hide <main> until MotionManager has tagged it, so nothing flashes before animating.
            A timeout guarantees content always shows even if scripts fail. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('rv-js');setTimeout(function(){d.classList.add('rv-ready')},2500)})();",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a1128] text-zinc-100 selection:bg-[#d4af37] selection:text-[#0a1128]">
        <MotionManager />
        {children}
      </body>
    </html>
  );
}
