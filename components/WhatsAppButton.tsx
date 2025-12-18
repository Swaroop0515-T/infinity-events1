export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/919731960606?text=${encodeURIComponent(
                "Hi family \n If you are looking for wedding/event planning services.\nPlease contact me."
              )}`}
      target="_blank"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      💬
    </a>
  );
}
