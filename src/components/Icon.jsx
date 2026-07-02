/**
 * Icon.jsx
 * ---------------------------------------------------------------------------
 * Minimal inline SVG icon set (no external icon library dependency).
 * Usage: <Ico name="MapPin" size={20} className="text-green-700" />
 */

const RawIcon = ({ d, size = 20, className = "", fill = "none", stroke = "currentColor", strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const icons = {
  MapPin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 110 6 3 3 0 010-6z",
  Phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.98 1.18 2 2 0 012.96.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.98 15l-.06 1.92z",
  Mail: ["M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", "M22 6l-10 7L2 6"],
  Instagram: ["M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z", "M17.5 6.5h.01"],
  Facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  ChevronDown: "M6 9l6 6 6-6",
  ChevronLeft: "M15 18l-6-6 6-6",
  ChevronRight: "M9 18l6-6-6-6",
  Menu: ["M3 12h18", "M3 6h18", "M3 18h18"],
  X: ["M18 6L6 18", "M6 6l12 12"],
  MessageCircle: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  Star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  TreePine: ["M10 10v.2A3 3 0 018.9 16H5l3-3H6l4-4", "M14 10v.2a3 3 0 001.1 5.8H19l-3-3h2l-4-4", "M12 15l1 5H11l1-5"],
  Camera: ["M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z", "M12 17a4 4 0 100-8 4 4 0 000 8z"],
  Ticket: ["M15 5v2M15 11v2M15 17v2M5 5h14a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 000-4V7a2 2 0 012-2z"],
  HelpCircle: ["M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z", "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3", "M12 17h.01"],
  CheckCircle: ["M22 11.08V12a10 10 0 11-5.93-9.14", "M22 4L12 14.01l-3-3"],
  Clock: ["M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z", "M12 6v6l4 2"],
  ArrowRight: ["M5 12h14", "M12 5l7 7-7 7"],
  Sparkles: ["M12 3l1.09 2.26L16 6l-2.91.74L12 9l-1.09-2.26L8 6l2.91-.74L12 3z", "M19 9l.5 1.5 1.5.5-1.5.5L19 13l-.5-1.5-1.5-.5 1.5-.5L19 9z", "M5 15l.5 1.5 1.5.5-1.5.5L5 19l-.5-1.5-1.5-.5 1.5-.5L5 15z"],
  Users: ["M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", "M23 21v-2a4 4 0 00-3-3.87", "M9 11a4 4 0 100-8 4 4 0 000 8z", "M16 3.13a4 4 0 010 7.75"],
  Heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
  Award: ["M12 15a7 7 0 100-14 7 7 0 000 14z", "M8.21 13.89L7 23l5-3 5 3-1.21-9.12"],
  Quote: ["M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z", "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"],
  PlayCircle: ["M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z", "M10 8l6 4-6 4V8z"],
};

export default function Ico({ name, size = 20, className = "", fill }) {
  const d = icons[name];
  if (!d) return null;
  if (name === "Instagram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    );
  }
  return <RawIcon d={d} size={size} className={className} fill={fill || "none"} />;
}
