import React from 'react';
import successIcon from '@/app/assets/successIcon.svg';
import Image from 'next/image';
import { AlertDialogCancel } from '@/components/ui/alert-dialog';

type SuccessModalProp = {
  title?: string;
  close: string;
  message: string;
};

const SuccesModal = ({ title, message, close }: SuccessModalProp) => {
  return (
    <div className="w-[85%] min-w-full md:w-[550px] h-[320px] flex items-center justify-center rounded-[20px]">
      <div className="">
        <div className="max-w-[360px] flex flex-col items-center justify-evenly min-h-72">
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
          <Image
            src={successIcon}
            alt="Logo"
            width={126}
            height={120}
            className="w-24 sm:w-[120px]"
          />
          <span className="text-xl font-semibold text-center text-[#0F172A]">
            {message}
          </span>
          <AlertDialogCancel className="bg-[#091F8E] text-white rounded-[8px] w-full max-w-[360px] h-9 mt-3 flex items-center justify-center gap-1 font-semibold text-sm capitalize">
            {close}
          </AlertDialogCancel>
        </div>
      </div>
    </div>
  );
};

export default SuccesModal;
