import Task from '../Task/index';
import React from 'react';
import { FaTasks, FaClock, FaCheckCircle } from 'react-icons/fa';

const Column = ({ title, tasks, onDrop, onDragOver, status }) => {
  // Définir l'icône correspondant au titre
  let icon;
  switch (title.toLowerCase()) {
    case 'todo':
      icon = <FaTasks />;
      break;
    case 'in progress':
      icon = <FaClock />;
      break;
    case 'done':
      icon = <FaCheckCircle />;
      break;
    default:
      icon = null;
  }

  return (
    <div
      className="w-full md:w-1/3 px-4 mb-8 flex-grow bg-gray-100 rounded-lg shadow-md p-4"
      onDrop={e => {
        e.preventDefault();
        onDrop(e, status, tasks.length);
      }}
      onDragOver={onDragOver}
    >
      {/* Afficher l'icône et le titre centrés */}
      <div className="flex items-center justify-center mb-4 bg-[#314155] text-white">
        {icon && <span className="mr-2">{icon}</span>}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* Afficher les tâches */}
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          {...task}
          onDragOver={(e) => {
            e.preventDefault();
            // Logique pour déterminer la position (nouvel index) pourrait être ajoutée ici
          }}
        />
      ))}
    </div>
  );
};

export default Column;