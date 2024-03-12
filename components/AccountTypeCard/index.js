import React from "react";
import "./style.css";
import { useTranslations, useLocale } from "next-intl";

import { useRouter } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function AccountTypeCard({ type }) {
  const locale = useLocale();

  const Router = useRouter();
  const Individuals = [
    { name: "Employee", href: "#", current: true },
    { name: "Team Boss", href: "#", current: false },
    { name: "Visitor", href: "#", current: false },
    { name: "Project Boss", href: "#", current: false },
  ];
  const BusinessUsers = [
    { name: "Company", href: "#", current: true },
    { name: "Start-up", href: "#", current: false },
    { name: "Business", href: "#", current: false },
  ];
  return (
    <div className="relative acctountTypeContainer w-10/12  m-4 sm:w-5/12 lg:w-4/12  xl:w-3/12 flex text-center  flex-col items-center justify-center bg-white rounded-2xl p-4 sm:p-8 ">
      <div className="flex flex-col justify-center items-center">
        {type == 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 p-2 bg-slate-200 rounded-full">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 p-2 bg-slate-200 rounded-full">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
        )}

        <h1 className="font-black text-25 tracking-wide leading-normal text-blue-700 no-underline normal-case my-4">
          {type == 1 ? "Individuals" : "Business Users"}
        </h1>
      </div>
      <h3 className="my-4 w-full">
        {type == 1
          ? "Personalized experiences tailored for you. Join now!"
          : "Elevate your business with exclusive tools. Join today!"}
      </h3>
      <div className="flex  w-full flex-wrap gap-2 ">
        {type == 1
          ? Individuals.map((item) => (
              <span
                key={item.name}
                href={item.href}
                className="bg-gray-900 text-white rounded-md px-3  py-1 text-sm  font-medium whitespace-nowrap w-min"
                aria-current={item.current ? "page" : undefined}>
                {item.name}
              </span>
            ))
          : BusinessUsers.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="bg-gray-900 text-white rounded-md px-3  py-1 text-sm font-medium whitespace-nowrap"
                aria-current={item.current ? "page" : undefined}>
                {item.name}
              </a>
            ))}
      </div>

      {/* <div className="flex justify-end items-center  w-full"> */}
      <button
        onClick={() => {
          if (type == 1) {
            Router.push(`/${locale}/Up/Individuals`);
          } else {
            Router.push(`/${locale}/Up/BusinessUsers`);
          }
        }}
        className="bottom-0 right-4 absolute my-4 rounded-xl border-b-4  border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
        type="submit"
        // disabled={isSubmitting}
      >
        Continue &nbsp; &#62;
      </button>
      {/* </div> */}
    </div>
  );
}

export default AccountTypeCard;
