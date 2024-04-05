import TaskCard from "../../../../../components/TaskCard";
import React from "react";
import "./style.css";

import { FaTasks, FaClock, FaCheckCircle } from "react-icons/fa";

const Column = ({ title, tasks, onDrop, onDragOver, status }) => {
  // Définir l'icône correspondant au titre

  let bg_gradient;

  let icon;
  switch (title.toLowerCase()) {
    case "todo":
      icon = (
        <img className="w-6 h-6" src="/images/list.png" alt="" srcset="" />
      );
      bg_gradient = "bg-gradient-to-r from-blue-500 to-green-500";
      break;
    case "in progress":
      icon = (
        <img
          className="w-6 h-6"
          src="/images/development.png"
          alt=""
          srcset=""
        />
      );
      bg_gradient = "bg-gradient-to-r from-orange-500 to-purple-500";

      break;
    case "in review":
      icon = (
        <img
          className="w-6 h-6"
          src="/images/code-review.png"
          alt=""
          srcset=""
        />
      );
      bg_gradient = "bg-gradient-to-r from-amber-800 to-green-500";

      break;
    case "done":
      icon = (
        <img className="w-6 h-6" src="/images/checkbox.png" alt="" srcset="" />
      );
      bg_gradient = "bg-gradient-to-r from-yellow-500 to-blue-500";

      break;
    default:
      icon = null;
  }

  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/4 px-4  flex-grow bg-gray-100 rounded-lg shadow-md p-4"
      onDrop={(e) => {
        e.preventDefault();
        onDrop(e, status, tasks.length);
      }}
      onDragOver={onDragOver}>
      {/* Afficher l'icône et le titre centrés */}
      <div
        className={`rounded-t-xl flex items-center justify-center mb-4 ${bg_gradient} text-white`}>
        {icon && <span className="mr-2">{icon}</span>}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* Afficher les tâches */}
      <div style={{ height: "65vh" }} className="overflow-auto costumScrollBar">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              {...task}
              onDragOver={(e) => {
                e.preventDefault();
              }}
            />
          ))
        ) : (
          <div className="w-full min-h-32 rounded-sm  my-4 py-2 text-gray-00 flex justify-center items-center border-gray-600  border-2 border-dashed">
            no task
          </div>
        )}
      </div>
    </div>
  );
};

export default Column;
