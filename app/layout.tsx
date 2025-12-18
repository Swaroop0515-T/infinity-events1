import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Infinity Events – Beyond the Ordinary",
    template: "%s | Infinity Events",
  },
  description:
    "Infinity Events is a South Karnataka based event management company specializing in weddings, engagements, birthdays, baby showers and traditional ceremonies.",
  keywords: [
    "Infinity Events",
    "Wedding planners Mysuru",
    "South Karnataka events",
    "Traditional wedding decorators",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Infinity Events",
            description:
              "South Karnataka based event management company specializing in weddings, birthdays, baby showers and traditional ceremonies.",
            telephone: "+91-7676705762",
            email: "infinityevents@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mysuru",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
            areaServed: [
              "Mysuru",
              "Mandya",
              "Chamarajanagara",
              "Hassan",
              "Kodagu",
            ],
            url: "https://infinityevents.com",
          }),
        }}
      />

      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
