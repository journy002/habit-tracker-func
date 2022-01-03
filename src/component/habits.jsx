import React from "react";
import AddForm from "./addForm";
import Habit from "./habit";

const Habits = ({
  names,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <>
      <AddForm onAdd={onAdd} />
      <ul>
        {names.map((item) => (
          <Habit
            key={item.id}
            item={item}
            habitsIncrement={onIncrement}
            habitsDecrement={onDecrement}
            habitsDelete={onDelete}
          />
        ))}
      </ul>
      <button onClick={onReset}>Reset All</button>
    </>
  );
};

export default Habits;
