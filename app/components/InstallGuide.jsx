"use client";

import {
  DownloadCloud,
  ShieldAlert,
  Laptop2,
  RefreshCw,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import styles from "./InstallGuide.module.css";

export default function InstallGuide() {
  const guideSteps = [
    {
      num: 1,
      title: "اضغط على «حمّل البرنامج» وافتح الملف",
      desc: "بعد اكتمال التحميل في متصفحك، افتح ملف التثبيت الذي تم تنزيله (Nelly-POS-Setup).",
      icon: DownloadCloud,
      color: "var(--brand-pink)",
      bg: "rgba(219, 39, 119, 0.1)",
    },
    {
      num: 2,
      title: "لو ظهرت رسالة زرقاء من ويندوز؟ دي طبيعية تمامًا!",
      desc: "لأن البرنامج جديد، نظام ويندوز قد يظهر شاشة زرقاء مكتوب فيها (Windows protected your PC). كل اللي هتعمله: اضغط على More info ثم اضغط Run anyway، والتثبيت هيكمل فورًا وبكل أمان.",
      icon: ShieldAlert,
      color: "var(--accent-gold)",
      bg: "rgba(217, 119, 6, 0.1)",
      highlightCard: true,
    },
    {
      num: 3,
      title: "افتح البرنامج من سطح المكتب",
      desc: "بعد انتهاء التثبيت التلقائي، هتلاقي أيقونة Nelly الوردية على الديسكتوب. افتحها وسجّل الدخول بالإيميل وكلمة السر وابدأ شغلك.",
      icon: Laptop2,
      color: "var(--accent-green)",
      bg: "rgba(5, 150, 105, 0.1)",
    },
    {
      num: 4,
      title: "تحديثات تلقائية مجانية بدون أي مجهود",
      desc: "البرنامج بيتحدّث لوحده تلقائيًا كل ما نصدر تحسينات ومزايا جديدة، ومش هتحتاج تعيد تثبيته أو تعمل أي خطوات إضافية.",
      icon: RefreshCw,
      color: "var(--accent-purple)",
      bg: "rgba(147, 51, 234, 0.1)",
    },
  ];

  return (
    <section id="install" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className="luxury-badge" style={{ marginBottom: "12px" }}>
            <Sparkles size={14} style={{ color: "var(--brand-pink)" }} />
            <span>شرح واضح وبسيط</span>
          </div>
          <h2 className={styles.title}>دليل تثبيت البرنامج على جهازك</h2>
          <p className={styles.subtitle}>
            خطوات مريحة ومصورة للتثبيت على أي كمبيوتر أو لابتوب يعمل بنظام ويندوز
          </p>
        </div>

        {/* Steps List with visual card for SmartScreen */}
        <div className={styles.layoutGrid}>
          {/* Left Column: 4 Steps */}
          <div className={styles.stepsColumn}>
            {guideSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={step.highlightCard ? styles.stepCardHighlight : styles.stepCard}
                >
                  <div
                    className={styles.stepIconBox}
                    style={{ backgroundColor: step.bg, color: step.color }}
                  >
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className={styles.stepHeaderRow}>
                      <span className={styles.stepBadge}>الخطوة {step.num}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                    </div>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual SmartScreen explanation box */}
          <div className={styles.smartScreenWrapper}>
            <div className={styles.smartScreenHeader}>
              <HelpCircle size={20} />
              <h4 className={styles.smartScreenHeaderTitle}>
                شكل شاشة ويندوز الزرقاء المؤقتة:
              </h4>
            </div>

            {/* Mock Windows Smartscreen Card */}
            <div className={styles.mockWindowsBox}>
              <div className={styles.mockWinHeader}>
                <span className={styles.mockWinTitle}>Windows protected your PC</span>
                <span className={styles.mockWinDot} />
              </div>
              <p className={styles.mockWinDesc}>
                Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk.
              </p>
              <div className={styles.mockActionList}>
                <div className={styles.mockActionStep1}>
                  <span style={{ display: "block", fontSize: "0.72rem", opacity: 0.85 }}>
                    ❶ اضغط أولاً على:
                  </span>
                  <span style={{ fontWeight: 700, textDecoration: "underline", fontSize: "0.82rem" }}>
                    More info
                  </span>
                </div>
                <div className={styles.mockActionStep2}>
                  <span style={{ fontSize: "0.72rem", opacity: 0.9 }}>
                    ❷ ثم اضغط على:
                  </span>
                  <span className={styles.mockBtnRun}>Run anyway</span>
                </div>
              </div>
            </div>

            <div className={styles.guaranteeNote}>
              <CheckCircle2 size={18} style={{ color: "var(--accent-green)", flexShrink: 0, marginTop: "2px" }} />
              <span>
                هذا الإجراء يتم مرة واحدة فقط عند أول تثبيت للبرنامج، والملف آمن بنسبة 100% ومفحوص بالكامل.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
