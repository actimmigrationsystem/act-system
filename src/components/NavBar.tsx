import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-scroll';
import Logo from './Logo';

const navigation = [
  { name: 'Home', to: 'home-section', current: true },
  { name: 'Services', to: 'service-section', current: false },
  { name: 'About Us', to: 'about-section', current: false },
  { name: 'FAQs', to: 'faq-section', current: false },
  { name: 'Contact Us', to: 'contact-section', current: false },
];

const classNames = (...classes: (false | string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const NavBar = () => (
  <Disclosure
    as="nav"
    style={{ backgroundColor: "##b2bfce" }}
    className="shadow-md"
  >
    {({ open }: { open: boolean }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-4">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Logo color="#2393cb" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      className={classNames(
                        item.current
                          ? "bg-sky-700 text-white"
                          : "text-gray-700 hover:bg-sky-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-900"
                          )}
                        >
                          Login
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }: { active: boolean }) => (
                        <Link
                          to="/"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Help
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="flex flex-col items-start space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy
                smooth
                duration={500}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-900 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default NavBar;
