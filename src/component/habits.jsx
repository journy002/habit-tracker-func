import React, { useState, useCallback } from "react";
import Habit from "./habit";

const Habits = () => {
  const [lists, setLists] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Runnding", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrement = (item) => {
    setLists(
      lists.map((list) => {
        if (list.id === item.id) {
          console.log("right!");
          return { ...item, count: item.count + 1 };
        }
        return list;
      })
    );
  };
  // useCallback 사용하기
  //   const handleIncrement = useCallback((list) => {
  //     setLists((lists) =>
  //       lists.map((item) => {
  //         if (item.id === list.id) {
  //           return { ...list, count: list.count + 1 };
  //         }
  //         return item;
  //       })
  //     );
  //   }, []);

  const handleDecrement = (item) => {
    setLists(
      lists.map((list) => {
        if (list.id === item.id) {
          const count = item.count - 1;
          return { ...item, count: item.count > 0 ? count : 0 };
        }
        return list;
      })
    );
  };

  const handleDelete = (item) => {
    setLists(lists.filter((list) => list.id !== item.id));
  };

  return (
    <>
      {lists.map((list) => (
        // '=>' 이후에 {}호를 쓴다면 꼭 return을 써서 값을 반환해줘야 한다.
        // 바로 값이 나오게 한다면 ()를 사용해주면 된다.
        <Habit
          key={list.id}
          list={list}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default Habits;
