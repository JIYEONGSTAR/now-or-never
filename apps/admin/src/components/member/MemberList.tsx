import React from 'react';
import MemberItem from './MemberItem';

const MemberList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">NON Team</h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">우리 NON team을 소개합니다.</p>
        </div>
        <div className="flex flex-wrap -m-2">
          <MemberItem />
        </div>
      </div>
    </section>
  );
};

export default MemberList;
