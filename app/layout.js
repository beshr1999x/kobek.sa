export const metadata = {
  title: "Kobek - اشتراك قهوتك اليومي | kobek.sa",
  description: "كوبك: اشترك شهريًا واحصل على كوب قهوة يومي بسعر مخفض من المقاهي المشاركة. خدمة اشتراك القهوة الرائدة في المملكة العربية السعودية.",
  keywords: "قهوة، اشتراك، كوبك، kobek، قهوة يومية، مقاهي، السعودية",
  author: "Kobek",
  canonical: "https://kobek.sa",
  openGraph: {
    title: "Kobek - اشتراك قهوتك اليومي",
    description: "كوبك: اشترك شهريًا واحصل على كوب قهوة يومي بسعر مخفض من المقاهي المشاركة.",
    url: "https://kobek.sa",
    siteName: "Kobek",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobek - اشتراك قهوتك اليومي",
    description: "كوبك: اشترك شهريًا واحصل على كوب قهوة يومي بسعر مخفض من المقاهي المشاركة.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
