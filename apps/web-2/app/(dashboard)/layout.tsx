import { Banner } from "@/components/layout/banner";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex h-screen flex-col bg-[url(/images/main-bg.png)] bg-cover bg-center">
      <Banner />
      <div className="flex-1 p-4 sm:p-6">
        <Header />
        {children}
      </div>
      <p className="text-2xs text-neutral-80 pb-10 text-center">
        2025 DOME, All right reserved
      </p>
    </main>
  );
}
