"use client";
import TaskDetailsPage from '@/components/DescriptionTask'
import { useSearchParams } from 'next/navigation';
import NavBar from '@/components/NavBar'
import React from 'react'

const TaskPage = () => {
  const searchParams = useSearchParams();
  const taskDetails = searchParams.get('taskDetails');

  // Décoder les données de la tâche à partir de l'URL
  const task = taskDetails ? JSON.parse(decodeURIComponent(taskDetails)) : null;

  return (
    <div>
      <NavBar />
      <div className="container bg-[url('/BG.jpeg')] mx-auto py-8">
        <TaskDetailsPage task={task} />
      </div>
    </div>
  )
}

export default TaskPage
