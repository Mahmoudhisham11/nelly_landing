import { Cairo, Outfit } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "برنامج Nelly | نظام الكاشير وإدارة المحلات والمخزون الأسهل لمحلك",
  description:
    "أدِر محلك بسهولة من أول بيعة لآخر جرد مع برنامج Nelly. كاشير سريع، جرد فوري للمخزن، متابعة الخزنة والآجل، وطباعة فواتير أو إرسالها بالواتساب. حمّل نسختك لويندوز الآن.",
  keywords: [
    "برنامج كاشير",
    "برنامج محاسبة للمحلات",
    "إدارة مخزون",
    "نظام POS",
    "كاشير محلات ملابس",
    "نظام مبيعات",
    "Nelly POS",
    "برنامج نيللي",
  ],
  authors: [{ name: "Devora" }],
  openGraph: {
    title: "برنامج Nelly | نظام الكاشير وإدارة المحلات والمخزون",
    description:
      "أدِر محلك بسهولة مع برنامج Nelly. كاشير سريع ومتابعة دقيقة للمخزن والخزنة. حمّل نسختك لويندوز الآن.",
    url: "https://nelly-pos.vercel.app",
    siteName: "Nelly POS",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "برنامج Nelly | نظام الكاشير وإدارة المحلات",
    description: "أدِر محلك بسهولة مع برنامج Nelly. كاشير سريع ومتابعة دقيقة للمخزن والخزنة.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
