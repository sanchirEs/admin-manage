import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.css';

const Sidebar = () => {
  return (
    <div className={css.Sidebar}>
      <Link to="/" className={css.NavItem}>Dashboard</Link>
      <Link to="/reports" className={css.NavItem}>Report</Link>
      {/* Add other navigation items here */}
    </div>
  );
};

export default Sidebar;
