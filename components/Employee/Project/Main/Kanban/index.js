"use client";
import Column from "./components/Column";
import "./style.css";

import React, { useEffect, useState } from "react";
import axios from "axios";

const KanbanBoard = ({project, user, teamId}) => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:1937",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let taskss;
    switch (user?.role) {
      case "employee":
        taskss = project.tasks?.filter((task) => task.affectedto === user._id) || []; 
        break;
      case "teamBoss":
        taskss = project.tasks?.filter((task) => task.team === teamId) || [];
        break;
      default:
        taskss = project.tasks
        break;
    }
    setTasks(taskss)
    
  }, [project]);

  const onDragOver = (e) => {
    e.preventDefault(); // Nécessaire pour permettre le drop
  };

  const onDrop = async (e, newStatus, newIndex) => {
    let id = e.dataTransfer.getData("_id");
    let draggedTask = tasks.find((task) => task._id.toString() === id);
    let updatedTasks = tasks.filter((task) => task._id.toString() !== id);
  
    // Vérifiez si draggedTask est défini avant d'accéder à sa propriété status
    if (draggedTask && draggedTask.status === newStatus) {
      // Réordonnancement à l'intérieur de la même colonne
      updatedTasks = [
        ...updatedTasks.slice(0, newIndex),
        draggedTask,
        ...updatedTasks.slice(newIndex),
      ];
    } else {
      // Changement de colonne
      if (draggedTask) {
        draggedTask.status = newStatus;
  
        // Envoyer une requête pour mettre à jour le statut dans la base de données
        try {
          await axiosInstance.patch(`/task/tasks/${draggedTask._id}`, {
            status: newStatus,
          });
        } catch (error) {
          console.error("Erreur lors de la mise à jour du statut :", error);
        }
      }
  
      // Ajoutez la tâche à la nouvelle colonne
      updatedTasks.splice(newIndex, 0, draggedTask);
    }
  
    setTasks(updatedTasks);
  };

  const getTasksForStatus = (status) => {
    const tasksForStatus = tasks?.filter((task) => task.status === status) || [];
    return tasksForStatus.sort((a, b) => {
      const priorityOrder = ["A", "B", "C", "D", "E"];
      const priorityA = priorityOrder.indexOf(a.priorite);
      const priorityB = priorityOrder.indexOf(b.priorite);
      return priorityA - priorityB; // Tri ascendant
    });
  };

  return (
    <div
      style={{ height: "90vh" }}
      className="flex flex-col lg:flex-row w-full  overflow-auto costumScrollBar">
      <div className="w-full lg:ml-50 p-4">
        <h1 className="text-3xl font-bold mb-4">Tasks</h1>
        <div className="flex flex-wrap -mx-4">
          <Column
            title="Todo"
            tasks={getTasksForStatus("Todo")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="Todo"
            project={project && project}
          />
          <Column
            title="In progress"
            tasks={getTasksForStatus("Inprogress")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="Inprogress"
            project={project && project}
          />
          <Column
            title="In Review"
            tasks={getTasksForStatus("Inreview")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="Inreview"
            project={project && project}
          />
          <Column
            title="Done"
            tasks={getTasksForStatus("Done")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="Done"
            project={project && project}
          />
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
