import Image from 'next/image';
import React from 'react';
import Visa from '../assets/visa.svg';
import Master from '../assets/master.svg';

type Props = {
  method: 'Transfer' | 'Visa' | 'Master' | 'Cash';
};

const TableMethod = ({ method }: Props) => {
  if (method === 'Transfer') {
    return (
      <div className="flex items-center justify-center">
        <p>{method}</p>
      </div>
    );
  } else if (method === 'Visa') {
    return (
      <div className="flex items-center justify-center">
        <Image src={Visa} alt="visa" width={35} height={24} />
      </div>
    );
  } else if (method === 'Master') {
    return (
      <div className="flex items-center justify-center">
        <Image src={Master} alt="visa" width={35} height={24} />
      </div>
    );
  } else if (method === 'Cash') {
    return (
      <div className="flex items-center justify-center">
        <p>{method}</p>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <p className="text-red-500">Not available</p>
      </div>
    );
  }
};

export default TableMethod;
