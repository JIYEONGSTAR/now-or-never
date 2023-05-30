'use client';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import Modal from '../ui/Modal';
interface Props {
  image: string;
  name: string;
  phone_number: string;
  role: string;
}
const MemberItem = ({ image, name, phone_number, role }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => {
    console.log('Click');
    setIsVisible(true);
  };
  return (
    <>
      <li onClick={() => openModal()} className="cursor-pointer">
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
            <h3 className="text-base font-semibold leading-7 tracking-tight">{name}</h3>
            <p>{phone_number}</p>
            <p className="text-sm font-semibold leading-6 text-indigo-600"> {role}</p>
          </div>
        </div>
      </li>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight">{name}</h3>
          <p>{phone_number}</p>
          <p className="text-sm font-semibold leading-6 text-indigo-600"> {role}</p>
        </div>
      </Modal>
    </>
  );
};

export default MemberItem;
