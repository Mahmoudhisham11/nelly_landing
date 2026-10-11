"use client";

import { useState, useEffect } from "react";
import { Laptop, ExternalLink, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.gridRow}>
          {/* Logo & Description */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrap}>
              <div className={styles.logoBox}>
                <span className="font-latin" style={{ fontWeight: 900, fontSize: "1.3rem" }}>
                  N
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className={styles.brandTitle}>Nelly</span>
                <span className={styles.brandSubtitle}>
                  نظام كاشير وإدارة محلات ومخزون
                </span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              برنامج كاشير متكامل مصمم خصيصًا ليمنحك تجربة إدارة سريعة، مريحة، ودقيقة لمحلك ومخزنك وخزنتك بدون أي تعقيد.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <span className={styles.colHeading}>روابط سريعة</span>
            <div className={styles.linksList}>
              <a href="#features" className={styles.linkItem}>المميزات</a>
              <a href="#pages" className={styles.linkItem}>شاشات البرنامج</a>
              <a href="#steps" className={styles.linkItem}>كيف تبدأ</a>
              <a href="#install" className={styles.linkItem}>دليل التثبيت</a>
              <a href="#faq" className={styles.linkItem}>الأسئلة الشائعة</a>
            </div>
          </div>

          {/* Web App Link & Back to Top */}
          <div className={styles.actionsCol}>
            <a
              href="https://nelly-pos.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.webBtn}
            >
              <Laptop size={15} style={{ color: "var(--brand-pink)" }} />
              <span>تجربة نسخة الويب</span>
              <ExternalLink size={12} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className={styles.backToTop}
              aria-label="العودة لأعلى الصفحة"
            >
              <span>العودة للأعلى</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className={styles.copyrightRow}>
          <p>© {currentYear} جميع الحقوق محفوظة لشركة Devora</p>
          <p style={{ fontSize: "0.75rem" }}>
            صُمم بأعلى معايير الأناقة والسهولة لأصحاب المحلات والكاشير
          </p>
        </div>
      </div>
    </footer>
  );
}
