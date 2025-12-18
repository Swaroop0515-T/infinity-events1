import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Management Services in South Karnataka | Infinity Events",
  description:
    "Infinity Events serves Mysuru, Mandya, Chamarajanagara, Hassan, Kodagu and nearby taluks with professional event planning and traditional ceremonies.",
};

const locations = [
    {
    district: "Chamarajanagara",
    taluks: [],
  },
  {
    district: "Mysuru",
    taluks: [],
  },
  {
    district: "Mandya",
    taluks: [],
  },
  {
    district: "Hassan",
    taluks: [],
  },
  {
    district: "Kodagu",
    taluks: [],
  },
];

export default function LocationsPage() {
  return (
    <section className="locations">
      <div className="container">
        <h1 className="page-title">Our Service Locations</h1>
        <p className="page-subtitle">
          Infinity Events proudly serves South Karnataka with expert event
          planning rooted in tradition and culture.
        </p>

        <div className="locations-grid">
          {locations.map((loc) => (
            <div key={loc.district} className="location-card">
              <h2>{loc.district}</h2>

              {loc.taluks.length > 0 ? (
                <p>
                  <strong>Taluks:</strong> {loc.taluks.join(", ")}
                </p>
              ) : (
                <p className="muted">Serving entire district</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
