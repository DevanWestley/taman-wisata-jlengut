import { useState } from "react";

/**
 * Pill — the visual "media block" used for every card, hero and thumbnail
 * in the app. It renders a photo (from /public/images) with a brand
 * gradient behind/over it, so:
 *   - while a real photo is loading it never flashes blank/white
 *   - if an image is ever missing (broken dummy file, 404, etc.) it
 *     gracefully falls back to a pure gradient block instead of a broken
 *     image icon
 *
 * Usage: <Pill gradient={a.gradient} image={a.image} className="w-full h-full">
 *          <Ico name="TreePine" size={48} className="text-white/50" />
 *        </Pill>
 */
export default function Pill({ gradient, image, children, className = "", imgClassName = "" }) {
  const [errored, setErrored] = useState(false);
  const showImage = image && !errored;

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`} style={{ background: gradient }}>
      {showImage && (
        <img
          src={image}
          alt=""
          onError={() => setErrored(true)}
          className={`absolute inset-0 w-full h-full object-cover ${imgClassName}`}
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white, transparent 50%)" }} />
      {children}
    </div>
  );
}
