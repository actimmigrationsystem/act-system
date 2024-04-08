import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SiGoogleforms } from "react-icons/si";
import { IoDocuments } from "react-icons/io5";
import { SiProgress } from "react-icons/si";
import { TiMessages } from "react-icons/ti";
import DashboardLogo from "../../components/DashboardLogo";

const SidebarMenuItems = [
  {
    text: "Dashboard",
    icon: <MdDashboard />,
    path: "/client_dashboard",
    subMenu: [],
  },
  {
    text: "Documents",
    icon: <IoDocuments />,
    path: "/documentation",
    subMenu: [],
  },
  {
    text: "Forms",
    icon: <SiGoogleforms />,
    path: "/forms",
    subMenu: [],
  },
  {
    text: "Messages",
    icon: <TiMessages />,
    path: "/messages",
    subMenu: [],
  },
  {
    text: "Settings",
    icon: <CiSettings />,
    path: "/settings",
    subMenu: [],
  },
  {
    text: "Payments",
    icon: <MdPayments />,
    path: "/payments",
    subMenu: [],
  },
  {
    text: "Submissions",
    icon: <SiProgress />,
    path: "/submissions",
    subMenu: [],
  },
  {
    text: "Appointments",
    icon: <SiProgress />,
    path: "/appointments",
    subMenu: [],
  },
  {
    text: "Sign out",
    icon: <GoSignOut />,
    path: "/users/sign_in",
    subMenu: [],
  },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 h-full bg-gray-800 text-white">
      {/* Sidebar header */}
      <Link to="/" className="p-4">
        <DashboardLogo />
      </Link>
  

      {/* Sidebar menu items */}
      <nav className="flex-1">
        <ul>
          {SidebarMenuItems.map((menuItem, index) => (
            <li key={index}>
              <Link
                to={menuItem.path}
                className="flex items-center space-x-4 p-4 hover:bg-gray-700"
              >
                {menuItem.icon}
                <span>{menuItem.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
