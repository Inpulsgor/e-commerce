import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { AppLayout } from './common/layout/AppLayout';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'E-Commerce app',
  description: 'Test E-Commerce app',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
