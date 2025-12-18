import fs from "fs";
import path from "path";
import GalleryClient from "@/components/GalleryClient";
import services from "@/data/services.json";

/* ================= TYPES ================= */

type GallerySection = {
  category: string;
  images: string[];
};

/* ================= GALLERY LOADER (SERVER ONLY) ================= */

const GALLERY_PATH = path.join(process.cwd(), "public/gallery");

function getGallery(): GallerySection[] {
  if (!fs.existsSync(GALLERY_PATH)) return [];

  return fs
    .readdirSync(GALLERY_PATH)
    .map((category) => {
      const categoryPath = path.join(GALLERY_PATH, category);

      if (!fs.statSync(categoryPath).isDirectory()) return null;

      const images = fs
        .readdirSync(categoryPath)
        .filter((file) =>
          [".jpg", ".jpeg", ".png", ".webp"].includes(
            path.extname(file).toLowerCase()
          )
        );

      return {
        category,
        images,
      };
    })
    .filter(Boolean) as GallerySection[];
}

/* ================= PAGE ================= */

export default function Home() {
  const gallery = getGallery(); // ✅ Always runs on server

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Infinity Events</h1>
          <h2>Beyond the Ordinary</h2>

          <p className="hero-sub">
            Expertise in South Karnataka traditions & rituals
          </p>

          <p className="hero-desc">
            Serving Mysuru, Mandya, Chamarajanagara, Hassan, Kodagu and nearby
            taluks including Kollegala, Yelanduru, Nanjangudu, T. Narasipura.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn primary">
              Book Consultation
            </a>

            <a
              href="https://wa.me/917676705762"
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY (CLIENT HANDLED) ================= */}
      
      <section id="gallery">
        <GalleryClient gallery={gallery} />
      </section>

    </>
  );
}
