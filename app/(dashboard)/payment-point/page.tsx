import { DataTable } from '@/components/DataTable/DataTable';
import Export from '@/components/DataTable/Export/Export';
import FilterBtn from '@/components/DataTable/Filter/Filter';
import SearchBar from '@/components/DataTable/Search/Search';
import { paymentpointColumn, paymentpointData } from '@/constants/tableData';
import { ChevronDown, RefreshCcw } from 'lucide-react';
import React from 'react';
import AddnewPaymentpoint from './_component/AddnewPaymentpoint';

const PaymentPoint = () => {
  return (
    <div className="pt-5 pb-[52px]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="bg-white py-3 px-5 gap-1 text-center border border-[#CBD5E1] rounded-[10px] text-[#0F172A]">
            <p className="flex items-center gap-2">
              Active Payment Points <RefreshCcw size={16} strokeWidth={2.5} />
            </p>
            <h1 className="font-semibold text-2xl min-[400px]:text-3xl min-[1160px]:text-4xl">
              2
            </h1>
          </div>
          <div className="flex items-center gap-7 text-sm">
            <div className="flex w-[240px] h-12 items-center justify-between px-[10px] bg-[#F1F5F9] rounded-[40px] text-[#475569]">
              <button
                type="button"
                className="bg-transparent hover:bg-[#DEE4FF] py-2 px-4 rounded-[20px]"
              >
                Day
              </button>
              <button
                type="button"
                className="bg-transparent hover:bg-[#DEE4FF] py-2 px-4 rounded-[20px]"
              >
                Week
              </button>
              <button
                type="button"
                className="bg-transparent hover:bg-[#DEE4FF] py-2 px-4 rounded-[20px]"
              >
                Month
              </button>
            </div>
            <button
              type="button"
              className="bg-transparent text-[#020C42] rounded-[8px] h-9 px-3 flex items-center justify-center gap-1 border border-[#94A3B8] font-semibold"
            >
              This Year <ChevronDown size={18} />
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <Export />
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-[10px] p-5 flex flex-col gap-5">
          <div className="flex items-center justify-between gap-10 max-w-[15rem] min-w-full overflow-auto">
            <div className="flex gap-5">
              <SearchBar />
              <div className="flex gap-3 font-semibold text-sm">
                <button
                  type="button"
                  className="bg-transparent text-black rounded-[8px] h-9 px-2 flex items-center justify-center gap-1 border border-[#94A3B8]"
                >
                  All <ChevronDown size={16} />
                </button>
                <button
                  type="button"
                  className="bg-[#DEE4FF] text-black rounded-[8px] w-20 h-9 px-2 flex items-center justify-center gap-1"
                >
                  Print
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <AddnewPaymentpoint />
              <FilterBtn />
            </div>
          </div>
          <div className="">
            <DataTable columns={paymentpointColumn} data={paymentpointData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPoint;
