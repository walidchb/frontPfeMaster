import React from "react";
import Link from "next/link";
import "./style.css";
import { useTranslations, useLocale } from "next-intl";

function ProjectCard() {
  const locale = useLocale();

  return (
    <a
      href={`/${locale}/Employee/Project`}
      className=" min-w-56 min-h-44  projectCard rounded-xl px-2 pt-4 pb-1 m-4 flex flex-col cursor-pointer  justify-between ">
      <div className="flex ">
        <img
          className="h-8 mr-2 mt-2 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        <div>
          <p className="font-bold">project Name</p>
          <p className="text-sm">Project Boss Name</p>
          <h3 className=" mt-2 mb-1 text-sm text-gray-400">QUICK LINKS</h3>
          <div className="flex text-xs justify-between">
            <p>My open issues</p>
            <p>5</p>
          </div>
          <div className="flex text-xs justify-between">
            <p>Done issues</p>
            <p>5</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center">
        <div className="border-2 w-5/6"></div>
        <Link
          href={`/${locale}/Employee/Project`}
          className="mt-1 text-blue-700 hover:underline cursor-pointer">
          {" "}
          Details
        </Link>
      </div>
    </a>
  );
}

export default ProjectCard;
