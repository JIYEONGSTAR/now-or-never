'use client';

import React from 'react';

const Modal = ({
  isVisible,
  onClose,
  children,
}: {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[600px] flex flex-col">
        <button className="text-xl text-white place-self-end" onClick={() => onClose()}>
          X
        </button>
        <div className="p-2 bg-white rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
