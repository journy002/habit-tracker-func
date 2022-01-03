import React, { useState } from "react";
import "./App.css";
import Habits from "./component/habits";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Habits />
    </>
  );
}

export default App;
