import React, { useState } from "react";
import Habit from "./habit";

const Habits = (props) => {
  const [lists, setLists] = useState([
    { name: "Reading", count: 0 },
    { name: "Runnding", count: 0 },
    { name: "Coding", count: 0 },
  ]);

  return (
    <>
      {lists.map((list) => (
        <Habit list={list} />
      ))}
    </>
  );
};

export default Habits;
