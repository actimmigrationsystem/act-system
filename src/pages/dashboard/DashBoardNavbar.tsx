import React, { useState, useEffect, useRef } from "react";
import { useUser } from "../../components/auth/UserContext";
import { BiSearch, BiBell, BiMessage } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

interface DropdownItem {
  text: string;
  path: string;
}

interface NotificationItem {
  notif: string;
  time: string;
}

interface MessageItem {
  name: string;
  message: string;
  time: string;
}

const DropdownProfile: DropdownItem[] = [
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
const notificationItems: NotificationItem[] = [
  {
    notif: "You have a new document awaiting your review.",
    time: "a minute ago",
  },
  {
    notif: "You have a new document awaiting your review.",
    time: "12:00:- 2/12/2024",
  },
];

const messageItems: MessageItem[] = [
  {
    name: "Alice",
    message: "Hi there!",
    time: "5 minutes ago",
  },
  {
    name: "Bob",
    message: "How are you doing?",
    time: "12 minutes ago",
  },
  {
    name: "Charlie",
    message: "Meeting at 2 PM today.",
    time: "30 minutes ago",
  },
];
const DashBoardNavbar: React.FC = () => {
  const { email } = useUser();
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);

  const notificationDropdownRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const messageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        !notificationDropdownRef.current ||
        !profileDropdownRef.current ||
        !messageDropdownRef.current ||
        (profileDropdownRef.current.contains(event.target as Node) &&
          !messageDropdownRef.current.contains(event.target as Node)) ||
        (notificationDropdownRef.current.contains(event.target as Node) &&
          !notificationDropdownRef.current.contains(event.target as Node))
      ) {
        return;
      }
      setNotificationOpen(false);
      setProfileOpen(false);
      setMessageOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setProfileOpen(false);
        setMessageOpen(false);
      }
    };

    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

   const handleSignOut = () => {
    // handle sign out
     window.location.href = "/users/sign_in";

   }

  return (
    <nav className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-900 text-white border border-gray-600 rounded-lg px-3 py-2 pl-10 placeholder-gray-400 focus:outline-none focus:ring focus:border-indigo-500 focus:z-10 transition ease-in-out duration-150"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BiSearch className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-6">
            {/* Notifications Dropdown */}
            <div className="relative ml-8">
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={() => {
                  setNotificationOpen(!isNotificationOpen);
                  setMessageOpen(false);
                }}
              >
                <BiBell className="h-6 w-6" />
              </button>
              {isNotificationOpen && (
                <div
                  ref={notificationDropdownRef}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="px-4 py-2 text-sm text-white bg-blue-500">
                    Notifications
                  </div>
                  <div className="py-1" role="none">
                    {notificationItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.notif}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex justify-between">
                          <span>{item.notif}</span>
                          <span className="text-gray-500">{item.time}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Messages Dropdown */}
            <div className="relative ml-8">
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={() => {
                  setMessageOpen(!isMessageOpen);
                  setProfileOpen(false); // Close notification dropdown if open
                }}
              >
                <BiMessage className="h-6 w-6" />
              </button>
              {isMessageOpen && (
                <div
                  ref={messageDropdownRef}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="px-4 py-2 text-sm text-white bg-blue-500">
                    Messages
                  </div>
                  <div className="py-1" role="none">
                    {messageItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.name}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex justify-between">
                          <span>{item.message}</span>
                          <span className="text-gray-500">{item.time}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Profile Dropdown */}
            <div className="relative ml-8">
              <button
                type="button"
                className="text-white focus:outline-none"
                onClick={() => {
                  setProfileOpen(!isProfileOpen);
                  setMessageOpen(false);
                }}
              >
                <CgProfile className="h-6 w-6" />
              </button>
              {isProfileOpen && (
                <div
                  ref={profileDropdownRef}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="px-4 py-2 text-sm text-white bg-blue-500">
                    {email}
                  </div>
                  <hr />
                  <div className="py-1" role="none">
                    {DropdownProfile.map((item, index) => (
                      <a
                        key={index}
                        href={item.path}
                        onClick={
                          item.text === "Sign out" ? handleSignOut : undefined
                        }
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashBoardNavbar;
