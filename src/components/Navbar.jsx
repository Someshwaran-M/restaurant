import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" }, // ✅ FIXED
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const offset = 80;
      const top =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        Portfolio<span className="logo-dot">.</span>
      </div>

      <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="nav-item"
            onClick={() => handleScroll(link.id)}
          >
            <span>{link.name}</span>
            <span className="nav-underline" />
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>

    
  );
}

export default Navbar;