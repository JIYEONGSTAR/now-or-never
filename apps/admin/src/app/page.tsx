'use client';
import { sayHello } from '@non/lib';
import { Button } from '@non/ui';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <p className="text-3xl">{sayHello('Admin')}</p>
      <Button varient="contained" onClick={() => alert('admin')}>
        ADMIN
      </Button>
    </main>
  );
}
