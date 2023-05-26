import React from 'react';

const MemberItem = () => {
  return (
    <div className="w-full p-2 lg:w-1/3 md:w-1/2">
      <div className="flex items-center h-full p-4 border border-gray-200 rounded-lg">
        <img
          alt="team"
          className="flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full"
          src="https://dummyimage.com/108x98"
        />
        <div className="flex-grow">
          <h2 className="font-medium text-gray-900 title-font">000</h2>
          <p className="text-gray-500">LEADER</p>
        </div>
      </div>
    </div>
  );
};

export default MemberItem;
