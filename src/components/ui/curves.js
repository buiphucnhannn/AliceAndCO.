// Smooth, symmetric curved section edges cut with CSS masks (same curve as the home page).
// A masked edge is transparent, so the neighbouring section — pulled underneath with a
// negative margin — shows through instead of a flat colour band.
//
// Usage: add `curveVars` to the section's className and spread `curveMask({ top, bottom })`
// into its style. Pull the section that sits *below* a masked bottom edge up with
// `curvePullUp`, and give the masked section a higher z-index than that neighbour.

export const curveVars = "[--curve-h:28px] sm:[--curve-h:44px] lg:[--curve-h:56px]";
export const curvePullUp = "-mt-7 sm:-mt-11 lg:-mt-14";

const svg = (path) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60' preserveAspectRatio='none'%3E%3Cpath d='${path}'/%3E%3C/svg%3E")`;

// Visible area below a curve that dips in the middle (light section above bulges down)
const TOP = svg("M0,8 Q720,56 1440,8 V60 H0 Z");
// Visible area above a curve that dips in the middle (this section bulges down)
const BOTTOM = svg("M0,0 H1440 V8 Q720,56 0,8 Z");

export function curveMask({ top = false, bottom = false } = {}) {
  const images = [];
  const sizes = [];
  const positions = [];
  const cut = (top ? 1 : 0) + (bottom ? 1 : 0);

  if (top) {
    images.push(TOP);
    sizes.push("100% var(--curve-h)");
    positions.push("top");
  }
  images.push("linear-gradient(#000, #000)");
  sizes.push(`100% calc(100% - ${cut} * var(--curve-h) + ${cut}px)`);
  positions.push(top && bottom ? "center" : top ? "bottom" : "top");
  if (bottom) {
    images.push(BOTTOM);
    sizes.push("100% var(--curve-h)");
    positions.push("bottom");
  }

  const image = images.join(", ");
  const size = sizes.join(", ");
  const position = positions.join(", ");
  return {
    WebkitMaskImage: image,
    maskImage: image,
    WebkitMaskSize: size,
    maskSize: size,
    WebkitMaskPosition: position,
    maskPosition: position,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
}

// Eased (smootherstep) opacity ramp: a plain linear mask leaves a visible "edge" where the
// photo starts and ends; easing both ends makes the dissolve imperceptible.
const STEPS = 10;
const ease = (t) => t * t * t * (t * (t * 6 - 15) + 10);

function ramp(from, to) {
  const stops = [];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const a = ease(t).toFixed(3);
    stops.push(`rgba(0,0,0,${a}) ${(from + (to - from) * t).toFixed(2)}%`);
  }
  return stops;
}

function axis(direction, start, end) {
  const stops = [
    ...(start > 0 ? ramp(0, start) : ["#000 0%"]),
    ...(end > 0 ? ramp(100, 100 - end).reverse() : ["#000 100%"]),
  ];
  return `linear-gradient(to ${direction}, ${stops.join(", ")})`;
}

// For photos anchored to the 1920px frame (.frame-left / .frame-right). Up to 1920px the
// outer edge meets the window edge, so only `base` applies; on wider screens / zoomed out
// the outer edge sits inside the page, so `.frame-mask` switches to a mask that also
// dissolves that edge. Use with className "frame-mask".
export function frameFeather(base, outer) {
  return {
    "--mask-base": feather(base).maskImage,
    "--mask-wide": feather({ ...base, ...outer }).maskImage,
  };
}

// Soft feathered edges for photos that should dissolve into the background.
// Values are the % of the box each edge takes to fade in.
export function feather({ left = 0, right = 0, top = 0, bottom = 0 } = {}) {
  const image = `${axis("right", left, right)}, ${axis("bottom", top, bottom)}`;
  return {
    WebkitMaskImage: image,
    maskImage: image,
    WebkitMaskComposite: "source-in",
    maskComposite: "intersect",
  };
}
