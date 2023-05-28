import { PartialPageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { Inter } from 'next/font/google';
import React from 'react';
import { use } from 'react';
import Member from '@/components/member/Member';
// import MemberList from '@/components/member/MemberList';
import { headers } from '@/lib';
const inter = Inter({ subsets: ['latin'] });
const page = () => {
  const users = use(fetchData());

  return (
    <main className={`flex h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="py-24 sm:py-32">
        <div className="grid px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">NON-Team</h2>
            <p className="mt-6 text-lg leading-8">NON team을 소개합니다.</p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {users.results.map((el: PartialPageObjectResponse) => {
              return <Member key={el.id} pageUrl={el.id}></Member>;
            })}
          </ul>
        </div>
      </div>
      {/* <MemberList /> */}
    </main>
  );
};

export default page;

export async function fetchData() {
  const res = await fetch(`https://api.notion.com/v1/databases/e7c9516055cd4c7aba5dbaf6f616db03/query`, {
    method: 'POST',
    headers,
    cache: 'force-cache',
  });

  const data = await res.json();

  return data as QueryDatabaseResponse;
}
