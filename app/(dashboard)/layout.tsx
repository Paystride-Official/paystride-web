'use client';

import Sidebar from '@/components/Sidebar/Sidebar';
import { usePathname } from 'next/navigation';
import userImage from '@/app/assets/userImage.svg';
import bell from '@/app/assets/bell.svg';
import Image from 'next/image';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full bg-[#F8F8F8]">
        <div className="my-[13px] mx-[20px] flex justify-between border-b border-b-[#CBD5E1] pb-5">
          <h1 className="text-[#000000] text-2xl font-semibold">
            {pathname.split('/')[1]}
          </h1>

          <div className="flex justify-center items-center">
            <div className="">
              <Image src={userImage} alt="Logo" width={40} height={40} />
            </div>
            <div className="flex">
              <div className="flex justify-center flex-col ml-[10px] mr-[28px]">
                <h1 className="text-sm font-semibold text-[#000000]">
                  User Name
                </h1>
                <h1 className="text-xs font-normal text-[#475569]">
                  user@paystride.com
                </h1>
              </div>

              <div className="bg-[#EBEBEB] w-[60px] min-h-[60px]  min-w-[60px] h-[60px] flex justify-center items-center rounded-3xl">
                <Image src={bell} alt="Logo" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
        <main className="flex-1 bg-[#F8FAFC] px-4">{children}</main>
      </div>
    </div>
  );
}
