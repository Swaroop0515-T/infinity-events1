"use client";

type LightboxProps = {
  category: string;
  images: string[];
  index: number;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export default function Lightbox({
  category,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button className="lightbox-close" onClick={onClose}>
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={`/gallery/${category}/${images[index]}`}
          alt={`${category} event by Infinity Events`}
        />

        {/* CAPTION */}
        <p style={{ textAlign: "center", marginTop: 10 }}>
          {category.replace(/-/g, " ")} — {index + 1} / {images.length}
        </p>

        {/* NAVIGATION */}
        {onPrev && (
          <button
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onPrev}
          >
            ◀
          </button>
        )}

        {onNext && (
          <button
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onNext}
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
}
