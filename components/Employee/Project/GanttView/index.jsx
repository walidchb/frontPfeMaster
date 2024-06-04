import React from 'react';
import { Gantt, GanttRow } from 'react-gantt-timeline';

const GanttView = () => {
  const tasks = [
    { id: 'Task 1', start: new Date(2024, 3, 1), end: new Date(2024, 3, 5), label: 'Task 1' },
    { id: 'Task 2', start: new Date(2024, 3, 3), end: new Date(2024, 3, 8), label: 'Task 2' },
    // Add more tasks as needed
  ];

  return (
    <Gantt>
      {tasks.map(task => (
        <GanttRow key={task.id} task={task} />
      ))}
    </Gantt>
  );
};

export default GanttView;