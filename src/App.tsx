import React from "react";
import { Route, Routes } from "react-router";
import Main from "./components/Main";
// import MyComponent from "./components/Mycomponent";
import "./App.css";
import AddUsers from "./components/AddUsers";
import Headers from "./components/Header";
import MyComponent from "./components/Mycomponent";
import UsersLocal from "./components/UsersLocal";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const style = {
    display: "flex",
    flexDirection: "column" as "column",
    minHeight: "100vh",
  };
  return (
    <div style={style}>
      <Headers />
      <Routes>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/AddUsers" element={<AddUsers />}></Route>
        <Route path="/UsersLocal" element={<UsersLocal />}></Route>
        <Route path="/MyComponent" element={<MyComponent />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
