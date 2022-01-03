import React, { useState } from "react";

const Habit = ({ list, onIncrement, onDecrement, onDelete }) => {
  const habitIncrement = () => {
    onIncrement(list);
  };

  const habitDecrement = () => {
    onDecrement(list);
  };

  const habitDelete = () => {
    onDelete(list);
  };

  return (
    <li className="habit">
      <span className="habit-name">{list.name}</span>
      <span className="habit-count">{list.count}</span>
      <button className="habit-button habit-increase" onClick={habitIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={habitDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={habitDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
