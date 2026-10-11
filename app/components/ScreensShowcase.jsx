"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Store,
  Package,
  History,
  CalendarCheck2,
  Vault,
  Users,
  Truck,
  Receipt,
  UserCheck,
  Settings,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import styles from "./ScreensShowcase.module.css";

export default function ScreensShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "كل الصفحات (13)" },
    { id: "pos", name: "البيع والمعرض" },
    { id: "stock", name: "المخزون والبضاعة" },
    { id: "money", name: "الحسابات والخزنة" },
    { id: "admin", name: "الإدارة والمساعد الذكي" },
  ];

  const screens = [
    {
      id: "dashboard",
      name: "لوحة التحكم",
      category: "pos",
      badge: "الرئيسية",
      icon: LayoutDashboard,
      color: "var(--brand-pink)",
      bg: "rgba(219, 39, 119, 0.1)",
      description:
        "نظرة سريعة وواضحة على مبيعات اليوم وحالة المحل أول ما تفتح البرنامج، عشان تعرف دخلك وأنت واقف مكانك ومن غير لف ودوران.",
      points: [
        "إجمالي المبيعات وعدد الفواتير الصادرة اليوم لحظة بلحظة",
        "الأصناف الأكثر مبيعًا واللي قربت تخلص عشان تلحق تطلبها",
        "متابعة نقدية الدرج الحالية ومقارنتها بالأيام اللي فاتت",
      ],
      previewHint: "شاشة تعرض ملخص أرباح اليوم والرسوم البيانية لأداء المحل",
    },
    {
      id: "pos",
      name: "نقطة البيع (الكاشير)",
      category: "pos",
      badge: "الأكثر استخدامًا",
      icon: ShoppingCart,
      color: "var(--brand-pink-dark)",
      bg: "rgba(190, 24, 93, 0.1)",
      description:
        "شاشة الكاشير السريعة اللي معمولة لضغط الشغل. تضيف الأصناف بالباركود أو بالاسم، وتخلّص الفاتورة في ثوانٍ مع أي طريقة دفع يطلبها العميل.",
      points: [
        "إضافة الأصناف بمسح الباركود أو بالبحث السريع باسم الصنف",
        "طرق دفع متعددة: نقدي (كاش)، فيزا، تحويل بنكي/محفظة، أو بيع آجل على الحساب",
        "إمكانية تطبيق خصم على الفاتورة بسهولة",
        "طباعة الفاتورة على طابعة الكاشير أو إرسالها للعميل واتساب بلمسة زر",
        "إمكانية تعليق فاتورة لعميل والرجوع لها بعدين من غير ما توقف الطابور",
        "تقفيل الوردية للكاشير وتسجيل مرتجعات الأصناف بكل دقة",
      ],
      previewHint: "شاشة الكاشير وقارئ الباركود والسلة وحساب الإجمالي والدفع",
    },
    {
      id: "storefront",
      name: "المحل",
      category: "pos",
      badge: "المعرض والبيع",
      icon: Store,
      color: "var(--brand-pink-mid)",
      bg: "rgba(236, 72, 153, 0.1)",
      description:
        "متابعة بضاعة المعرض اللي معروضة قدام الزباين، وكميتها الحالية، مع سهولة نقل البضاعة بين المخزن ورفوف المحل وتسجيل فواتير الشراء الجديدة.",
      points: [
        "معرفة كمية كل صنف معروضة على الرفوف قدام الزباين",
        "استلام بضاعة جديدة محولة من المخزن للمحل أو إرجاع الزيادة",
        "تسجيل فواتير الشراء الجديدة أول ما البضاعة توصل المحل",
      ],
      previewHint: "جدول بضاعة المعرض وحركات النقل من وإلى المخزن",
    },
    {
      id: "warehouse",
      name: "المخزن",
      category: "stock",
      badge: "إدارة الأصناف",
      icon: Package,
      color: "var(--accent-gold)",
      bg: "rgba(217, 119, 6, 0.1)",
      description:
        "المرجع الكامل لكل صنف عندك في المحل والمستودع بأسعاره وتكلفته وكمياته، مع أدوات طباعة الباركود وملصقات الأسعار وكشوفات الجرد.",
      points: [
        "إضافة أصناف جديدة وتعديل الأسعار والكميات بسهولة",
        "طباعة الباركود واستيكرات الأسعار على مقاسات الورق المختلفة",
        "كشف جرد جاهز للطباعة لجرد البضاعة ومطابقتها على الطبيعة",
        "تنبيهات فورية للأصناف اللي قربت تخلص من المخزن",
      ],
      previewHint: "قائمة المخزن الشاملة بأسعار الشراء والبيع والكميات والباركود",
    },
    {
      id: "item-history",
      name: "حركة الصنف",
      category: "stock",
      badge: "تتبع دقيق",
      icon: History,
      color: "var(--accent-purple)",
      bg: "rgba(147, 51, 234, 0.1)",
      description:
        "سجل تاريخي كامل لكل قطعة، تعرف منه الصنف دخل إمتى، اتباعت منه كام قطعة ولمين، ومين الموظف اللي باعها أو رجعها، عشان تطمئن تمامًا.",
      points: [
        "تتبّع مسار الصنف من أول ما دخل المحل لحد ما اتباع أو اترجع",
        "معرفة تواريخ عمليات البيع والشراء والمرتجع لكل صنف بالتفصيل",
        "معرفة مين الكاشير اللي عمل كل حركة ومتابعة أي فروقات في الكمية",
      ],
      previewHint: "شريط زمني مفصل لكل عملية تمت على الصنف المختار",
    },
    {
      id: "day-closing",
      name: "تقفيلة الأيام",
      category: "pos",
      badge: "تقارير يومية",
      icon: CalendarCheck2,
      color: "var(--accent-green)",
      bg: "rgba(5, 150, 105, 0.1)",
      description:
        "تقارير آخر اليوم اللي بتنهي بيها يومك وأنت مرتاح. بتعرف بعت بكام، إيه الكاش اللي المفروض يكون في الدرج، وهل فيه أي زيادة أو عجز بالسنتيم.",
      points: [
        "ملخص ختامي لمبيعات اليوم بالكامل وطرق الدفع المختلفة",
        "حساب الكاش المفروض يكون موجود في الدرج بدقة متناهية",
        "كشف أي زيادة أو عجز في النقدية ومطابقة الحسابات قبل الإغلاق",
        "إمكانية طباعة تقرير التقفيل اليومي للاحتفاظ به في أرشيفك",
      ],
      previewHint: "تقرير إغلاق اليوم والوردية وحساب الكاش والعجز والزيادة",
    },
    {
      id: "vault-capital",
      name: "الخزنة ورأس المال",
      category: "money",
      badge: "أموال المحل",
      icon: Vault,
      color: "var(--accent-gold)",
      bg: "rgba(217, 119, 6, 0.1)",
      description:
        "المكان اللي بيجمعلك الفلوس الحقيقية للمحل: كاش الدرج، حساب الفيزا، تحويلات المحافظ، بالإضافة لقيمة البضاعة في المحل وإجمالي رأس مالك الفعلي.",
      points: [
        "معرفة رصيد النقدية في الخزنة ورصيد حسابات الفيزا والتحويلات",
        "حساب القيمة الإجمالية للبضاعة الموجودة في المحل والمخزن بسعر التكلفة والبيع",
        "معرفة إجمالي رأس مال المحل الحقيقي في أي وقت بنقرة واحدة",
      ],
      previewHint: "كشف الخزينة ورصيد البنوك والمحافظ وقيمة البضاعة ورأس المال",
    },
    {
      id: "customers-credit",
      name: "سجل العملاء والآجل",
      category: "money",
      badge: "ديون وتحصيل",
      icon: Users,
      color: "var(--brand-pink)",
      bg: "rgba(219, 39, 119, 0.1)",
      description:
        "كل بيانات زباينك المسجلين، مين عليه فلوس مؤجلة (آجل)، كام دفع، والمتبقي عليه، مع إمكانية تسجيل أي دفعة تحصيل في ثوانٍ وطباعة كشف حسابه.",
      points: [
        "دليل بأسماء وأرقام هواتف وعناوين العملاء والزبائن المميزين",
        "متابعة دقيقة لمبالغ الآجل المستحقة على كل عميل وتواريخ السداد",
        "تسجيل مبالغ التحصيل والدفعات وطباعة وصل استلام فوري",
      ],
      previewHint: "جدول العملاء وأرصدة الآجل وسجل دفعات التحصيل والواتساب",
    },
    {
      id: "suppliers",
      name: "الموردين والحسابات",
      category: "money",
      badge: "التجار والمستحقات",
      icon: Truck,
      color: "var(--text-secondary)",
      bg: "rgba(90, 70, 99, 0.1)",
      description:
        "سجل كل تاجر ومورد بتشتري منه، الفواتير اللي نزلهالك، المبالغ اللي دفعتها، والمبالغ المستحقة له، عشان حساباتك مع التجار تكون دايمًا مظبوطة بالورقة والقلم.",
      points: [
        "بيانات الموردين وأرقامهم وسجل فواتير البضاعة المستلمة منهم",
        "معرفة إجمالي الفلوس المستحقة لكل مورد والدفعات المسددة",
        "تسجيل دفعات السداد وحفظ كشف حساب مفصل لكل تاجر",
      ],
      previewHint: "سجل حسابات الموردين وفواتير الشراء والدفعات المتبقية",
    },
    {
      id: "expenses",
      name: "المصاريف والنفقات",
      category: "money",
      badge: "مصاريف وتشغيل",
      icon: Receipt,
      color: "var(--accent-red)",
      bg: "rgba(220, 38, 38, 0.1)",
      description:
        "سجّل كل قرش بيخرج من المحل أولًا بأول: إيجار، كهرباء، شاي وقهوة، فواتير شحن، أو صيانة، مع تقرير يوضحلك مصاريفك رايحة فين بالضبط.",
      points: [
        "تسجيل أي مصروف نثري أو تشغيلي في نفس لحظة صرفه بضغطة زر",
        "تصنيف المصاريف لبنود واضحة (إيجار، كهرباء، صيانة، بوفيه، نقل)",
        "خصم المصروف تلقائيًا من نقدية الدرج أو الخزنة حسب ما تختار",
      ],
      previewHint: "سجل المصاريف اليومية وتصنيفاتها وتأثيرها على صافي الأرباح",
    },
    {
      id: "employees-payroll",
      name: "الموظفين والرواتب",
      category: "admin",
      badge: "فريق العمل",
      icon: UserCheck,
      color: "var(--accent-green)",
      bg: "rgba(5, 150, 105, 0.1)",
      description:
        "إدارة فريق المحل: حضور وانصراف، السلف والخصومات، وحساب الراتب الصافي آخر الشهر بكل شفافية، مع طباعة كشف الراتب وباركود خاص لكل موظف.",
      points: [
        "تسجيل بيانات الموظفين وتحديد رواتبهم الشهرية أو اليومية",
        "متابعة السلف والمكافآت والخصومات بدقة بدون لخبطة في الحسابات",
        "حساب صافي الراتب تلقائيًا وطباعة إيصال استلام الراتب",
        "طباعة كارت أو باركود للموظف لتسجيل دخوله للكاشير بسهولة",
      ],
      previewHint: "شاشة فريق العمل وحسابات الرواتب والسلف وكشف المرتبات",
    },
    {
      id: "settings-users",
      name: "الإعدادات والمستخدمين",
      category: "admin",
      badge: "للمدير فقط",
      icon: Settings,
      color: "var(--brand-pink)",
      bg: "rgba(219, 39, 119, 0.1)",
      description:
        "لوحة تحكم المدير: تقدر تضيف كاشير أو مشرف جديد، وتحدد لكل واحد يشوف إيه وما يشوفش إيه، وتضبط بيانات المحل وشعار الفاتورة والنسخ الاحتياطي.",
      points: [
        "إضافة مستخدمين جدد (كاشير، مدير، محاسب) وتعيين كلمات المرور",
        "تحديد الصلاحيات بدقة: منع الكاشير من رؤية الأرباح أو تعديل الأسعار",
        "تخصيص بيانات المحل وشعار الفاتورة ورسالة الشكر للزبائن",
        "أخذ نسخة احتياطية من بيانات المحل واسترجاعها بضغطة واحدة",
      ],
      previewHint: "إعدادات الأمان والصلاحيات والنسخ الاحتياطي وبيانات الفاتورة",
    },
    {
      id: "smart-assistant",
      name: "المساعد الذكي ✨",
      category: "admin",
      badge: "ميزة ذكية وحصرية",
      icon: Sparkles,
      color: "var(--accent-gold)",
      bg: "rgba(217, 119, 6, 0.1)",
      description:
        "مساعدك الخاص جوّه البرنامج: اسأله بالعربي زي ما بتسأل صديقك عن مبيعاتك أو مخزونك، يحلل لك الأرقام ويجاوبك فورًا (للقراءة والتحليل فقط وبكل أمان).",
      points: [
        "اسأله بالعربي العادي: 'كام إجمالي مبيعاتنا هذا الأسبوع؟' أو 'إيه أكتر صنف كسبان؟'",
        "تحليل ذكي لبيانات المخزن وتنبيهك قبل ما البضاعة المهمة تخلص",
        "آمن تمامًا: مخصص للقراءة والتحليل فقط بدون أي تعديل على بياناتك وفواتيرك",
      ],
      previewHint: "واجهة محادثة ذكية تسألها بالعربي وتجيبك بأرقام وإحصائيات محلك",
    },
  ];

  const filteredScreens =
    activeFilter === "all"
      ? screens
      : screens.filter((s) => s.category === activeFilter);

  return (
    <section id="pages" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className="luxury-badge" style={{ marginBottom: "12px" }}>
            <Sparkles size={14} style={{ color: "var(--brand-pink)" }} />
            <span>القسم الأهم: كل شاشة في برنامجك</span>
          </div>
          <h2 className={styles.title}>
            شاشات برنامج <span className="font-latin text-gradient">Nelly</span> المصممة لراحتك
          </h2>
          <p className={styles.subtitle}>
            استكشف الـ 13 شاشة الأساسية التي تجعل إدارة محلك أسهل وأوضح من أي وقت مضى، بدون أي مصطلحات معقدة وبنفس أسمائها في البرنامج.
          </p>

          {/* Filter Categories Pills */}
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={activeFilter === cat.id ? styles.filterBtnActive : styles.filterBtn}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Screens Grid */}
        <div className={styles.screensGrid}>
          {filteredScreens.map((screen) => {
            const Icon = screen.icon;
            return (
              <div key={screen.id} className={styles.screenCard}>
                <div>
                  {/* Card Header */}
                  <div className={styles.cardHeader}>
                    <div
                      className={styles.cardIconBox}
                      style={{ backgroundColor: screen.bg, color: screen.color }}
                    >
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className={styles.cardTitle}>{screen.name}</h3>
                      <span className={styles.cardBadge}>{screen.badge}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={styles.cardDesc}>{screen.description}</p>

                  {/* Bullet points */}
                  <div className={styles.pointsSection}>
                    <span className={styles.pointsTitle}>تقدر تعمل إيه هنا:</span>
                    <ul className={styles.pointsList}>
                      {screen.points.map((pt, pIdx) => (
                        <li key={pIdx} className={styles.pointItem}>
                          <CheckCircle2 size={15} className={styles.checkIcon} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom preview note */}
                <div className={styles.previewBar}>
                  <div className={styles.previewInner}>
                    <span className={styles.previewHintText}>{screen.previewHint}</span>
                    <span className={styles.previewLink}>
                      معاينة <ArrowLeft size={12} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
