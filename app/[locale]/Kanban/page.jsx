import TaskDetailsPage from '@/components/DescriptionTask'
import DocumentationComponent from '@/components/DocumentationComponent'
import KanbanBoard from '@/components/Kanban'
import NavBar from '@/components/NavBar'
import React from 'react'

const Kanban = () => {
  return (
    <div>
      <NavBar />
      <KanbanBoard />
    </div>
  )
}

export default Kanban
