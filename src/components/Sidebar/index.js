import React from 'react';
import css from "./style.module.css"; // Assuming you have a corresponding CSS file

const Sidebar = () => {
  return (
    <div className={css.Sidebar}>
      <div className={css.NavItem}>Dashboard</div>
      <div className={css.NavItem}>Report</div>
      {/* Add other navigation items here */}
    </div>
  );
};

export default Sidebar;
