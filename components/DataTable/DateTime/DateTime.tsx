import React from 'react';

type DateProps = {
  date: string;
  time: string;
};

const DateTime = ({ date, time }: DateProps) => {
  return (
    <div className="font-medium whitespace-nowrap flex items-center gap-2 text-start">
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;
