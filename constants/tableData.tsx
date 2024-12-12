'use client';
import { ColumnDef } from '@tanstack/react-table';
import Image, { StaticImageData } from 'next/image';
import { ChevronsUpDown } from 'lucide-react';
import Corey from '@/app/(dashboard)/assets/corey.svg';
import SalesName from '@/components/DataTable/SalesName/SalesName';
import DateTime from '@/components/DataTable/DateTime/DateTime';
import TableStatus from '@/components/DataTable/TableSatus/TableStatus';
import TableMethod from '@/components/DataTable/TableMethod/TableMethod';

type SalesData = {
  name: string;
  image: string | any;
  phone: string;
  date: string;
  time: string;
  salesOrder: string;
  method: 'Transfer' | 'Visa' | 'Master' | 'Cash';
  amount: string;
  status: 'Pending' | 'Completed';
};

export const salesData: SalesData[] = [
  {
    name: 'Corey Carder',
    image: Corey,
    phone: '08123231212',
    date: '28 Sept 2024',
    time: '12:32 PM',
    salesOrder: 'SO-01',
    method: 'Cash',
    amount: '₦ 327,820',
    status: 'Completed',
  },
  {
    name: 'Kaiya Batista',
    image: Corey,
    phone: '08122222222',
    date: '28 Sept 2024',
    time: '11:17 AM',
    salesOrder: 'SO-02',
    method: 'Cash',
    amount: '₦ 524,512',
    status: 'Pending',
  },
  {
    name: 'Charlie Lucatero',
    image: Corey,
    phone: '08178231213',
    date: '28 Sept 2024',
    time: '10:48 AM',
    salesOrder: 'SO-03',
    method: 'Visa',
    amount: '₦ 163,910',
    status: 'Pending',
  },
  {
    name: 'Karla Bosco',
    image: Corey,
    phone: '9225433854',
    date: '28 Sept 2024',
    time: '10:48 AM',
    salesOrder: 'SO-04',
    method: 'Master',
    amount: '₦ 344,211',
    status: 'Completed',
  },
  {
    name: 'Kiera Herwitz',
    image: Corey,
    phone: '07011111111',
    date: '28 Sept 2024',
    time: '10:04 AM',
    salesOrder: 'SO-05',
    method: 'Cash',
    amount: '₦ 245,865',
    status: 'Completed',
  },
  {
    name: 'Brandon Goyette',
    image: Corey,
    phone: '8254502917',
    date: '28 Sept 2024',
    time: '9:48 AM',
    salesOrder: 'SO-06',
    method: 'Transfer',
    amount: '₦ 245,865',
    status: 'Pending',
  },
  {
    name: 'Alex Zieme',
    image: Corey,
    phone: '08123231212',
    date: '28 Sept 2024',
    time: '9:27 AM',
    salesOrder: 'SO-07',
    method: 'Cash',
    amount: '₦ 245,865',
    status: 'Completed',
  },
];

export const salesColumn: ColumnDef<SalesData>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <div className="whitespace-nowrap">
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="font-semibold flex items-center"
        >
          Name <ChevronsUpDown size={16} />{' '}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <SalesName
        image={row.original.image}
        name={row.original.name}
        phone={row.original.phone}
      />
    ),
  },
  {
    accessorKey: 'date',
    header: () => (
      <div className="whitespace-nowrap font-semibold">Date & Time</div>
    ),
    cell: ({ row }) => (
      <DateTime date={row.original.date} time={row.original.time} />
    ),
  },
  {
    accessorKey: 'salesOrder',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">
        Sales Order
      </div>
    ),
  },
  {
    accessorKey: 'method',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">Method</div>
    ),
    cell: ({ row }) => <TableMethod method={row.original.method} />,
  },
  {
    accessorKey: 'amount',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">Amount</div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">Status</div>
    ),
    cell: ({ row }) => <TableStatus status={row.original.status} />,
  },
];
