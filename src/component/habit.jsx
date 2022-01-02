import React, { useState } from "react";

const Habit = ({ list }) => {
  return (
    <li className="habit">
      <span className="habit-name">{list.name}</span>
      <span className="habit-count">{list.count}</span>
      <button className="habit-button habit-increase">
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease">
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
