"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

type GallerySection = {
  category: string;
  images: string[];
};

type LightboxState = {
  category: string;
  images: string[];
  index: number;
} | null;

export default function GalleryClient({
  gallery = [], // ✅ DEFAULT VALUE (CRITICAL)
}: {
  gallery?: GallerySection[];
}) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  // ✅ SAFETY CHECK
  if (!Array.isArray(gallery) || gallery.length === 0) {
    return (
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
          <p>No gallery images available.</p>
        </div>
      </section>
    );
  }

  const openLightbox = (
    category: string,
    images: string[],
    index: number
  ) => {
    setLightbox({ category, images, index });
  };

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>

        {gallery.map((section) => (
          <div key={section.category} className="gallery-section">
            <h3 className="gallery-category">
              {section.category.replace(/-/g, " ")}
            </h3>

            <div className="masonry">
              {section.images.map((img, index) => (
                <img
                  key={img}
                  src={`/gallery/${section.category}/${img}`}
                  alt={`${section.category} event by Infinity Events`}
                  loading="lazy"
                  className="gallery-click"
                  onClick={() =>
                    openLightbox(section.category, section.images, index)
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          category={lightbox.category}
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
