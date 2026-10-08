"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide motion, mounted once in the root layout:
//
// 1. Scroll reveal — every content block inside `main section` and the footer is tagged
//    automatically (no per-component markup) and animates in each time it enters the
//    viewport, scrolling down or up, on first load or later. Each section gets its own
//    theme (separate entrances for text, cards and photos). A block hides again once
//    fully off-screen so it can replay. Opt out with `data-no-reveal`.
//
// 2. Smooth anchor scrolling — links with a #hash (same page or another page) glide with
//    an eased animation to the best viewing position of the target and never leave the
//    #hash in the URL. A link to the current page without a hash glides back to the top.
// ─────────────────────────────────────────────────────────────────────────────

const SELECTOR =
  "h1,h2,h3,h4,p,li,article,figure,blockquote,form,details,iframe,img,a,button,span.uppercase,[data-reveal-item]";
const STAGGER_MS = 85;
const MAX_STAGGER = 8;
// A block reveals once it is this far into the viewport, so the entrance is clearly seen
const TRIGGER_PX = 60;

// Motion always runs, by design: Windows' "Animation effects" switch (often off) makes
// browsers report prefers-reduced-motion, which would otherwise silently disable it all.

// ── Smooth scrolling ────────────────────────────────────────────────────────
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
let activeScroll = 0;

function glideTo(y) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const to = Math.max(0, Math.min(y, max));
  const from = window.scrollY;
  const distance = to - from;
  if (Math.abs(distance) < 2) return;

  // Slow, velvety glide: 750–950ms depending on distance
  const duration = Math.min(950, Math.max(750, Math.abs(distance) * 0.45));
  const id = ++activeScroll;
  let start = null;
  const events = ["wheel", "touchmove", "keydown"];
  const stopListening = () => events.forEach((ev) => window.removeEventListener(ev, cancel));
  // The user taking over (wheel, swipe, keys) cancels the glide
  function cancel() {
    activeScroll = id + 1;
    stopListening();
  }
  events.forEach((ev) => window.addEventListener(ev, cancel, { passive: true }));

  const step = (now) => {
    if (id !== activeScroll) return;
    if (start === null) start = now;
    const t = Math.min(1, (now - start) / duration);
    // "instant" so the CSS `scroll-behavior: smooth` doesn't fight each frame
    window.scrollTo({ top: from + distance * easeInOutCubic(t), behavior: "instant" });
    if (t < 1) requestAnimationFrame(step);
    else stopListening();
  };
  requestAnimationFrame(step);
}

// Best viewing position: the section's content (not its top padding) sits just below the
// floating header; if it fits on screen it is centred in the space under the header.
function viewingPosition(el) {
  const header = window.innerWidth >= 1024 ? 96 : 80;
  const content = (el.matches("section") && el.querySelector(".container-x")) || el;
  const rect = content.getBoundingClientRect();
  const available = window.innerHeight - header;
  const gap = rect.height < available - 32 ? (available - rect.height) / 2 : 24;
  return window.scrollY + rect.top - header - gap;
}

function glideToId(id) {
  const el = document.getElementById(id);
  if (el) glideTo(viewingPosition(el));
  return Boolean(el);
}

// ── Reveal tagging ──────────────────────────────────────────────────────────
// Each section on a page gets the next theme: one entrance for text, another for cards /
// list items, another for photos — so consecutive sections never move the same way.
const THEMES = [
  { text: "fade-up", item: "rise", media: "media-zoom" },
  { text: "slide-left", item: "slide-right", media: "media-wipe-left" },
  { text: "blur-up", item: "zoom-in", media: "media-zoom" },
  { text: "fade-down", item: "tilt-up", media: "media-wipe-up" },
  { text: "slide-right", item: "flip-up", media: "media-wipe-right" },
  { text: "zoom-in", item: "rise", media: "media-zoom" },
  { text: "blur-up", item: "slide-left", media: "media-wipe-left" },
  { text: "fade-up", item: "swing", media: "media-wipe-up" },
];
const ITEM_TAGS = new Set(["LI", "ARTICLE", "FIGURE", "DETAILS", "FORM", "BLOCKQUOTE"]);
const MEDIA_TAGS = new Set(["IMG", "IFRAME"]);

// React marks hydrated DOM nodes with an internal fiber key. Touching a section's
// attributes before React has hydrated it causes a hydration mismatch, so wait for it.
const isHydrated = (node) => Object.keys(node).some((k) => k.startsWith("__reactFiber$"));

// Tags every hydrated section and hands all its reveal blocks to `observe`.
// Returns true once every section on the page has been processed.
function tagAll(observe) {
  let complete = true;
  document.querySelectorAll("main section, footer").forEach((section) => {
    if (!isHydrated(section)) {
      complete = false;
      return;
    }
    if (!section.dataset.revealTheme) {
      const index = Number(document.documentElement.dataset.rvCount || 0);
      document.documentElement.dataset.rvCount = String(index + 1);
      section.dataset.revealTheme = String(index % THEMES.length);
    }
    const theme = THEMES[Number(section.dataset.revealTheme)];

    section.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.dataset.reveal) return;
      if (el.closest('[aria-hidden="true"], [data-no-reveal], header')) return;
      // Animate the outermost block only (a card moves as one, not each line inside it)
      const taggedAncestor = el.parentElement?.closest("[data-reveal]");
      if (taggedAncestor && section.contains(taggedAncestor)) return;

      el.dataset.reveal = MEDIA_TAGS.has(el.tagName) ? theme.media : ITEM_TAGS.has(el.tagName) ? theme.item : theme.text;
      el.classList.add("rv-hidden");
    });
    // Observe every block (also ones tagged by an earlier mount whose observers are gone)
    section.querySelectorAll("[data-reveal]").forEach(observe);
  });
  return complete;
}

