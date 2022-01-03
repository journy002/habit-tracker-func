import React, { useState } from "react";
import "./App.css";
import Habits from "./component/habits";
import Navbar from "./component/navbar";

function App() {
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
      <Navbar totalCount={lists.filter((item) => item.count > 0).length} />
      <Habits
        lists={lists}
        mainIncrement={handleIncrement}
        mainDecrement={handleDecrement}
        mainDelete={handleDelete}
      />
    </>
  );
}

export default App;
