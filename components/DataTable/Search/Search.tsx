import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-[#F8F8F8] border border-[#94A3B8] rounded-[8px] flex items-center px-2 gap-2 h-9 w-60">
      <Search size={20} color="#94A3B8" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        className="text-[#94A3B8] bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;
