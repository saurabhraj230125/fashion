import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['cyrillic', 'latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Fashion Boutique Sat | Премиальная женская одежда САТПАЕВ',
  description: 'Премиальная женская одежда в Сатпаеве. Made in Turkey. ТРЦ Ulytau Mall, 2 этаж, 45 бутик. Высокое качество, стильные коллекции, оплата Kaspi QR/RED.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
