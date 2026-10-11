import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import ScreensShowcase from "./components/ScreensShowcase";
import StepsSection from "./components/StepsSection";
import InstallGuide from "./components/InstallGuide";
import FaqSection from "./components/FaqSection";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      {/* 1. Navbar ثابت شفاف مع blur */}
      <Navbar />

      <main className={styles.mainContent}>
        {/* 2. Hero: عنوان قوي + زرّين + مجسم شاشة البرنامج */}
        <Hero />

        {/* 3. شريط مميزات سريعة */}
        <FeatureStrip />

        {/* 4. شرح الصفحات (القسم الأهم - الـ 13 صفحة) */}
        <ScreensShowcase />

        {/* 5. ابدأ في 3 خطوات */}
        <StepsSection />

        {/* 6. دليل التثبيت للعميل */}
        <InstallGuide />

        {/* 7. أسئلة شائعة (FAQ) */}
        <FaqSection />

        {/* 8. CTA ختامي كبير بخلفية متدرجة وردية */}
        <FinalCta />
      </main>

      {/* 9. Footer مع سطر حقوق شركة Devora */}
      <Footer />
    </div>
  );
}
