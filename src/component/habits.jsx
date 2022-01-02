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
        // '=>' 이후에 {}호를 쓴다면 꼭 return을 써서 값을 반환해줘야 한다.
        // 바로 값이 나오게 한다면 ()를 사용해주면 된다.
        <Habit list={list} />
      ))}
    </>
  );
};

export default Habits;
