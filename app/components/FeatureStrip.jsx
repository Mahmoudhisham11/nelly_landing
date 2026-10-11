"use client";

import {
  Zap,
  WifiOff,
  RefreshCw,
  Printer,
  ShieldCheck,
  HardDriveDownload,
} from "lucide-react";
import styles from "./FeatureStrip.module.css";

export default function FeatureStrip() {
  const features = [
    {
      icon: Zap,
      title: "سريع وخفيف",
      description: "استجابة فورية ولمس سريع بدون أي تأخير أثناء زحمة البيع.",
      color: "var(--brand-pink)",
      bg: "rgba(219, 39, 119, 0.1)",
    },
    {
      icon: WifiOff,
      title: "يشتغل بدون إنترنت",
      description: "سجّل فواتيرك ومبيعاتك بالكامل ومفيش بيعة هتعطّل.",
      color: "var(--accent-gold)",
      bg: "rgba(217, 119, 6, 0.1)",
    },
    {
      icon: RefreshCw,
      title: "يتزامن بين أجهزتك",
      description: "بياناتك محفوظة وبتتحدّث على كل أجهزتك في المحل والإدارة.",
      color: "var(--accent-purple)",
      bg: "rgba(147, 51, 234, 0.1)",
    },
    {
      icon: Printer,
      title: "طباعة وواتساب",
      description: "اطبع فواتير الكاشير الحرارية أو ابعتها للعميل واتساب بضغطة واحدة.",
      color: "var(--accent-green)",
      bg: "rgba(5, 150, 105, 0.1)",
    },
    {
      icon: ShieldCheck,
      title: "أمان وصلاحيات",
      description: "حدد لكل كاشير ومدير يشوف إيه في البرنامج بكل خصوصية.",
      color: "var(--brand-pink)",
      bg: "rgba(219, 39, 119, 0.1)",
    },
    {
      icon: HardDriveDownload,
      title: "نسخ احتياطي تلقائي",
      description: "حماية تامة لكل فواتيرك وحساباتك بدون خوف من فقدان أي شيء.",
      color: "var(--brand-pink-dark)",
      bg: "rgba(190, 24, 93, 0.1)",
    },
  ];

  return (
    <section id="features" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <span className="luxury-badge">مميزات صُممت لراحتك</span>
          <h2 className={styles.sectionTitle}>
            كل اللي محتاجه عشان تدير محلك باحتراف وبدون تعقيد
          </h2>
          <p className={styles.sectionSubtitle}>
            مزايا أساسية تجعل يومك أسهل، شغلك أسرع، وحساباتك دقيقة 100%
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div key={index} className={styles.card}>
                <div
                  className={styles.iconBox}
                  style={{ backgroundColor: feat.bg, color: feat.color }}
                >
                  <Icon size={26} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{feat.title}</h3>
                  <p className={styles.cardDesc}>{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
