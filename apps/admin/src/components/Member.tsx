import { PageObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import Image from 'next/image';
import React, { use } from 'react';
import { headers } from '@/lib';
type Phone = {
  id: string;
  type: 'phone_number';
  phone_number: string;
};
type Name = {
  type: 'title';
  title: RichTextItemResponse[];
  id: string;
};
type Role = {
  type: 'select';
  select: { id: string; name: '멤버' | '회장'; color: string };
  id: string;
};

const Member = ({ pageUrl }: { pageUrl: string }) => {
  const member = use(getMember(pageUrl));
  const image = (member.cover?.type === 'file' && member.cover?.file.url) || '';
  const phone: Phone = member.properties['전화번호'] as Phone;
  const name: Name = member.properties['Name'] as Name;
  const role: Role = member.properties['역할'] as Role;
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
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name.title[0].plain_text}</h3>
          <p>{phone['phone_number']}</p>
          <p className="text-sm font-semibold leading-6 text-indigo-600"> {role.select.name}</p>
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
