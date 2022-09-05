import React from 'react';
import './NavContianer.css'

const NavContianer = () => {
  return (
    <div className="navContainer">
      <input type='checkbox' id='trigger' />
      <label for='trigger'>
        <span></span>
        <span></span>
        <span></span>
      </label>
      {/* NOTE : 햄버거 클릭시 */}
      <div class='sidebar'></div>
    </div>
  );
};

export default NavContianer