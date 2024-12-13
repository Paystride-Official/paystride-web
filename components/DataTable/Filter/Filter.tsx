import React from 'react';
import { Filter } from 'lucide-react';

const FilterBtn = () => {
  return (
    <button
      type="button"
      className="bg-[#DEE4FF] text-black rounded-[8px] w-24 h-9 px-4 flex items-center justify-center gap-1 font-semibold text-sm"
    >
      <Filter size={16} strokeWidth={2.5} />
      Filter
    </button>
  );
};

export default FilterBtn;
