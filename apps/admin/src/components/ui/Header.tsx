'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
const Header = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0" onClick={() => router.push('/')}>
      Header
    </div>
  );
};

export default Header;
