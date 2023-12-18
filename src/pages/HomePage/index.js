import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskTable from "../../components/TaskTable";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <TaskTable />
    </>
  );
};

export default HomePage;
