import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <img src="./favicon.ico" alt="Infinity Events" style={{ height: "32px" , marginRight :"-570px"}}  />
        <div className="logo">Infinity Events</div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
