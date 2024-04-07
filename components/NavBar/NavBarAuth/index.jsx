"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { IoPersonCircle, IoSettings, IoLogOutSharp } from "react-icons/io5";
import {
  MdAlternateEmail,
  MdBusinessCenter,
  MdArrowDropDown,
  MdOutlinePassword,
} from "react-icons/md";
import "./style.css";
import {
  FaTrash,
  FaBell,
  FaTimes,
  FaRegEnvelope,
  FaCalendarAlt,
  FaClipboardList,
  FaTasks,
  FaUserFriends,
  FaChartBar,
} from "react-icons/fa";
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
  isShowSideBarEmployee,
  setSideBarEmployeeShow,
  sideBarEmployeeShow,
}) {
  const organisation = [1, 2, 4, 5];
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
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const notifications = [
    {
      id: 1,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "project",
      isRead: false,
    },
    {
      id: 2,
      date: new Date("2021-12-20T14:00:00"),
      content: "Meeting Agenda for Monday",
      type: "task",
      isRead: true,
    },
    {
      id: 3,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "reminder",
      isRead: false,
    },
    {
      id: 4,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "message",
      isRead: false,
    },
    {
      id: 1,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "project",
      isRead: false,
    },
    {
      id: 2,
      date: new Date("2021-12-20T14:00:00"),
      content: "Meeting Agenda for Monday",
      type: "task",
      isRead: true,
    },
    {
      id: 3,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "reminder",
      isRead: false,
    },
    {
      id: 4,
      date: new Date("2021-12-25T10:30:00"),
      content:
        "Congratulations on having the most tasks completed at the end of the year! @you #tasks #management",
      type: "message",
      isRead: false,
    },
    {
      id: 5,
      date: new Date("2021-12-20T14:00:00"),
      content: "Meeting Agenda for Monday",
      type: "event",
      isRead: true,
    },
    {
      id: 6,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "team",
      isRead: false,
    },
    {
      id: 7,
      date: new Date("2021-12-19T09:15:00"),
      content: "Weekly update from project team",
      type: "report",
      isRead: false,
    },
  ];
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <Disclosure style={{ height: "10vh" }} as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="pl-2 pr-4 h-full   flex justify-between items-center">
            {isShowSideBarEmployee ? (
              <div
                onClick={() => setSideBarEmployeeShow(!sideBarEmployeeShow)}
                className="cursor-pointer relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                {sideBarEmployeeShow ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </div>
            ) : null}
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
            <div className="  flex max-w-min items-center justify-start sm:items-stretch sm:justify-start">
              {showOrganisation ? (
                <Menu
                  as="div"
                  className=" relative sm:ml-4  md:w-6/12 lg:w-3/12 ">
                  <div>
                    <Menu.Button
                      style={{
                        height: "5vh",
                        width:
                          windowSize.width <= 700
                            ? "40vw"
                            : windowSize.width <= 1000
                            ? "40vw"
                            : "30vw",
                      }}
                      className="h-full   flex justify-center items-center px-2 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                    <Menu.Items
                      style={{
                        width:
                          windowSize.width <= 700
                            ? "60vw"
                            : windowSize.width <= 1000
                            ? "40vw"
                            : "30vw",
                      }}
                      className="absolute right-50 z-10 mt-2  origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {organisation.map((item, index) => {
                        let textColor = getRandomColor();
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                style={{ color: textColor }}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "cursor-pointer px-4 py-2 text-sm text-gray-700 flex justify-center items-center"
                                )}>
                                <MdBusinessCenter className={`h-5 w-5 mr-2 `} />

                                <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                                  walid chwejefjweifu isjdfsdf{" "}
                                </span>
                              </div>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : null}
            </div>
            <div className=" flex justify-center items-center">
              <button
                href="#"
                className="flex justify-center items-center sm:mr-10 text-sm font-medium underline text-gray-400 hover:no-underline"
                onClick={() => {
                  handleChangeLanguage(locale);
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="hidden sm:block w-6 h-6 mr-1">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>

                {locale == "fr" ? "EN" : "FR"}
              </button>
              <div className="  flex items-center pr-2 sm:static sm:inset-auto sm:ml-2 sm:pr-0">
                <Menu as="div" className=" relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon
                        color="white"
                        className="h-6 w-6"
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
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items
                      style={{
                        right: -50,
                        width: windowSize.width <= 640 ? "90vw" : "60vw",
                        maxHeight: "80vh",
                        minHeight: "60vh",
                      }}
                      className="px-2 flex flex-col items-center costumScrollBar absolute  z-10 mt-2   overflow-y-auto  origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="w-full text-sm flex justify-between items-center p-2">
                        <p className="text-black font-semibold text-xl">
                          All notifications ({notifications.length}) :
                        </p>
                        <a
                          href={`/${locale}/Employee/Notification`}
                          className=" underline text-blue-600 hover:no-underline">
                          View all notifications
                        </a>
                      </div>
                      {notifications.length > 0 ? (
                        notifications.map((notification, index) => (
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                key={notification.id}
                                className={classNames(
                                  active ? "bg-gray-100" : "",

                                  "NotificationListElement  w-full  my-2 rounded-xl flex justify-between items-center p-2   border-gray-200 last:border-b-0 last:border-0"
                                )}>
                                <div className="flex ">
                                  <div
                                    style={{
                                      minWidth:
                                        windowSize.width <= 450
                                          ? "20vw"
                                          : windowSize.width <= 650
                                          ? "15vw"
                                          : windowSize.width <= 850
                                          ? "12vw"
                                          : "8vw",
                                    }}
                                    className="  flex flex-col justify-center  items-center text-sm font-semibold text-gray-800 ">
                                    {notification.type === "message" && (
                                      <FaRegEnvelope className="" />
                                    )}
                                    {notification.type === "event" && (
                                      <FaCalendarAlt className="" />
                                    )}
                                    {notification.type === "reminder" && (
                                      <FaBell className="" />
                                    )}
                                    {notification.type === "project" && (
                                      <FaClipboardList className="" />
                                    )}
                                    {notification.type === "task" && (
                                      <FaTasks className="" />
                                    )}
                                    {notification.type === "team" && (
                                      <FaUserFriends className="" />
                                    )}
                                    {notification.type === "report" && (
                                      <FaChartBar className="" />
                                    )}
                                    {notification.type}
                                  </div>
                                  <div
                                    style={{
                                      width:
                                        windowSize.width <= 550
                                          ? "50vw"
                                          : windowSize.width <= 850
                                          ? "40vw"
                                          : "50vw",
                                    }}
                                    className="">
                                    <div className="truncate text-sm text-gray-600 mb-2">
                                      {new Date(
                                        notification.date
                                      ).toLocaleString()}
                                    </div>
                                    <div
                                      className={`truncate    text-sm ${
                                        notification.isRead
                                          ? "text-gray-600"
                                          : "text-gray-800 font-semibold"
                                      }`}>
                                      {notification.content}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              // <a
                              //   href="#"
                              //   className={classNames(
                              //     active ? "bg-gray-100" : "",
                              //     "block px-4 py-2 text-sm text-gray-700"
                              //   )}>
                              //   Your Profile
                              // </a>
                            )}
                          </Menu.Item>
                        ))
                      ) : (
                        <div className="w-11/12 rounded-sm  my-4 py-2 text-gray-00 flex justify-center items-center border-gray-600  border-2 border-dashed">
                          your notifications list is emptry
                        </div>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                              " px-4 py-2 text-sm text-gray-700 flex justify-start items-center "
                            )}>
                            <IoPersonCircle className="h-6 w-6 mr-2" />
                            <span> Your Profile</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={`/${locale}/Employee/ProfileSettings`}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                            )}>
                            <IoSettings className="h-6 w-6 mr-2" />
                            <span> Settings</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href=""
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              " px-4 py-2 text-sm text-gray-700 flex justify-start items-center"
                            )}>
                            <IoLogOutSharp className="h-6 w-6 mr-2" />
                            <span>Sign out</span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            {/* </div> */}
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default NavBarAuth;
