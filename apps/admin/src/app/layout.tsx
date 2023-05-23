import { Footer } from '@non/ui';
import './globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/ui/Header';

const inter = Inter({ subsets: ['latin'] });

//refer: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata = {
  title: {
    default: 'NON-now-or-never',
    template: '%s | NON',
  },
  description: 'Now or Never',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`flex flex-col flex-col-items-center justify-between min-h-screen ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
