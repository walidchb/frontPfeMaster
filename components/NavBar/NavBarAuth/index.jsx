"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MdAlternateEmail,
  MdBusinessCenter,
  MdArrowDropDown,
  MdOutlinePassword,
} from "react-icons/md";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBarAuth({
  currentScreen,
  showOrganisation,
  isShowSideBar,
  showSideBar,
  setShowSideBar,
}) {
  const locales = ["en", "fr"];
  const localePrefix = "always"; // Default
  const { usePathname } = createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
  const locale = useLocale();
  const [navigation, setNavigation] = useState([
    { name: "Home", href: `/${locale}`, current: true },
    { name: "Team", href: "#", current: false },
    { name: "Contact", href: `/${locale}/Contact`, current: false },
    { name: "About", href: `/${locale}/About`, current: false },
  ]);
  const [curScreen, setCurScreen] = useState(currentScreen);

  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const handleChangeLanguage = (localee) => {
    let loc = "";
    if (locale == "fr") {
      loc = "en";
    } else {
      loc = "fr";
    }
    router.replace(`/${loc + pathname}`);
  };
  return (
    <Disclosure style={{ height: "10vh" }} as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto  px-6 ">
            <div className="relative flex h-16 items-center justify-between ">
              <div className=" flex items-center ">
                {isShowSideBar ? (
                  <div
                    onClick={() => setShowSideBar(!showSideBar)}
                    className="cursor-pointer relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {showSideBar ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </div>
                ) : null}
              </div>
              <div className=" flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="hidden sm:flex  items-center  sm:ml-0">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                {showOrganisation ? (
                  <Menu
                    as="div"
                    className=" relative sm:ml-4 w-8/12 md:w-6/12 lg:w-3/12 ">
                    <div>
                      <Menu.Button
                        style={{ height: "5vh" }}
                        className="h-full w-full flex justify-center items-center px-2 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <MdBusinessCenter className="h-5 w-5 mr-2" />

                        <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                          walid chwejefjweifu isjdfsdf{" "}
                        </span>
                        <MdArrowDropDown className="h-5 w-5 " />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}>
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}>
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href=""
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}>
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : null}
              </div>
              <div className="flex justify-center items-center">
                <button
                  href="#"
                  className="hidden sm:flex justify-center items-center sm:mr-10 text-sm font-medium underline text-gray-400 hover:no-underline"
                  onClick={() => {
                    handleChangeLanguage(locale);
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-1">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                    />
                  </svg>

                  {locale == "fr" ? "EN" : "FR"}
                </button>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-2 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
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
                      leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}>
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}>
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href=""
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}>
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default NavBarAuth;
