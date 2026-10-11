"use client";

import { useState, useEffect } from "react";
import DownloadButton from "./DownloadButton";
import { Menu, X, ExternalLink, Laptop } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "المميزات", href: "#features" },
    { name: "شاشات البرنامج", href: "#pages" },
    { name: "كيف تبدأ", href: "#steps" },
    { name: "دليل التثبيت", href: "#install" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navInner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="الصفحة الرئيسية لبرنامج نيللي">
          <div className={styles.logoIcon}>
            <span className={styles.logoLetter}>N</span>
          </div>
          <div className={styles.logoTextCol}>
            <span className={styles.brandTitle}>Nelly</span>
            <span className={styles.brandSubtitle}>كاشير وإدارة محلات</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.navLinks} aria-label="قائمة التصفح الرئيسية">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
          {/* Web Version Link */}
          <a
            href="https://nelly-pos.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.webPill}
            title="تجربة برنامج نيللي مباشرة من المتصفح"
          >
            <Laptop size={14} className={styles.webPillIcon} />
            <span>نسخة الويب</span>
            <ExternalLink size={12} />
          </a>
        </nav>

        {/* Action Button Desktop */}
        <div className={styles.rightActions}>
          <DownloadButton variant="compact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={styles.mobileToggle}
          aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileLinksList}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={styles.mobileNavLink}
              >
                {link.name}
              </a>
            ))}

            <div className={styles.mobileDivider} />

            <a
              href="https://nelly-pos.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileWebLink}
            >
              <Laptop size={16} className={styles.webPillIcon} />
              <span>جرّب النسخة على الويب</span>
              <ExternalLink size={14} />
            </a>

            <div>
              <DownloadButton
                variant="compact"
                style={{ width: "100%", justifyContent: "center", padding: "14px" }}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
