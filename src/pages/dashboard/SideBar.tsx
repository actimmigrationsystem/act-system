import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
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
// import ThemeButton from "../../components/ThemeButton";

interface SidebarMenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
  subMenu: SidebarMenuItem[];
}

const SidebarMenuItems: SidebarMenuItem[] = [
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
    text: "Forms`",
    icon: <SiGoogleforms />,
    path: "/forms",
    subMenu: [],
  },
  {
    text: "Messages`",
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
    path: "/login",
    subMenu: [],
  },
];



const SideBar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="py-3 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex">
          <DashboardLogo />
        </Link>
        <button
          onClick={toggleDropdown}
          className="lg:hidden p-2 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white"
        >
          <Bars3Icon className="w-6 h-6" />
          <XMarkIcon className="hidden w-6 h-6" />
        </button>
      </div>
      <div className="py-4">
        {SidebarMenuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center justify-start px-4 py-3 w-full text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {item.icon}
            <span className="ml-2">{item.text}</span>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 py-3 px-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/signout"
          className="block py-2 text-sm text-gray-700 dark:text-gray-400 hover:underline"
        >
          Help
        </Link>
        <div className="mt-2 border-t border-gray-200 dark:border-gray-700" />
      </div>
    </aside>
  );
};

export default SideBar;
