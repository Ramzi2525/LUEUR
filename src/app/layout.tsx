import type { Metadata } from 'next';
import { Bebas_Neue, Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from '@/components/providers/Providers';
import { Preloader } from '@/components/ui/Preloader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LUEUR — Beauty Tools for Your Everyday Ritual',
  description:
    'LUEUR — dermatologist-tested beauty tools for face, hair and body. Built for the ritual you already have.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${bebas.variable}`}>
      <body>
        <Providers>
          <Preloader />
          <ScrollProgress />
          {children}
        </Providers>
      </body>
    </html>
  );
}
