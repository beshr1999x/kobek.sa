export const metadata = {
  title: "Kobek - اشتراك قهوتك اليومي",
  description: "كوبك: اشترك شهريًا واحصل على كوب قهوة يومي بسعر مخفض من المقاهي المشاركة.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
