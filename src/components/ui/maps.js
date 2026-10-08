// Google Maps embed URL: uses the official Maps Embed API when NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
// is set, otherwise falls back to the keyless public embed.
export function mapsEmbedSrc(query, zoom = 12) {
  const q = encodeURIComponent(query);
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return key
    ? `https://www.google.com/maps/embed/v1/place?key=${key}&q=${q}&zoom=${zoom}`
    : `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;
}
