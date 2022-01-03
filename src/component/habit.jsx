import React from "react";

const Habit = ({ item, habitsIncrement, habitsDecrement, habitsDelete }) => {
  const habitIncrement = () => {
    habitsIncrement(item);
  };

  const habitDecrement = () => {
    habitsDecrement(item);
  };

  const habitDelete = () => {
    habitsDelete(item);
  };

  return (
    <li>
      <span className="habit-name">{item.name}</span>
      <span className="habit-count">{item.count}</span>
      <button className="habit-button habit-increase" onClick={habitIncrement}>
        <i className="fas fa-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={habitDecrement}>
        <i className="fas fa-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={habitDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Habit;
