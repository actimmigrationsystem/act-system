import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdPayments } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { SiGoogleforms } from "react-icons/si";
import { IoDocuments } from "react-icons/io5";
import { SiProgress } from "react-icons/si";
import { TiMessages } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import DashboardLogo from "../../components/DashboardLogo";

const SidebarMenuItems = [
  {
    text: "Dashboard",
    icon: <MdDashboard />,
    path: "/client_dashboard",
    subMenu: [],
  },
  {
    text: "Appointments",
    icon: <FaCalendarAlt />,
    path: "/appointments",
    subMenu: [],
  },
  {
    text: "Enquiries",
    icon: <BsFillPatchQuestionFill />,
    path: "/enquiries",
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
  // {
  //   text: "Payments",
  //   icon: <MdPayments />,
  //   path: "/payments",
  //   subMenu: [],
  // },
  {
    text: "Submissions",
    icon: <SiProgress />,
    path: "/submissions",
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`flex flex-col h-full bg-gray-800 text-white ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="h-8 w-8 p-4 mb-8">
        <Link to="/">
          <DashboardLogo companyName={isOpen ? "ACTDashboard" : ""} />
        </Link>
      </div>
      {/* Toggle icon for mobile */}
      <div
        className="lg:hidden absolute top-0 right-0 p-4"
        onClick={(e) => {
          e.stopPropagation();
          toggleSidebar();
        }}
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-white" />
        )}
      </div>

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
                {isOpen && <span>{menuItem.text}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icon to fully open sidebar */}
      {!isOpen && (
        <div className="flex justify-center pt-4">
          <Bars3Icon
            className="h-8 w-8 text-white cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
