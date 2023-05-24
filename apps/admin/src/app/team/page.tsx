import { PartialPageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { use } from 'react';
import Member from '@/components/Member';
import { headers } from '@/lib';
const page = () => {
  const users = use(fetchData());
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="grid px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NON-Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">NON team을 소개합니다.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {users.results.map((el: PartialPageObjectResponse) => {
            return <Member key={el.id} pageUrl={el.id}></Member>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default page;

export async function fetchData() {
  // const headers = {
  //   Authorization: 'Bearer secret_nt35pPtdH9T0Ak2hTS01bgrRRJJ48v1Gia4xMADThUL',
  //   'Notion-Version': '2022-06-28',
  //   'Content-Type': 'application/json',
  // };

  const res = await fetch(`https://api.notion.com/v1/databases/e7c9516055cd4c7aba5dbaf6f616db03/query`, {
    method: 'POST',
    headers,
    cache: 'force-cache',
  });

  const data = await res.json();

  return data as QueryDatabaseResponse;
}
