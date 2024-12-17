import { DataTable } from '@/components/DataTable/DataTable';
import { transactionsColumn, transactionsData } from '@/constants/tableData';
import Image from 'next/image';
import React from 'react';
import Triangle from '../assets/triangle.svg';
import Refresh from '@/components/DataTable/Refresh/Refresh';
import FilterBtn from '@/components/DataTable/Filter/Filter';
import Export from '@/components/DataTable/Export/Export';
import SearchBar from '@/components/DataTable/Search/Search';
import { DatePicker } from '@/components/DataTable/DatePicker/DatePicker';

const Transactions = () => {
  return (
    <div className="pt-5 pb-[52px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-white py-6 px-5 gap-1 flex items-center justify-between border border-[#CBD5E1] rounded-[10px] flex-[1]">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src={Triangle}
                alt="triangle"
                width={35}
                height={26}
                className="w-7 min-[400px]:w-auto"
              />
              <div>
                <p className="text-sm">
                  Total Transactions{' '}
                  <span className="text-[10px] text-[#64748B]"> / Today</span>
                </p>
                <h1 className="font-semibold text-2xl min-[400px]:text-3xl min-[1160px]:text-4xl">
                  165
                </h1>
              </div>
            </div>
            <div className="text-start text-xs">
              <p className="text-[#1E293B] mb-1">+40 Transaction</p>
              <p className="text-[#64748B]">vs yesterday</p>
            </div>
          </div>
          <div className="bg-white py-6 px-5 gap-1 flex items-center justify-between border border-[#CBD5E1] rounded-[10px] flex-[1]">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src={Triangle}
                alt="triangle"
                width={35}
                height={26}
                className="w-7 min-[400px]:w-auto"
              />
              <div>
                <p className="text-sm">
                  Payment Issue Alert{' '}
                  <span className="text-[10px] text-[#64748B]"> / Today</span>
                </p>
                <h1 className="font-semibold text-2xl min-[400px]:text-3xl min-[1160px]:text-4xl">
                  2
                </h1>
              </div>
            </div>
            <div className="text-start text-xs">
              <p className="text-[#1E293B] mb-1">+2 Payment Issue</p>
              <p className="text-[#64748B]">vs yesterday</p>
            </div>
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
          <div className="text-center">
            <DataTable columns={transactionsColumn} data={transactionsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
