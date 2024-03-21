import TaskDetailsPage from '@/components/DescriptionTask'
import DocumentationComponent from '@/components/DocumentationComponent'
import Footer from '@/components/Footer'
import KanbanBoard from '@/components/Kanban'
import NavBar from '@/components/NavBar'
import React from 'react'

const Documentation = () => {
  return (
    <div>
      <NavBar />
      <DocumentationComponent />
      <Footer/>
    </div>
  )
}

export default Documentation
