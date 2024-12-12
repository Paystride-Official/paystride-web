import { CloudDownload } from 'lucide-react';
import React from 'react';

const Export = () => {
  return (
    <button
      type="button"
      className="bg-[#091F8E] text-white rounded-[8px] w-24 h-9 flex items-center justify-center gap-1 font-semibold text-sm"
    >
      <CloudDownload size={16} strokeWidth={3} />
      Export
    </button>
  );
};

export default Export;
