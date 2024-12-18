'use client';
import { DataTable } from '@/components/DataTable/DataTable';
import { DatePicker } from '@/components/DataTable/DatePicker/DatePicker';
import Export from '@/components/DataTable/Export/Export';
import FilterBtn from '@/components/DataTable/Filter/Filter';
import Refresh from '@/components/DataTable/Refresh/Refresh';
import SearchBar from '@/components/DataTable/Search/Search';
import { settlementsColumn, settlementsData } from '@/constants/tableData';
import { RefreshCcw } from 'lucide-react';
import React from 'react';
import AuthorizePayout from './_components/AuthorizePayout';

const Settlements = () => {
  return (
    <div className="pt-5 pb-[52px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start bg-white p-3 border border-[#CBD5E1] rounded-[10px] text-[#0F172A] max-w-[448px] h-[130px]">
          <div className="flex justify-end w-full">
            <AuthorizePayout />
          </div>
          <div className="pl-1 pt-3 min-[450px]:pt-0">
            <p className="">Available Balance</p>
            <h1 className="flex items-center gap-2 font-semibold text-2xl min-[400px]:text-3xl min-[1160px]:text-4xl">
              ₦12,010,921 <RefreshCcw size={16} strokeWidth={2.5} />
            </h1>
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-[10px] p-5 flex flex-col gap-5">
          <div className="flex items-center justify-between gap-5 max-w-[15rem] min-w-full overflow-auto ">
            <DatePicker />
            <SearchBar />
            <div className="flex gap-3">
              <Refresh />
              <FilterBtn />
            </div>
            <Export />
          </div>
          <div className="">
            <DataTable columns={settlementsColumn} data={settlementsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settlements;
