import React from 'react';
import css from './style.module.css';



const TaskTable = ({ tasks = [] }) => {
  // Replace with actual data fetching logic
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
