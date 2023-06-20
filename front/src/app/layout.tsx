import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Navigation from '@/components/ui/Navigation';
import AppBar from '@/components/ui/AppBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Net-Zero 해커톤',
  description: '우승합니다.',
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
