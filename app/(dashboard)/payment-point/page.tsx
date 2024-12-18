import { DataTable } from '@/components/DataTable/DataTable';
import Export from '@/components/DataTable/Export/Export';
import FilterBtn from '@/components/DataTable/Filter/Filter';
import SearchBar from '@/components/DataTable/Search/Search';
import { paymentpointColumn, paymentpointData } from '@/constants/tableData';
import { RefreshCcw } from 'lucide-react';
import React from 'react';
import AddnewPaymentpoint from './_component/AddnewPaymentpoint';

const PaymentPoint = () => {
  return (
    <div className="pt-5 pb-[52px]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="bg-white py-3 px-5 gap-1 text-center border border-[#CBD5E1] rounded-[10px] text-[#0F172A] w-fit">
            <p className="flex items-center gap-2">
              Active Payment Points <RefreshCcw size={16} strokeWidth={2.5} />
            </p>
            <h1 className="font-semibold text-2xl min-[400px]:text-3xl min-[1160px]:text-4xl">
              2
            </h1>
          </div>
          <div className="flex items-center gap-7 text-sm w-full min-[450px]:w-auto justify-between">
            <div className="flex w-[180px] min-[450px]:w-[240px] h-10 min-[450px]:h-12 items-center justify-between px-2 min-[450px]:px-[10px] bg-[#F1F5F9] rounded-[40px] text-[#475569]">
              <button
                type="button"
                className="bg-transparent hover:bg-[#DEE4FF] py-1 min-[450px]:py-2 px-[10px] min-[450px]:px-4 rounded-[20px]"
              >
                Day
              </button>
              <button
                type="button"
                className="bg-transparent hover:bg-[#DEE4FF] py-1 min-[450px]:py-2 px-[10px] min-[450px]:px-4 rounded-[20px]"
              >
                Week
              </button>
              <button
                type="button"
                className="bg-transparent hover:bg-[#DEE4FF] py-1 min-[450px]:py-2 px-[10px] min-[450px]:px-4 rounded-[20px]"
              >
                Month
              </button>
            </div>
            <select className="bg-transparent text-[#020C42] rounded-[8px] h-9 px-1 outline-none min-[450px]:px-3 border border-[#94A3B8] font-semibold">
              <option value="">This year</option>
              <option value="2024">2026</option>
              <option value="2024">2025</option>
            </select>
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
                <select className="bg-transparent text-black rounded-[8px] h-9 px-1 outline-none gap-1 border border-[#94A3B8]">
                  <option value="">All</option>
                  <option value="2024">Point</option>
                  <option value="2024">Staff</option>
                </select>
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
