import React from "react";

const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar">
      <span className="navbar-icon">
        <i className="fas fa-leaf"></i>
      </span>
      <span className="navbar-title">Habit Tracker!</span>
      <span className="navbar-count">{totalCount}</span>
    </nav>
  );
};

export default Navbar;
