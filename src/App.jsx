import React, { useState } from "react";
import "./App.css";
import Habits from "./component/habits";
import Navbar from "./component/navbar";

function App() {
  const [names, setNames] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrease = (item) => {
    setNames((names) =>
      names.map((name) => {
        if (name.id === item.id) {
          return { ...name, count: name.count + 1 };
        }
        console.log(names, "names");
        console.log(item, "item");
        return name;
      })
    );
  };

  const handleDecrease = (item) => {
    setNames((names) =>
      names.map((name) => {
        if (name.id === item.id) {
          const count = item.count - 1;
          return { ...item, count: count > 0 ? count : 0 };
        }
        return name;
      })
    );
  };

  const handleDelete = (item) => {
    setNames((names) => {
      return names.filter((name) => name.id !== item.id);
    });
  };

  const onAdd = (value) => {
    setNames((names) => {
      return [...names, { id: Date.now(), name: value, count: 0 }];
    });
  };

  const handleReset = () => {
    setNames((names) =>
      names.map((name) => {
        return { ...name, count: 0 };
      })
    );
  };

  return (
    <>
      <Navbar totalCount={names.filter((name) => name.count > 0).length} />
      <Habits
        names={names}
        onIncrement={handleIncrease}
        onDecrement={handleDecrease}
        onDelete={handleDelete}
        onAdd={onAdd}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
