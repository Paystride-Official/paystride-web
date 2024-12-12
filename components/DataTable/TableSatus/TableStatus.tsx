import React from 'react';

type Props = {
  status: 'Pending' | 'Completed' | 'Chargeback' | 'Active' | 'Inactive';
};

const TableStatus = ({ status }: Props) => {
  if (status === 'Completed') {
    return (
      <div className="flex items-center justify-center gap-1">
        <div className="h-[6px] w-[6px] rounded-[50%] bg-[#0B8A00]"></div>
        <p>{status}</p>
      </div>
    );
  } else if (status === 'Pending') {
    return (
      <div className="flex items-center justify-center gap-1">
        <div className="h-[6px] w-[6px] rounded-[50%] bg-[#FF8900]"></div>
        <p>{status}</p>
      </div>
    );
  } else if (status === 'Chargeback') {
    return (
      <div className="flex items-center justify-center gap-1">
        <div className="h-[6px] w-[6px] rounded-[50%] bg-[#FF3434]"></div>
        <p>{status}</p>
      </div>
    );
  } else if (status === 'Active') {
    return (
      <div className="flex items-center">
        <p className="text-[#00714F]">{status}</p>
      </div>
    );
  } else if (status === 'Inactive') {
    return (
      <div className="flex items-center">
        <p className="text-[#FF063C]">{status}</p>
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

export default TableStatus;
