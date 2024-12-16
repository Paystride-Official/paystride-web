'use client';
import { ColumnDef } from '@tanstack/react-table';
import { ChevronsUpDown, MoreHorizontal, SquarePen } from 'lucide-react';
import Corey from '@/app/(dashboard)/assets/corey.svg';
import Kaiya from '@/app/(dashboard)/assets/kaiya.jpg';
import SalesName from '@/components/DataTable/SalesName/SalesName';
import DateTime from '@/components/DataTable/DateTime/DateTime';
import TableStatus from '@/components/DataTable/TableSatus/TableStatus';
import TableMethod from '@/components/DataTable/TableMethod/TableMethod';
import { Button } from '@/components/ui/button';
import EditModal from '@/app/(dashboard)/payment-point/_component/EditModal';

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

type TransactionsData = {
  date: string;
  time: string;
  transId: string;
  accountNo: string;
  paypoint: number;
  method: 'Transfer' | 'Visa' | 'Master' | 'Cash';
  status: 'Completed' | 'Chargeback';
  amount: string;
};

type PaymentpointData = {
  paymentPoint: string;
  onDuty: string;
  phone: string;
  account: string;
  status: 'Active' | 'Inactive';
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
    image: Kaiya,
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

export const transactionsData: TransactionsData[] = [
  {
    date: 'Oct 12, 2024',
    time: '12:34 PM',
    transId: '6748928879999003',
    accountNo: '00011000',
    paypoint: 6,
    method: 'Visa',
    status: 'Completed',
    amount: '₦ 48608.70',
  },
  {
    date: 'Oct 12, 2024',
    time: '12:20 PM',
    transId: '8598057624329743',
    accountNo: '67612376',
    paypoint: 4,
    method: 'Master',
    status: 'Completed',
    amount: '₦ 51849.28',
  },
  {
    date: 'Oct 12, 2024',
    time: '12:14 PM',
    transId: '80451713903781247',
    accountNo: '02396629',
    paypoint: 2,
    method: 'Visa',
    status: 'Chargeback',
    amount: '₦ 37266.67',
  },
  {
    date: 'Oct 12, 2024',
    time: '12:01 PM',
    transId: '39037819584578671',
    accountNo: '93411981',
    paypoint: 3,
    method: 'Visa',
    status: 'Completed',
    amount: '₦ 64811.60',
  },
  {
    date: 'Oct 12, 2024',
    time: '11:47 AM',
    transId: '52657487950410842',
    accountNo: '96677229',
    paypoint: 2,
    method: 'Transfer',
    status: 'Completed',
    amount: '₦ 59950.73',
  },
  {
    date: 'Oct 12, 2024',
    time: '11:38 AM',
    transId: '87950410362217904',
    accountNo: '69250338',
    paypoint: 5,
    method: 'Master',
    status: 'Completed',
    amount: '₦ 38886.96',
  },
  {
    date: 'Oct 12, 2024',
    time: '11:33 AM',
    transId: '36221790792905376',
    accountNo: '18453860',
    paypoint: 6,
    method: 'Visa',
    status: 'Completed',
    amount: '₦ 27544.93',
  },
  {
    date: 'Oct 12, 2024',
    time: '11:27 AM',
    transId: '79290537996524823',
    accountNo: '35327957',
    paypoint: 4,
    method: 'Cash',
    status: 'Completed',
    amount: '₦ 56710.15',
  },
  {
    date: 'Oct 12, 2024',
    time: '11:20 AM',
    transId: '67631440435808677',
    accountNo: '74717812',
    paypoint: 4,
    method: 'Cash',
    status: 'Completed',
    amount: '₦ 48608.70',
  },
];

export const transactionsColumn: ColumnDef<TransactionsData>[] = [
  {
    accessorKey: 'date',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">
        Date & Time
      </div>
    ),
    cell: ({ row }) => (
      <DateTime date={row.original.date} time={row.original.time} />
    ),
  },
  {
    accessorKey: 'transId',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">
        Transaction ID
      </div>
    ),
  },
  {
    accessorKey: 'accountNo',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">
        Account No.
      </div>
    ),
  },
  {
    accessorKey: 'paypoint',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">
        Paypoint
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
    accessorKey: 'status',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">Status</div>
    ),
    cell: ({ row }) => <TableStatus status={row.original.status} />,
  },
  {
    accessorKey: 'amount',
    header: () => (
      <div className="whitespace-nowrap text-center font-semibold">Amount</div>
    ),
  },
];

export const paymentpointData: PaymentpointData[] = [
  {
    paymentPoint: '2',
    onDuty: 'Motunde Adegoke',
    phone: '438-712-7475',
    account: '000123456',
    status: 'Active',
  },
  {
    paymentPoint: '1',
    onDuty: 'Amarachi Okoli',
    phone: '788-806-6553',
    account: '000579216',
    status: 'Active',
  },
  {
    paymentPoint: '3',
    onDuty: 'None',
    phone: '338-650-5803',
    account: '00034889',
    status: 'Inactive',
  },
  {
    paymentPoint: '4',
    onDuty: 'None',
    phone: '751-346-8693',
    account: '00034889',
    status: 'Inactive',
  },
];

export const paymentpointColumn: ColumnDef<PaymentpointData>[] = [
  {
    accessorKey: 'paymentPoint',
    header: () => (
      <div className="whitespace-nowrap font-semibold">Payment Point</div>
    ),
  },
  {
    accessorKey: 'onDuty',
    header: () => (
      <div className="whitespace-nowrap font-semibold">On-Duty</div>
    ),
  },
  {
    accessorKey: 'phone',
    header: () => (
      <div className="whitespace-nowrap font-semibold">Phone Number</div>
    ),
  },
  {
    accessorKey: 'account',
    header: () => (
      <div className="whitespace-nowrap font-semibold">Account</div>
    ),
  },
  {
    accessorKey: 'status',
    header: () => <div className="whitespace-nowrap font-semibold">Status</div>,
    cell: ({ row }) => <TableStatus status={row.original.status} />,
  },

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <EditModal
          paymentPoint={row.original.paymentPoint}
          status={row.original.status}
        />
      );
    },
  },
];
