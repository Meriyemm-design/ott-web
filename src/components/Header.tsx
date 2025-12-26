import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import logo from "../Assets/imgs/logo.webp";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const headRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for header
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector(".header-section");
  //     if (header) {
  //       header.classList.toggle("scrolled", window.scrollY > 0);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   // Initial check
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // GSAP animations
  useGSAP(() => {
    if (!menuRef.current || !headRef.current || !iconsRef.current) return;

    const timeline = gsap.timeline();

    // Logo animation
    timeline.from(headRef.current, {
      x: -20,
      opacity: 0,
      duration: 1,
    });

    // Navigation links animation - floats up from below
    const links = menuRef.current.querySelectorAll("li");
    timeline.from(
      links,
      {
        y: -10, // Changed from -10 to 10 for upward animation
        opacity: 0,
        duration: 0.5,
        stagger: 0.35,
        // ease: "back.out(1.2)", // Adds a nice bounce effect
      },
      "-=0.5" // Starts 0.5 seconds before the logo animation ends
    );

    const icons = iconsRef.current.querySelectorAll("a");
    timeline.from(
      icons,
      {
        x: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.35,
      },
      "=0.1"
    );
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector(".st_header__links");
      if (
        menuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Handle navigation click
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Navigation links data
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/movies", label: "Movies & Shows" },
    { path: "/support", label: "Support" },
    { path: "/subscribe", label: "Subscription" },
    { path: "/practice", label: "Practice" },
  ];

  // Navigation links data
  const socialIcons = [
    { path: "#", "aria-label": "Search", iconClass: "ri-search-line" },
    {
      path: "#",
      "aria-label": "Notifications",
      iconClass: "ri-notification-2-line",
    },
  ];

  // Determine active link
  const isActiveLink = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <section
      className={isHome ? "header-section" : "header-section innerpage-header"}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-8 col-lg-3">
            <div ref={headRef} className="head-logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="col-lg-7 d-none d-lg-block">
            <nav ref={menuRef} className="nav-links">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className={`head-nav ${isActiveLink(link.path)}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop Icons */}
          <div className="col-lg-2 d-none d-lg-block">
            <div ref={iconsRef} className="head_icons">
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.path} aria-label={icon["aria-label"]}>
                  <i className={icon.iconClass}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Section */}
          <div className="col-4 d-md-none">
            <div className="st_header__links">
              {/* Mobile Icons (Search & Notification) */}
              <div className="mobile-icons d-inline-block me-3">
                <a href="#" aria-label="Search">
                  <i className="ri-search-line"></i>
                </a>
                <a href="#" aria-label="Notifications" className="ms-2">
                  <i className="ri-notification-2-line"></i>
                </a>
              </div>

              {/* Hamburger Toggle */}
              <div className="hamburger_icon d-inline-block">
                <button
                  className="menu-toggle"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  <i
                    className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}
                  ></i>
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                <ul className="headlist">
                  <li className="menu-header">
                    <button
                      className="close-btn"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </li>
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        className={isActiveLink(link.path)}
                        onClick={handleNavClick}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
