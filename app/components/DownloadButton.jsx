"use client";

import { useReleaseInfo } from "./useReleaseInfo";
import { Download, Monitor, Sparkles } from "lucide-react";
import styles from "./DownloadButton.module.css";

export default function DownloadButton({
  variant = "primary", // "primary" | "compact" | "cta"
  showDetails = true,
  className = "",
}) {
  const { downloadUrl, version, sizeMb, date, loading } = useReleaseInfo();

  if (variant === "compact") {
    return (
      <a
        href={downloadUrl}
        className={`btn-primary ${styles.btnSm} ${className}`}
        aria-label="تحميل برنامج نيللي لويندوز"
      >
        <Download size={16} strokeWidth={2.2} />
        <span>حمّل البرنامج</span>
      </a>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <a
        href={downloadUrl}
        className={`btn-primary ${variant === "cta" ? styles.ctaBtn : ""}`}
        style={{
          boxShadow: "0 10px 28px rgba(219, 39, 119, 0.32)",
        }}
        aria-label="تحميل برنامج Nelly للكمبيوتر بنظام ويندوز"
      >
        <Download size={20} strokeWidth={2.4} />
        <span style={{ fontWeight: 700 }}>حمّل البرنامج لويندوز</span>
        <Sparkles size={16} className={styles.sparkleIcon} />
      </a>

      {showDetails && (
        <div className={styles.details}>
          {loading ? (
            <div className={styles.skeleton} />
          ) : (
            <>
              <span className={styles.osBadge}>
                <Monitor size={13} className={styles.osIcon} />
                متوافق مع Windows 10 و 11
              </span>
              <span className={styles.dot}>•</span>
              <span className={`font-latin ${styles.version}`}>
                {version}
              </span>
              {sizeMb && (
                <>
                  <span className={styles.dot}>•</span>
                  <span className={`font-latin ${styles.size}`}>{sizeMb}</span>
                </>
              )}
              {date && (
                <>
                  <span className={styles.dot}>•</span>
                  <span className={styles.date}>{date}</span>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
