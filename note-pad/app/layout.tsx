import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Note-Pad',
  description: 'A Note-Pad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='de'>
      <link rel='icon' type='image/x-icon' href='/favicon.ico'></link>
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
      <link rel='manifest' href='/manifest.json' />
    </html>
  );
}
