import Sidebar from '@/components/Sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-[#F8FAFC] px-4">{children}</main>
    </div>
  );
}
