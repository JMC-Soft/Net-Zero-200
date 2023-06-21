import './globals.css';
import { Inter, Pacifico } from 'next/font/google';
import React from 'react';
import clsx from 'clsx';
import Navigation from '@/components/Navigation';
import AppBar from '@/components/AppBar';

const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--pacifico',
});
const notoSansKR = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--noto-sans-kr',
});

export const metadata = {
  title: 'Ve green | 비그린',
  description: '환경',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={clsx(inter.variable, pacifico.variable, notoSansKR.variable)}
      >
        <Navigation />
        {children}
        <AppBar />
      </body>
    </html>
  );
}
