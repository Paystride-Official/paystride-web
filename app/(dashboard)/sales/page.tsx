import { DataTable } from '@/components/DataTable/DataTable';
import { salesColumn, salesData } from '@/constants/tableData';
import React from 'react';

const Sales = () => {
  return (
    <div>
      <p>Sales</p>
      <div className="text-center bg-white p-5">
        <DataTable columns={salesColumn} data={salesData} />
      </div>
    </div>
  );
};

export default Sales;
