import React from 'react';
import css from "./style.module.css"; // Assuming you have a corresponding CSS file

const TaskTable = () => {
  // Dummy data, replace with your actual data source
  const tasks = [
    { description: 'Task 1', status: 'Completed' },
    { description: 'Task 2', status: 'In Progress' },
    // Add more tasks
  ];

  return (
    <table className={css.TaskTable}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Status</th>
          {/* Add other headers */}
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.description}</td>
            <td>{task.status}</td>
            {/* Add other task details */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
