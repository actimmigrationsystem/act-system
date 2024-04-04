import { ReactNode } from "react";
import Sidebar from "./SideBar";
import DashboardNavBar from "./DashboardNavBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <DashboardNavBar />
        <main className="flex-1 p-5 overflow-y-auto bg-gray-100 dark:bg-gray-800 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
