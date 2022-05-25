import React from "react";
import { Route, Routes } from "react-router";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
