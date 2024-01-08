import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
//import  css from './style.module.css';

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home-page">
      <Sidebar isOpen={sidebarOpen}/>
      <div className="main-content">
        <Header />
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">Toggle Sidebar</button>
      </div>
    </div>
  );
};

export default HomePage;
