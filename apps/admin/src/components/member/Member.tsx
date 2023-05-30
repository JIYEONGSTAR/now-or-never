import React, { use } from 'react';
import MemberItem from './MemberItem';

import { getMember } from '@/lib/getMember';
const Member = ({ pageUrl }: { pageUrl: string }) => {
  const member = use(getMember(pageUrl));
  const image = (member.cover?.type === 'file' && member.cover?.file.url) || '';
  const name = (member.properties['Name'].type === 'title' && member.properties['Name'].title[0].plain_text) || '';
  const phoneNumber =
    (member.properties['전화번호'].type === 'phone_number' && member.properties['전화번호'].phone_number) || '';
  const role = (member.properties['역할'].type === 'select' && member.properties['역할'].select?.name) || '';

  return <MemberItem image={image} name={name} phone_number={phoneNumber} role={role} />;
};

export default Member;
