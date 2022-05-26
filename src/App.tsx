import React from "react";
import { Route, Routes } from "react-router";
import Main from "./components/Main";
// import MyComponent from "./components/Mycomponent";
import "./App.css";
import AddUsers from "./components/AddUsers";
import Headers from "./components/Header";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/AddUsers" element={<AddUsers />}></Route>
      </Routes>
    </>
  );
}

export default App;
