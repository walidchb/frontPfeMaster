"use client";
import Column from "./components/Column";
import "./style.css";

import React, { useState } from "react";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tâche 1",
      startDate: "2023-03-01",
      endDate: "2023-03-15",
      priority: "A",
      team: {
        name: "Equipe A",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 1.",
      status: "todo",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
    {
      id: 2,
      title: "Tâche 2",
      startDate: "2023-03-05",
      endDate: "2023-03-20",
      priority: "C",
      team: {
        name: "Equipe B",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 2.",
      status: "todo",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
    {
      id: 3,
      title: "Tâche 3",
      startDate: "2023-03-10",
      endDate: "2023-03-25",
      priority: "B",
      team: {
        name: "Equipe C",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 3.",
      status: "doing",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
    {
      id: 4,
      title: "Tâche 4",
      startDate: "2023-03-15",
      endDate: "2023-03-30",
      priority: "D",
      team: {
        name: "Equipe A",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 4.",
      status: "done",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
    {
      id: 5,
      title: "Tâche 5",
      startDate: "2023-03-20",
      endDate: "2023-04-05",
      priority: "A",
      team: {
        name: "Equipe A",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 5.",
      status: "done",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
    {
      id: 6,
      title: "Tâche 6",
      startDate: "2023-03-25",
      endDate: "2023-04-10",
      priority: "C",
      team: {
        name: "Equipe A",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 6.",
      status: "doing",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
    {
      id: 5,
      title: "Tâche 5",
      startDate: "2023-03-20",
      endDate: "2023-04-05",
      priority: "A",
      team: {
        name: "Equipe A",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 5.",
      status: "In Review",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
    {
      id: 6,
      title: "Tâche 6",
      startDate: "2023-03-25",
      endDate: "2023-04-10",
      priority: "C",
      team: {
        name: "Equipe A",
        membres: [
          { name: "John Doe", role: "Développeur" },
          { name: "Jane Smith", role: "Designer" },
          { name: "Bob Johnson", role: "Chef de projet" },
        ],
      },
      project: "Projet ABC",
      description: "Ceci est la description de la tâche 6.",
      status: "In Review",
      comments: [
        {
          author: "John Doe",
          date: "2023-05-01 10:30",
          text: "Premier commentaire",
        },
        {
          author: "Jane Smith",
          date: "2023-05-02 14:45",
          text: "Deuxième commentaire",
        },
      ],
    },
  ]);

  const onDragOver = (e) => {
    e.preventDefault(); // Nécessaire pour permettre le drop
  };

  const onDrop = (e, newStatus, newIndex) => {
    let id = e.dataTransfer.getData("id");
    let draggedTask = tasks.find((task) => task.id.toString() === id);
    let updatedTasks = tasks.filter((task) => task.id.toString() !== id);

    // Vérifiez si draggedTask est défini avant d'accéder à sa propriété status
    if (draggedTask && draggedTask.status === newStatus) {
      // Réordonnancement à l'intérieur de la même colonne
      updatedTasks = [
        ...updatedTasks.slice(0, newIndex),
        draggedTask,
        ...updatedTasks.slice(newIndex),
      ];
    } else {
      // Vérifiez si draggedTask est défini avant de modifier sa propriété status
      if (draggedTask) {
        // Changement de colonne
        draggedTask.status = newStatus;
      }
      // Ajoutez la tâche à la nouvelle colonne
      updatedTasks.splice(newIndex, 0, draggedTask);
    }

    setTasks(updatedTasks);
  };

  const getTasksForStatus = (status) => {
    return tasks.filter((task) => task.status === status);
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
            tasks={getTasksForStatus("todo")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="todo"
          />
          <Column
            title="In progress"
            tasks={getTasksForStatus("doing")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="doing"
          />
          <Column
            title="In Review"
            tasks={getTasksForStatus("In Review")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="in review"
          />
          <Column
            title="Done"
            tasks={getTasksForStatus("done")}
            onDrop={onDrop}
            onDragOver={onDragOver}
            status="done"
          />
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
