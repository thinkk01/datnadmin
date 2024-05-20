import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
const Routess = () => {
  const [year, setYear] = useState();
  const yearHandle = (value) => {
    setYear(value);
  };
  return (
    <Routes>
      <Route path="/" exact />
      <Route path="/acounts" exact></Route>
    </Routes>
  );
};

export default Routess;
