import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CgProfile } from "react-icons/cg";
import DashboardLogo from "../../components/DashboardLogo";
import { Menu, Transition } from "@headlessui/react";
import ThemeButton from "../../components/ThemeButton";
import {
  SearchIcon,
  BellIcon,
  SVG1,
  SVG6,
  AppsIcon,
} from "../../components/dashboard/icons";
import Sidebar from "./SideBar";

const DropdownProfile = [
  {
    text: "Dashboard",
    path: "/dashboard",
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
     path: "/login",
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
  // const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleProfileDropdown = () => {
  //   setIsProfileDropdownOpen(!isProfileDropdownOpen);
  // };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <>
      <Sidebar />
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Bars3Icon className="w-6 h-6" />
                <XMarkIcon className="hidden w-6 h-6" />
              </button>
              <Link to="/" className="flex ml-2 md:mr-24">
                <DashboardLogo />
              </Link>
              <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-3.5"
              >
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-96">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SVG1 />
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
            <div className="flex items-center">
              {/* <!-- Search mobile --> */}
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Search</span>
                <SearchIcon />
              </button>
              {/* <!-- Notifications --> */}

              <Menu as="div" className="relative">
                <Menu.Button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                  <span className="sr-only">View notifications</span>
                  <BellIcon />
                </Menu.Button>
                <Menu.Items className=" w-96 absolute right-0 z-50 w-l my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700">
                  <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    Notifications
                  </div>
                  <div>
                    {notificationItems.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`flex px-4 py-3 border-b ${
                              active
                                ? "bg-gray-100"
                                : "hover:bg-gray-100 dark:hover:bg-gray-600"
                            } dark:border-gray-600`}
                          >
                            <div className="flex-shrink-0">
                              <div className="rounded-full w-11 h-11">
                                <BellIcon />
                              </div>
                            </div>
                            <div className="w-full pl-3">
                              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                  {item.name}
                                </span>
                                : {item.message}
                              </div>
                              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                {item.time}
                              </div>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block py-2 text-base font-normal text-center ${
                          active
                            ? "bg-gray-100"
                            : "hover:bg-gray-100 dark:hover:bg-gray-600"
                        } text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:underline`}
                      >
                        <div className="inline-flex items-center ">
                          <SVG6 />
                          View all
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>

              {/* <!-- Apps --> */}
              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Search</span>
                <SearchIcon />
              </button>
              {/* <!-- Apps --> */}

              <Menu as="div" className="relative">
                <Menu.Button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
                  <span className="sr-only">Applications</span>
                  <AppsIcon />
                </Menu.Button>
                <Menu.Items className=" w-96 absolute right-0 z-50 w-l my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700">
                  <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    Application Progress
                  </div>
                  <div>
                    {notificationItems.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`flex px-4 py-3 border-b ${
                              active
                                ? "bg-gray-100"
                                : "hover:bg-gray-100 dark:hover:bg-gray-600"
                            } dark:border-gray-600`}
                          >
                            <div className="flex-shrink-0">
                              <div className="rounded-full w-11 h-11">
                                <AppsIcon />
                              </div>
                            </div>
                            <div className="w-full pl-3">
                              <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                  {item.name}
                                </span>
                                : {item.message}
                              </div>
                              <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                {item.time}
                              </div>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block py-2 text-base font-normal text-center ${
                          active
                            ? "bg-gray-100"
                            : "hover:bg-gray-100 dark:hover:bg-gray-600"
                        } text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:underline`}
                      >
                        <div className="inline-flex items-center ">
                          <SVG6 />
                          View all
                        </div>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              {/* theme-toggle */}
              <ThemeButton />
              <div
                id="tooltip-toggle"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Toggle dark mode
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              {/* <!-- Profile --> */}
              <div className="flex items-center ml-3">
                <div>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">user menu</span>
                        <CgProfile
                          className="h-8 w-8"
                          style={{ color: "white" }}
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {DropdownProfile.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }: { active: boolean }) => (
                              <Link
                                to={item.path}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-900"
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavBar;
