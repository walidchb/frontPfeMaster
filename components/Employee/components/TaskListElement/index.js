import React from "react";
import "./style.css";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

function TaskListElement({ task, project }) {
  const locale = useLocale();
  const router = useRouter();
  let icon, statusInitials;

  switch (task?.status.toLowerCase()) {
    case "todo":
      icon = (
        <img
          className="h-8 mr-2 w-auto"
          src="/images/list.png"
          alt=""
          srcSet=""
        />
      );

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

      break;
    case "done":
      icon = (
        <img
          className="h-8 mr-2 w-auto"
          src="/images/checkbox.png"
          alt=""
          srcSet=""
        />
      );

      break;
    default:
      icon = null;
  }

  function getColor(letter) {
    // Vérifiez si letter n'est pas undefined
    if (typeof letter !== "undefined") {
      switch (letter.toLowerCase()) {
        case "a":
          return "red";
        case "b":
          return "orange";
        case "c":
          return "green";
        case "d":
          return "yellow";
        case "e":
          return "gray";
        default:
          return "black";
      }
    }
    // Si letter est undefined, retournez une couleur par défaut
    return "black";
  }

  const startDate = new Date(task?.dateDebutEstim).toLocaleDateString();
  const dueDate = new Date(task?.dateFinEstim).toLocaleDateString();

  return (
    <div
      onClick={() => {
        router.push(
          `/${locale}/Employee/Task?task=${JSON.stringify(task?._id)}`
        );
      }}
      className="TaskListElementContainer cursor-pointer rounded-xl py-2 my-2 px-4  flex justify-between items-center">
      <div className="flex justify-start items-center w-8/12">
        {icon}

        <div className="text-sm w-11/12 ">
          <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            {task?.Name}
          </p>
          <p>{project?.Name}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-4 text-gray-500">
          <p className="text-xs">Start: {startDate}</p>
          <p className="text-xs">Due: {dueDate}</p>
        </div>
        <p
          style={{
            backgroundColor: getColor(task?.priorite),
          }}
          className={`text-white flex justify-center items-center w-10 h-10 rounded-full`}>
          {task?.priorite}
        </p>
      </div>
    </div>
  );
}

export default TaskListElement;
