import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Infinity Events | Wedding & Event Planners",
  description:
    "Contact Infinity Events for weddings, birthdays, baby showers and traditional events in South Karnataka. Chat on WhatsApp or send an enquiry.",
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          Let’s plan something unforgettable ✨
        </p>

        <div className="contact-grid">
          {/* CONTACT DETAILS CARD */}
          <div className="contact-card">
            <h2>Get in Touch</h2>

            <p>
              📞 <strong>Phone:</strong>{" "}
              <a href="tel:+917676705762">+91 97319 60606</a>
            </p>

            <p>
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:infinityeventska10@gmail.com">
                infinityeventska10@gmail.com
              </a>
            </p>

            <p>
              📍 <strong>Address:</strong>
              <br />
              Infinity Events,<br />
              JSS College Main Rd, Siddhartha Nagar,<br />
              Chamarajanagar, Karnataka 571313
            </p>

            {/* CTA */}
            <a
              href={`https://wa.me/919731960606?text=${encodeURIComponent(
                "Hi family \n If you are looking for wedding/event planning services.\nPlease contact me."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp-btn"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}