export default function MotionManager() {
  const pathname = usePathname();
  const router = useRouter();
  const observerRef = useRef(null);
  const pendingTarget = useRef(null);

  // Observers + DOM watcher, created once
  useLayoutEffect(() => {
    const root = document.documentElement;

    // Reveal: once a block is TRIGGER_PX inside the viewport (top or bottom edge)
    const revealer = new IntersectionObserver(
      (entries) => {
        // Blocks entering together cascade top-to-bottom, left-to-right
        entries
          .filter((e) => e.isIntersecting && !e.target.classList.contains("rv-in"))
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left,
          )
          .forEach((entry, i) => {
            const el = entry.target;
            el.style.setProperty("--rv-delay", `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`);
            el.classList.remove("rv-hidden");
            el.classList.add("rv-in");
          });
      },
      { rootMargin: `-${TRIGGER_PX}px 0px -${TRIGGER_PX}px 0px`, threshold: 0 },
    );

    // Reset: only when a block is completely off-screen, so it replays on the way back
    // without flickering while it sits near the viewport edge
    const resetter = new IntersectionObserver(
      (entries) => {
        entries
          // Judge by geometry, not visibility: a photo mid "curtain wipe" is fully clipped
          // and would otherwise count as off-screen and reset (flicker loop)
          .filter((e) => {
            const r = e.boundingClientRect;
            return !e.isIntersecting && (r.bottom <= 0 || r.top >= window.innerHeight);
          })
          .forEach((e) => {
            e.target.classList.remove("rv-in");
            e.target.classList.add("rv-hidden");
          });
      },
      { threshold: 0 },
    );

    const observed = new WeakSet();
    const observe = (el) => {
      if (observed.has(el)) return;
      observed.add(el);
      revealer.observe(el);
      resetter.observe(el);
    };
    observerRef.current = observe;

    // Sections hydrate after this layout component, so keep tagging until all are done;
    // <main> stays hidden meanwhile (head script) to avoid a flash before the animation
    let retry;
    const startedAt = performance.now();
    const pass = () => {
      const complete = tagAll(observe);
      if (complete || performance.now() - startedAt > 6000) root.classList.add("rv-ready");
      if (!complete && performance.now() - startedAt < 10000) retry = setTimeout(pass, 40);
    };
    pass();

    // Streamed / client-rendered content (e.g. Suspense on service pages, new pages)
    const mutations = new MutationObserver(() => tagAll(observe));
    mutations.observe(document.body, { childList: true, subtree: true });

    // At the very bottom of the page nothing can travel TRIGGER_PX further in, so reveal
    // whatever is left on screen (e.g. the footer's last line)
    let frame = 0;
    const revealAtBottom = () => {
      frame = 0;
      if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 2) return;
      document.querySelectorAll("[data-reveal].rv-hidden").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.style.setProperty("--rv-delay", "0ms");
          el.classList.remove("rv-hidden");
          el.classList.add("rv-in");
        }
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(revealAtBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(retry);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      mutations.disconnect();
      revealer.disconnect();
      resetter.disconnect();
    };
  }, []);

  // New page: tag its content before paint, then honour any pending / URL anchor
  useLayoutEffect(() => {
    document.documentElement.dataset.rvCount = "0"; // each page starts the effect cycle afresh
    if (observerRef.current) tagAll(observerRef.current);
  }, [pathname]);

  useEffect(() => {
    const target = pendingTarget.current || decodeURIComponent(window.location.hash.slice(1));
    pendingTarget.current = null;
    if (window.location.hash) {
      history.replaceState(history.state, "", window.location.pathname + window.location.search);
    }
    if (!target) return;

    // Wait for the target (it may stream in), then glide once the page has settled
    let tries = 0;
    let timer;
    const attempt = () => {
      if (document.getElementById(target)) timer = setTimeout(() => glideToId(target), 250);
      else if (tries++ < 40) timer = setTimeout(attempt, 75);
    };
    attempt();
    return () => clearTimeout(timer);
  }, [pathname]);

  // Intercept hash links site-wide (capture phase, before next/link handles the click)
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.("a[href]");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const samePage = url.pathname === window.location.pathname && url.search === window.location.search;
      const id = decodeURIComponent(url.hash.slice(1));

      if (id) {
        // next/link skips navigation when the event is defaultPrevented; other click
        // handlers (e.g. closing the mobile menu) still run
        e.preventDefault();
        if (samePage) glideToId(id);
        else {
          pendingTarget.current = id;
          router.push(url.pathname + url.search);
        }
      } else if (samePage && a.getAttribute("href") !== "#") {
        e.preventDefault();
        glideTo(0);
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
