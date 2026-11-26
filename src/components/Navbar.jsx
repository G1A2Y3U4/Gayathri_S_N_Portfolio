
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => {
            closeMenu();
            setActiveSection("home");
          }}
        >
          GAYATHRI<span>.</span>
        </a>

        {/* Navigation Links */}
        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  closeMenu();
                  setActiveSection(sectionId);
                }}
                className={`nav-link ${
                  activeSection === sectionId ? "active" : ""
                }`}
                aria-current={
                  activeSection === sectionId ? "location" : undefined
                }
              >
                {link.name}
              </a>
            );
          })}

          {/* Mobile Contact Button */}
          <a
            href="#contact"
            className="mobile-talk-btn"
            onClick={() => {
              closeMenu();
              setActiveSection("contact");
            }}
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>

        {/* Desktop Contact Button */}
        <a href="#contact" className="talk-btn">
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
