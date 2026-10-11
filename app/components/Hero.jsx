"use client";

import DownloadButton from "./DownloadButton";
import {
  Sparkles,
  ExternalLink,
  Search,
  ShoppingCart,
  Barcode,
  CheckCircle2,
  Printer,
  CreditCard,
  Banknote,
  Smartphone,
  User,
  ShieldCheck,
} from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background glowing blurs */}
      <div
        className="bg-glow-orb"
        style={{ top: "-100px", right: "-120px" }}
      />
      <div
        className="bg-glow-orb"
        style={{ bottom: "0px", left: "-150px", opacity: 0.7 }}
      />

      <div className={`container ${styles.contentContainer}`}>
        {/* Top Tag / Pill */}
        <div className={styles.badgeWrapper}>
          <div className="luxury-badge">
            <Sparkles size={16} style={{ color: "var(--brand-pink)" }} />
            <span>نظام كاشير وإدارة محلات متكامل ومريح</span>
            <span className={styles.badgeDot} />
            <span className={styles.badgeVersion}>Nelly v1.0</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className={styles.textHeader}>
          <h1 className={styles.heroTitle}>
            أدِر محلك <span className="text-gradient">بسهولة…</span>
            <br />
            من أول بيعة لآخر جرد
          </h1>
          <p className={styles.heroSubtitle}>
            برنامج مصمم خصيصًا ليناسب حركة محلك اليومية. كاشير سريع، متابعة دقيقة للمخزن والخزنة، وتقارير واضحة تريّح بالك وتساعدك تكبّر تجارتك.
          </p>
        </div>

        {/* Action Buttons */}
        <div className={styles.buttonsGroup}>
          <div>
            <DownloadButton showDetails={true} />
          </div>

          <a
            href="https://nelly-pos.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.webBtn}
            aria-label="جرّب نسخة برنامج نيللي على المتصفح"
          >
            <span>جرّب النسخة على الويب</span>
            <ExternalLink size={17} style={{ color: "var(--brand-pink)" }} />
          </a>
        </div>

        {/* Software Screen Mockup */}
        <div className={styles.mockupWrapper}>
          <div className={styles.windowFrame}>
            {/* Window Top Bar */}
            <div className={styles.windowBar}>
              {/* Window Controls (Traffic Lights) */}
              <div className={styles.trafficLights}>
                <span className={styles.dotPink} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
                <span className={styles.windowAppTitle}>Nelly POS</span>
                <span className={styles.windowAppSub}>| نقطة البيع السريعة</span>
              </div>

              {/* Status and Active Shift */}
              <div className={styles.windowStatus}>
                <span className={styles.statusOnlineBadge}>
                  <span className={styles.statusBlinkDot} />
                  النظام متصل وجاهز
                </span>
                <span className={styles.cashierTag}>
                  <User size={13} style={{ color: "var(--brand-pink)" }} />
                  الكاشير: أحمد سعيد
                </span>
              </div>
            </div>

            {/* Inner Mockup POS Layout */}
            <div className={styles.posLayout}>
              {/* Right Side: Products Catalog & Search */}
              <div className={styles.catalogSide}>
                {/* Search & Barcode Bar */}
                <div className={styles.searchBar}>
                  <div className={styles.searchInputWrapper}>
                    <Search size={16} />
                    <input
                      type="text"
                      readOnly
                      value="ابحث باسم الصنف أو امسح الباركود..."
                      className={styles.searchInput}
                    />
                  </div>
                  <div className={styles.barcodeBadge}>
                    <Barcode size={15} />
                    <span>ماسح فوري</span>
                  </div>
                </div>

                {/* Categories Pills */}
                <div className={styles.categoriesList}>
                  <span className={styles.catActive}>الكل</span>
                  <span className={styles.catItem}>الملابس الحريمي</span>
                  <span className={styles.catItem}>الأحذية والحقائب</span>
                  <span className={styles.catItem}>الإكسسوارات</span>
                </div>

                {/* Products Grid Mock */}
                <div className={styles.productsGrid}>
                  {[
                    { title: "فستان حرير ريفي", price: "450", qty: "12 قطعة" },
                    { title: "شال كشمير ناعم", price: "180", qty: "24 قطعة" },
                    { title: "حقيبة يد كلاسيك", price: "320", qty: "8 قطع" },
                    { title: "طقم مجوهرات وردي", price: "290", qty: "15 قطعة" },
                    { title: "ساعة يد أنيقة", price: "520", qty: "6 قطع" },
                    { title: "عطر نيللي المميز", price: "360", qty: "19 قطعة" },
                  ].map((item, idx) => (
                    <div key={idx} className={styles.productCard}>
                      <div>
                        <div className={styles.productCardHeader}>
                          <span className={styles.productQty}>{item.qty}</span>
                          <span className={styles.productDot} />
                        </div>
                        <p className={styles.productTitle}>{item.title}</p>
                      </div>
                      <div className={styles.productCardFooter}>
                        <span className={styles.productPrice}>
                          {item.price} <span className={styles.priceCurrency}>ج.م</span>
                        </span>
                        <span className={styles.addBtnBadge}>+ إضافة</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Side: Cart & Bill Tender */}
              <div className={styles.cartSide}>
                <div>
                  {/* Cart Header */}
                  <div className={styles.cartHeader}>
                    <div className={styles.cartTitleWrapper}>
                      <ShoppingCart size={16} style={{ color: "var(--brand-pink)" }} />
                      <span className={styles.cartTitleText}>الفاتورة الحالية</span>
                    </div>
                    <span className={styles.orderNumBadge}>#1048</span>
                  </div>

                  {/* Cart Items List */}
                  <div className={styles.cartList}>
                    <div className={styles.cartRow}>
                      <div>
                        <p className={styles.cartItemName}>فستان حرير ريفي</p>
                        <span className={styles.cartItemQty}>الكمية: 1 × 450</span>
                      </div>
                      <div className={styles.cartItemPrice}>
                        450 <span style={{ fontSize: "0.65rem", fontWeight: 400 }}>ج.م</span>
                      </div>
                    </div>

                    <div className={styles.cartRow}>
                      <div>
                        <p className={styles.cartItemName}>شال كشمير ناعم</p>
                        <span className={styles.cartItemQty}>الكمية: 2 × 180</span>
                      </div>
                      <div className={styles.cartItemPrice}>
                        360 <span style={{ fontSize: "0.65rem", fontWeight: 400 }}>ج.م</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cart Summary & Payment Actions */}
                <div className={styles.cartFooterSummary}>
                  <div className={styles.summaryRow}>
                    <span>المجموع الفرعي</span>
                    <span className="font-latin" style={{ fontWeight: 600 }}>810 ج.م</span>
                  </div>
                  <div className={styles.discountRow}>
                    <span>خصم خاص للعميل</span>
                    <span className="font-latin" style={{ fontWeight: 600 }}>-50 ج.م</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>المطلوب سداده</span>
                    <span className={styles.totalAmount}>760 ج.م</span>
                  </div>

                  {/* Payment Methods Chips */}
                  <div className={styles.paymentMethodsGrid}>
                    <span className={styles.payChipActive}>
                      <Banknote size={12} /> كاش
                    </span>
                    <span className={styles.payChip}>
                      <CreditCard size={12} /> فيزا
                    </span>
                    <span className={styles.payChip}>
                      <Smartphone size={12} /> محفظة
                    </span>
                    <span className={styles.payChip}>آجل</span>
                  </div>

                  {/* Checkout Button */}
                  <div className={styles.checkoutMockBtn}>
                    <Printer size={16} />
                    <span>إتمام البيع وطباعة الفاتورة (F12)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom floating micro badges */}
            <div className={styles.windowBottomBadges}>
              <div className={styles.badgeFeatureList}>
                <span className={styles.badgeFeatureItem}>
                  <CheckCircle2 size={14} style={{ color: "var(--accent-green)" }} />
                  شاشة كاشير سريعة تدعم قارئ الباركود واختصارات الكيبورد
                </span>
                <span className={styles.badgeFeatureItem}>
                  <ShieldCheck size={14} style={{ color: "var(--brand-pink)" }} />
                  إرسال الفاتورة عبر الواتساب بنقرة واحدة
                </span>
              </div>
              <span className={styles.realUiTag}>واجهة نظام Nelly الحقيقية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
