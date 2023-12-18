import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import TaskTable from '../../components/TaskTable';
import './style.module.css';

const tasks = [
  { description: 'Task 1', status: 'Completed' },
  // ... other tasks
];

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <TaskTable  tasks={tasks}/>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
    </div>
  );
};

export default HomePage;
