import { RefreshCcw } from 'lucide-react';
import React from 'react';

const Refresh = () => {
  return (
    <button
      type="button"
      className="bg-[#DEE4FF] text-black rounded-[8px] w-24 h-9 px-3 flex items-center justify-center gap-1 font-semibold text-sm"
    >
      <RefreshCcw size={16} strokeWidth={2.5} />
      Refresh
    </button>
  );
};

export default Refresh;
