import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";
import { Menu, Transition } from "@headlessui/react";
import ThemeButton from "../../components/ThemeButton";
import { IoClose } from "react-icons/io5";
import {
  SearchIcon,
  BellIcon,
  AppsIcon,
} from "../../components/dashboard/icons";

const DropdownProfile = [
  {
    text: "Dashboard",
    path: "/client_dashboard",
  },
  {
    text: "Profile",
    path: "/profile",
  },
  {
    text: "Help",
    path: "/help",
  },
  {
    text: "Sign out",
    path: "/users/sign_in",
  },
];

const notificationItems = [
  {
    name: "John Doe",
    message: "You have a new document awaiting your review.",
    time: "a few moments ago",
  },
  {
    name: "Jane Smith",
    message: "Jane Smith requested access to document XYZ.",
    time: "10 minutes ago",
  },
  {
    name: "Legal Team",
    message:
      "Legal Team has updated the status of case ABC. Click here to view.",
    time: "44 minutes ago",
  },
];

const classNames = (...classes: (false | string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const DashboardNavBar = () => {
  return (
    <>
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center">
          <div className="flex items-center">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <CiMenuBurger className="w-6 h-6" />
              <IoClose className="hidden w-6 h-6" />
            </button>
            <form action="#" method="GET" className="hidden lg:block lg:pl-3.5">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end space-x-4">
            {/* Notifications */}
            <Menu as="div" className="relative z-40">
              <Menu.Button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                <span className="sr-only">View notifications</span>
                <BellIcon />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {notificationItems.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <div className="font-bold">{item.name}</div>
                          <div className="text-gray-500">{item.message}</div>
                          <div className="text-xs text-gray-500">
                            {item.time}
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Apps */}
            <Menu as="div" className="relative z-40">
              <Menu.Button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                <span className="sr-only">View Apps</span>
                <AppsIcon />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {notificationItems.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          <div className="font-bold">{item.name}</div>
                          <div className="text-gray-500">{item.message}</div>
                          <div className="text-xs text-gray-500">
                            {item.time}
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Profile */}
            <Menu as="div" className="relative z-40">
              <Menu.Button className="p-2 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                <IoPersonCircle className="h-8 w-8" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {DropdownProfile.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <Link
                          to={item.path}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.text}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="">
            {/* Theme Toggle */}
            <ThemeButton />
          </div>
        </div>
      </nav>
    </>
  );
};
export default DashboardNavBar;