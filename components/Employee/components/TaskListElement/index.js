import React from "react";
import "./style.css";

function TaskListElement() {
  return (
    <div className="TaskListElementContainer rounded-xl py-2 my-2 px-4  flex justify-between items-center">
      <div className="flex justify-start items-center w-8/12">
        <img
          className="h-8 mr-2 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />

        <div className="text-sm w-11/12 ">
          <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
            Import trace for requested module:Import trace for requested module:
          </p>
          <p>My Kanban Project</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="hidden sm:block">Created</p>
        <button className="ml-2 h-8 w-8 relative flex justify-center items-center rounded-full bg-orange-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          WC
        </button>
      </div>
    </div>
  );
}

export default TaskListElement;
