import { ReactNode } from "react";
import Sidebar from "./SideBar";
import DashboardNavBar from "./DashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <DashboardNavBar />
        <main className="flex-1 p-5 overflow-y-auto bg-gray-100 dark:bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
