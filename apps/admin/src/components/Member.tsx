import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import Image from 'next/image';
import React, { use } from 'react';
import { headers } from '@/lib';

const Member = ({ pageUrl }: { pageUrl: string }) => {
  const member = use(getMember(pageUrl));
  console.log(member);
  const image = (member.cover?.type === 'file' && member.cover?.file.url) || '';
  const name = member.properties['Name'].type === 'title' && member.properties['Name'].title[0].plain_text;
  const phoneNumber =
    member.properties['전화번호'].type === 'phone_number' && member.properties['전화번호'].phone_number;
  const role = member.properties['역할'].type === 'select' && member.properties['역할'].select?.name;

  return (
    <li>
      <div className="flex items-center gap-x-6">
        <Image
          width={100}
          height={100}
          className="rounded-full"
          src={
            image ||
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          }
          alt=""
        />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
          <p>{phoneNumber}</p>
          <p className="text-sm font-semibold leading-6 text-indigo-600"> {role}</p>
        </div>
      </div>
    </li>
  );
};

export default Member;

async function getMember(pageUrl: string) {
  const res = await fetch(` https://api.notion.com/v1/pages/${pageUrl}`, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json());
  return res as PageObjectResponse;
}
