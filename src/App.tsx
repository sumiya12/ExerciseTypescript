import React from "react";
import { Route, Routes } from "react-router";
import Main from "./components/Main";
import MyComponent from './components/Mycomponent'
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/MyComponent" element={<MyComponent />}></Route>
    </Routes>
  );
}

export default App;
