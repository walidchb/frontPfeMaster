import React from "react";
import "./style.css";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

function TaskListElement({ task, project }) {
  const locale = useLocale();
  const router = useRouter();
  let icon, statusInitials;

  switch (task.status.toLowerCase()) {
    case "todo":
      icon = (
        <img className="h-8 mr-2 w-auto" src="/images/list.png" alt="" srcSet="" />
      );
      statusInitials = "TD";
      break;
    case "inprogress":
      icon = (
        <img
          className="h-8 mr-2 w-auto"
          src="/images/development.png"
          alt=""
          srcSet=""
        />
      );
      statusInitials = "IP";
      break;
    case "inreview":
      icon = (
        <img
          className="h-8 mr-2 w-auto"
          src="/images/code-review.png"
          alt=""
          srcSet=""
        />
      );
      statusInitials = "IR";
      break;
    case "done":
      icon = (
        <img className="h-8 mr-2 w-auto" src="/images/checkbox.png" alt="" srcSet="" />
      );
      statusInitials = "DN";
      break;
    default:
      icon = null;
      statusInitials = "";
  }

  const startDate = new Date(task.dateDebutEstim).toLocaleDateString();
  const dueDate = new Date(task.dateFinEstim).toLocaleDateString();

  return (
    <div
      onClick={() => router.push(`/${locale}/Employee/Task`)}
      className="TaskListElementContainer cursor-pointer rounded-xl py-2 my-2 px-4  flex justify-between items-center"
    >
      <div className="flex justify-start items-center w-8/12">
        {icon}

        <div className="text-sm w-11/12 ">
          <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {task.Name}
          </p>
          <p>{project.Name}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-4 text-gray-500">
          <p className="text-xs">Start: {startDate}</p>
          <p className="text-xs">Due: {dueDate}</p>
        </div>
        <button className="h-8 w-8 relative flex justify-center items-center rounded-full bg-orange-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          {statusInitials}
        </button>
      </div>
    </div>
  );
}

export default TaskListElement;