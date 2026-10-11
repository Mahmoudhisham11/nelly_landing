"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "هل يشتغل البرنامج بدون إنترنت؟",
      a: "نعم، تمامًا! تقدر تبيع وتسجّل فواتيرك وتتعامل مع الزباين عادي جدًا حتى لو شبكة الإنترنت فاصلة في المحل. ومجرد ما النت يرجع، كل بياناتك وفواتيرك بتتحدّث وتتحفظ تلقائيًا بدون أي تدخل منك.",
    },
    {
      q: "هل أقدر أستخدم البرنامج على أكتر من جهاز في نفس المحل؟",
      a: "أكيد، تقدر تشغل البرنامج على جهاز الكاشير في المعرض، وجهاز تاني في المخزن، أو لابتوب الإدارة لمتابعة الحسابات، وبياناتك بتكون متزامنة ومحفوظة أولًا بأول بين كل الأجهزة.",
    },
    {
      q: "هل بياناتي وفواتيري بأمان؟",
      a: "بياناتك في أمان تام ومحمية بأعلى معايير الخصوصية. بالإضافة إلى ذلك، البرنامج بيوفر ميزة النسخ الاحتياطي التلقائي بضغطة زر، تقدر تحتفظ بنسخة من كل فواتيرك وحساباتك على فلاشة أو جهازك في أي وقت.",
    },
    {
      q: "إزاي أطبع الفاتورة على طابعة الكاشير الحرارية؟",
      a: "البرنامج متوافق مع كافة طابعات الفواتير الحرارية المشهورة (مقاس 80 مم أو 57 مم)، سواء كانت متصلة بالكمبيوتر عن طريق كابل USB أو عن طريق الشبكة، ومجرد الضغط على طباعة الفاتورة بتطبع فورًا وبشكل منسق وفخم.",
    },
    {
      q: "إزاي أضيف كاشير جديد وأحدد صلاحياته؟",
      a: "بكل بساطة من شاشة «الإعدادات والمستخدمين» (المخصصة للمدير)، تقدر تضيف اسم الكاشير وكلمة المرور الخاصة به، وتحدد له إيه الصفحات اللي يشوفها بس (مثلاً نقطة البيع فقط)، وتمنعه من رؤية الخزنة أو رأس المال أو تقارير الأرباح.",
    },
    {
      q: "هل فيه دعم فني يساعدني في التثبيت أو الاستخدام؟",
      a: "نعم! فريق الدعم الفني متواجد لمساعدتك خطوة بخطوة في أي استفسار أو مساعدة تحتاجها عند التثبيت أو الاستخدام عبر الواتساب والمكالمات الهاتفية.",
    },
  ];

  const SUPPORT_PHONE_DISPLAY = "01000000000";
  const SUPPORT_WHATSAPP_LINK = "https://wa.me/201000000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20Nelly";

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className="luxury-badge" style={{ marginBottom: "12px" }}>
            <Sparkles size={14} style={{ color: "var(--brand-pink)" }} />
            <span>إجابات واضحة وسريعة</span>
          </div>
          <h2 className={styles.title}>الأسئلة الشائعة</h2>
          <p className={styles.subtitle}>
            كل ما يهمك معرفته عن تشغيل برنامج نيللي واستخدامه اليومي في محلك
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={styles.faqItem}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={styles.faqButton}
                  aria-expanded={isOpen}
                >
                  <div className={styles.questionWrap}>
                    <span className={styles.dot} />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className={styles.answerBox}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Box */}
        <div className={styles.supportBox}>
          <div className={styles.supportIconBox}>
            <MessageCircle size={28} />
          </div>
          <h3 className={styles.supportTitle}>
            عندك سؤال تاني أو محتاج مساعدة خاصة؟
          </h3>
          <p className={styles.supportDesc}>
            فريق الدعم الفني جاهز لمساعدتك في أي وقت عبر الواتساب والمكالمات
          </p>
          <div className={styles.supportActions}>
            <a
              href={SUPPORT_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={18} />
              <span>تواصل معنا عبر واتساب</span>
            </a>
            <span className={styles.phonePill}>
              {SUPPORT_PHONE_DISPLAY}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
