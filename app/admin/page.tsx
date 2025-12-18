export default function AdminPage() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <h1>Admin Panel</h1>
      <p>Gallery upload system (coming soon)</p>

      <ul>
        <li>✔ Upload images to category folders</li>
        <li>✔ Auto refresh gallery</li>
        <li>✔ SEO alt text generation</li>
      </ul>

      <p style={{ marginTop: 20, color: "gray" }}>
        🔒 This page will be protected with login
      </p>
    </section>
  );
}
