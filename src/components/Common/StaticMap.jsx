/**
 * StaticMap — decorative SVG mimicking a map, used as a lightweight
 * preview under the "Buka di Maps" links (Footer & About page). It's not
 * an actual Google Maps embed, so no API key is required.
 */
export default function StaticMap() {
  return (
    <svg viewBox="0 0 800 260" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="260" fill="#EAF2E3" />
      <rect x="0" y="0" width="180" height="110" fill="#E3EEDB" />
      <rect x="550" y="140" width="250" height="120" fill="#E3EEDB" />
      <rect x="430" y="150" width="110" height="100" fill="#C8E6B8" />
      <path d="M250,0 C270,60 230,120 260,180 C280,220 250,240 260,260" stroke="#A8D8EA" strokeWidth="5" fill="none" />
      <g stroke="#FFFFFF" strokeWidth="10" fill="none">
        <path d="M0,60 H800" /><path d="M0,150 H800" /><path d="M0,210 H800" />
        <path d="M130,0 V260" /><path d="M300,0 V260" /><path d="M460,0 V260" /><path d="M620,0 V260" />
      </g>
      <g stroke="#F4D9A0" strokeWidth="6" fill="none"><path d="M0,105 H800" /><path d="M380,0 V260" /></g>
      {[[120, 90], [210, 70], [340, 40], [600, 80], [660, 70], [700, 130], [610, 180], [150, 210], [230, 190], [480, 230]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="#FF8A65" stroke="#fff" strokeWidth="2" />
      ))}
      <g transform="translate(430,140)">
        <ellipse cx="0" cy="34" rx="14" ry="5" fill="#00000022" />
        <path d="M0,-30 C16,-30 28,-18 28,-3 C28,18 0,34 0,34 C0,34 -28,18 -28,-3 C-28,-18 -16,-30 0,-30 Z" fill="#EA4335" stroke="#B0271E" strokeWidth="1.5" />
        <circle cx="0" cy="-3" r="9" fill="#ffffff" />
      </g>
      <text x="466" y="148" fontSize="17" fontWeight="700" fill="#1B5E20" fontFamily="Poppins,sans-serif">Taman Wisata Jlengut</text>
      <text x="466" y="166" fontSize="11" fill="#4E5D52" fontFamily="Poppins,sans-serif">Karangduren, Kebonarum, Klaten</text>
      <text x="14" y="248" fontSize="13" fontWeight="600" fill="#5f6368" fontFamily="Arial,sans-serif">Google Maps</text>
    </svg>
  );
}
