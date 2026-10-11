"use client";

import DownloadButton from "./DownloadButton";
import { Sparkles, ExternalLink, Laptop, ShieldCheck } from "lucide-react";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaCard}>
          {/* Decorative glowing overlay elements */}
          <div className={styles.glowOrb1} aria-hidden="true" />
          <div className={styles.glowOrb2} aria-hidden="true" />

          <div className={styles.cardInner}>
            <div className={styles.badge}>
              <Sparkles size={16} style={{ color: "#fef08a" }} />
              <span>جاهز تنقل إدارة محلك لمستوى جديد؟</span>
            </div>

            <h2 className={styles.title}>
              حمّل برنامج <span className="font-latin">Nelly</span> اليوم
              <br />
              وابدأ البيع في دقائق
            </h2>

            <p className={styles.desc}>
              كل اللي محتاجه عشان تدير كاشير محلك، تتابع مخزونك، وتحسب نقدية الدرج والخزنة بكل دقة وسهولة.
            </p>

            {/* Action buttons */}
            <div className={styles.btnGroup}>
              <div style={{ width: "100%", maxWidth: "260px" }}>
                <DownloadButton
                  variant="cta"
                  showDetails={false}
                  style={{ width: "100%" }}
                />
              </div>

              <a
                href="https://nelly-pos.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.webBtn}
              >
                <Laptop size={18} />
                <span>جرّب نسخة الويب</span>
                <ExternalLink size={15} />
              </a>
            </div>

            {/* Security and compatibility reassurance */}
            <div className={styles.reassuranceList}>
              <span className={styles.reassuranceItem}>
                <ShieldCheck size={16} style={{ color: "#fccee8" }} />
                تحميل آمن ومباشر
              </span>
              <span>•</span>
              <span>متوافق مع Windows 10 و 11</span>
              <span>•</span>
              <span>تحديثات تلقائية مجانية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
