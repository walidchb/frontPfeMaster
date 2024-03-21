import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import "./style.css";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SideBarProject() {
  const locale = useLocale();

  const [navigation, setNavigation] = useState([
    { name: "Kanban", href: `#`, current: 0 },
    { name: "Timeline", href: "#", current: false },
    { name: "Board", href: `#`, current: false },
    { name: "About", href: `#`, current: false },
  ]);
  return (
    <Disclosure
      as="nav"
      className="rounded-r-xl w-full sm:w-4/12 md:w-3/12 xl:w-2/12 sideBarContainer ">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <div className="  py-2 my-2 px-4  flex justify-between items-center">
          <div className=" flex justify-start items-center w-full">
            <img
              className="h-8 mr-2 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />

            <div className="">
              <p className="font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
                Project Name
              </p>
              <p className="text-xs">Project Boss Name</p>
            </div>
          </div>
        </div>
        {navigation.map((item, index) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              index == item.current
                ? "bg-gray-600 text-white"
                : "text-black hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}>
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure>
  );
}

export default SideBarProject;
