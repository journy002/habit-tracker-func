import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <span className="navbar-icon">
        <i className="fas fa-leaf"></i>
      </span>
      <span className="navbar-title">Habit Tracker</span>
      <span className="navbar-count">0</span>
    </nav>
  );
};

export default Navbar;
