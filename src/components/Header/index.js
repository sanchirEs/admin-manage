import React from 'react';
import css from "./style.module.css"; // Assuming you have a corresponding CSS file

const Header = () => {
  return (
    <div className={css.Header}> 
    <h1>Welcome to the Dog Breed Identification App!</h1>
      {/* {<input type="text" placeholder="Search..." className="search-bar" />} */}
      {/* Add user profile icon and other elements */}
    </div>
  );
};

export default Header;
