"use client";

import { Download, MousePointerClick, PlayCircle, Sparkles } from "lucide-react";
import styles from "./StepsSection.module.css";

export default function StepsSection() {
  const steps = [
    {
      step: "01",
      title: "حمّل البرنامج",
      description:
        "اضغط على زر التحميل للأجهزة التي تعمل بنظام ويندوز، وسيبدأ تنزيل ملف التثبيت على جهازك في ثوانٍ معدودة.",
      icon: Download,
      color: "var(--brand-pink)",
      bg: "rgba(219, 39, 119, 0.1)",
    },
    {
      step: "02",
      title: "ثبّته بضغطتين",
      description:
        "افتح الملف المحمّل، واتّبع الخطوات التلقائية البسيطة. في أقل من دقيقة ستجد أيقونة Nelly جاهزة على سطح المكتب.",
      icon: MousePointerClick,
      color: "var(--accent-gold)",
      bg: "rgba(217, 119, 6, 0.1)",
    },
    {
      step: "03",
      title: "سجّل الدخول وابدأ البيع",
      description:
        "افتح البرنامج وسجّل الدخول باسمك وكلمة السر، وابدأ بإصدار أول فاتورة للزبائن ومتابعة محلك فورًا بكل راحة بال.",
      icon: PlayCircle,
      color: "var(--accent-green)",
      bg: "rgba(5, 150, 105, 0.1)",
    },
  ];

  return (
    <section id="steps" className={styles.section}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className="luxury-badge" style={{ marginBottom: "12px" }}>
            <Sparkles size={14} style={{ color: "var(--brand-pink)" }} />
            <span>بداية سريعة وبسيطة</span>
          </div>
          <h2 className={styles.title}>ابدأ في 3 خطوات بس</h2>
          <p className={styles.subtitle}>
            مش محتاج خبير أو فني، البرنامج جاهز للاستخدام في دقائق قليلة
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.stepCard}>
                <div>
                  <div className={styles.stepTop}>
                    <div
                      className={styles.iconBox}
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      <Icon size={28} strokeWidth={2.2} />
                    </div>
                    <span className={styles.stepNum}>{item.step}</span>
                  </div>

                  <h3 className={styles.stepTitle}>{item.title}</h3>
                  <p className={styles.stepDesc}>{item.description}</p>
                </div>

                <div className={styles.stepFooter}>
                  <span>الخطوة {index + 1} من 3</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
