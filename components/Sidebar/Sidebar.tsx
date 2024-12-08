'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  Search,
  LayoutDashboard,
  CircleDollarSign,
  Receipt,
  CreditCard,
  // PiggyBank,
  Package,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Plus,
  ScanEye,
  NotepadTextDashed,
  Landmark,
} from 'lucide-react';

import Paystride from '@/app/assets/paystride.svg';
// interface NavItem {
//   title: string;
//   href: string;
//   icon: React.ElementType;
//   isExpandable?: boolean;
// }

// interface NavSection {
//   title: string;
//   items: NavItem[];
// }

const navigation = [
  {
    title: 'GENERAL',
    items: [
      { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { title: 'Sales', href: '/sales', icon: CircleDollarSign },
      { title: 'Transactions', href: '/transactions', icon: Receipt },
      { title: 'Payment Point', href: '/payment-point', icon: CreditCard },
      { title: 'Settlements', href: '/settlements', icon: Landmark },
      {
        title: 'Inventory',
        href: '/inventory',
        sublinks: [
          { title: 'Add an item', href: '/add-item', icon: Plus },
          { title: 'View Inventory', href: '/inventory', icon: ScanEye },
          { title: 'Draft', href: '/inventory-draft', icon: NotepadTextDashed },
        ],
        icon: Package,
        isExpandable: true,
      },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { title: 'Settings', href: '/settings', icon: Settings },
      { title: 'Support', href: '/support', icon: HelpCircle },
    ],
  },
];

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logging out...');
  };

  return (
    <div className="flex max-h-screen overflow-auto w-72 flex-col bg-[#020C42] text-white">
      {/* Logo */}
      <div className="flex items-center px-6 py-5">
        <Image src={Paystride} alt="Paystride Logo" width={22} height={41} />
        <span className="ml-4 text-xl text-[#6A8F9F] font-semibold">
          Paystride
        </span>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 outline-none transition-colors focus:bg-white/20"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 px-4 py-2">
        {navigation.map((section) => (
          <div key={section.title}>
            <h2 className="px-2 text-xs font-semibold tracking-wider text-gray-400/80">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-white text-[#020817]'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.title}
                      </div>
                      {item.isExpandable && (
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            isActive ? 'text-[#020817]' : 'text-gray-400'
                          }`}
                        />
                      )}
                    </Link>

                    <div className="space-y-2 mt-2">
                      {isActive &&
                        item.isExpandable &&
                        item.sublinks.map((sublink) => (
                          <Link
                            key={sublink.href}
                            className={`group flex items-center  rounded-md bg-[#DEE4FF] px-2 py-2 text-sm text-[#020817] font-bold transition-colors `}
                            href={sublink.href}
                          >
                            <sublink.icon className="mr-3 h-5 w-5" />
                            {sublink.title}
                          </Link>
                        ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 px-4 py-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
