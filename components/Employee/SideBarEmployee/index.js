import React from "react";
import { Fragment, useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import "./style.css";
import { useRouter } from "next/navigation";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import {
  UserGroupIcon,
  ServerIcon,
  CalendarIcon,
  ChartSquareBarIcon,
  CogIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SideBarEmployee({ currentPage }) {
  const locale = useLocale();
  const router = useRouter();

  return (
    <div
      style={{ height: "90vh" }}
      className="sideBarContainer flex justify-between   flex-col w-32">
      <div>
        <div className="py-4  flex justify-center items-center">
          <img
            className="h-14 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <ul className=" flex justify-between   flex-col text-l ">
          <li
            onClick={() => router.push(`/${locale}/Employee/BoardEmployee`)}
            className={`flex justify-center cursor-pointer items-center flex-col
                py-4  ${
                  currentPage == "Board"
                    ? "border-purple-500 text-purple-500 font-bold border-l-4"
                    : "text-gray-500"
                }  `}>
            <img
              src="/images/dashboard.png"
              alt="dashboard"
              className="w-8 h-8"
            />
            Board
          </li>
          <li
            onClick={() => router.push(`/${locale}/Employee/SchedulerEmployee`)}
            className={`flex justify-center cursor-pointer items-center flex-col
                py-4  ${
                  currentPage == "Scheduler"
                    ? "border-purple-500 text-purple-500 font-bold border-l-4"
                    : "text-gray-500"
                }  `}>
            <img
              src="/images/timeline.png"
              alt="timeline"
              className="w-7 h-7"
            />
            Scheduler
          </li>
           <li
            onClick={() => router.push(`/${locale}/Employee/KanbanEmployee`)}
            className={`flex justify-center cursor-pointer items-center flex-col
                py-4  ${
                  currentPage == "Kanban"
                    ? "border-purple-500 text-purple-500 font-bold border-l-4"
                    : "text-gray-500"
                }  `}>
            <img
              src="/images/planning.png"
              alt="planning"
              className="w-7 h-7"
            />
            Kanban
          </li> 
        </ul>
      </div>
      <li
        onClick={() => router.push(`/${locale}/Employee/TeamEmployee`)}
        className={`flex justify-center cursor-pointer items-center flex-col
                py-4  ${
                  currentPage == "Team"
                    ? "border-purple-500 text-purple-500 font-bold border-l-4"
                    : "text-gray-500"
                }  `}>
        <img src="/images/partners.png" alt="gear" className="w-7 h-7" />
        My Team
      </li>
    </div>
  );
}

export default SideBarEmployee;
