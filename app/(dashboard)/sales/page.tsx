import { DataTable } from '@/components/DataTable/DataTable';
import { salesColumn, salesData } from '@/constants/tableData';
import Image from 'next/image';
import React from 'react';
import Triangle from '../assets/triangle.svg';
import Refresh from '@/components/DataTable/Refresh/Refresh';
import FilterBtn from '@/components/DataTable/Filter/Filter';
import Export from '@/components/DataTable/Export/Export';
import SearchBar from '@/components/DataTable/Search/Search';

const Sales = () => {
  return (
    <div className="py-[52px]">
      <p>Sales</p>
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
                  Total Revenue{' '}
                  <span className="text-[10px] text-[#64748B]"> / Today</span>
                </p>
                <h1 className="font-semibold text-2xl min-[400px]:text-3xl min-[1160px]:text-4xl">
                  ₦ 12,010,921
                </h1>
              </div>
            </div>
            <div className="text-end text-xs">
              <p className="text-[#1E293B] mb-1">+20 Increase</p>
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
                  Orders{' '}
                  <span className="text-[10px] text-[#64748B]"> / Today</span>
                </p>
                <h1 className="font-semibold text-2xl min-[400px]:text-3xl min-[1160px]:text-4xl">
                  10
                </h1>
              </div>
            </div>
            <div className="text-end text-xs">
              <p className="text-[#1E293B] mb-1">+2 Orders</p>
              <p className="text-[#64748B]">vs yesterday</p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#CBD5E1] rounded-[10px] p-5 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <SearchBar />
            <div className="flex gap-4">
              <Refresh />
              <FilterBtn />
            </div>
            <Export />
          </div>
          <div className="text-center">
            <DataTable columns={salesColumn} data={salesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
