import React, { useState, useCallback } from "react";
import Habit from "./habit";

const Habits = ({ lists, mainIncrement, mainDecrement, mainDelete }) => {
  const habitsIncrement = (list) => {
    mainIncrement(list);
  };
  const habitsDecrement = (list) => {
    mainDecrement(list);
  };
  const habitsDelete = (list) => {
    mainDelete(list);
  };

  return (
    <>
      {lists.map((list) => (
        // '=>' 이후에 {}호를 쓴다면 꼭 return을 써서 값을 반환해줘야 한다.
        // 바로 값이 나오게 한다면 ()를 사용해주면 된다.
        <Habit
          key={list.id}
          list={list}
          onIncrement={habitsIncrement}
          onDecrement={habitsDecrement}
          onDelete={habitsDelete}
        />
      ))}
    </>
  );
};

export default Habits;
