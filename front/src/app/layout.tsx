import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Navigation from '@/components/ui/Navigation';
import AppBar from '@/components/ui/AppBar';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Navigation />
        {children}
        <AppBar />
      </body>
    </html>
  );
}
