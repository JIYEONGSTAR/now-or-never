'use client';

import { Button } from '@non/ui';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

import React from 'react';
const inter = Inter({ subsets: ['latin'] });

const Notion = () => {
  const router = useRouter();
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Button varient="outlined" onClick={() => router.push('/')}>
        메인으로가기
      </Button>
    </div>
  );
};

export default Notion;
