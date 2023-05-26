'use client';
import React from 'react';

import Animation from '@/components/lottie/animation';
const Intro = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center w-screen mb-16 text-center lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">운동을 하고 싶지만,</h1>
          <p className="mb-8 leading-relaxed">
            <p>어떻게 해야할지 모르겠다면?</p>
            <p>혼자 하기는 부담스럽다면?</p>
            <p>동기부여가 되지 않는다면? </p>
            <p>운동을 할 공간이 없다면?</p>
            <p> NON과함께라면, 이 모든 것들을 해결할 수 있습니다.</p>
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              활동 보러가기
            </button>
            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
              지원하러가기
            </button>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/4">
          <Animation />
        </div>
      </div>
    </section>
  );
};

export default Intro;
