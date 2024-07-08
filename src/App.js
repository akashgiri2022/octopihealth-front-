import React from "react";
import "./styles.css";
import Login from "./components/Login.jsx";
import Exercise from "./components/Exercise.jsx";
import Signup from "./components/Signup.jsx";
import { Routes, Route } from "react-router-dom";
import Page2 from "./components/Page2.jsx";

const App = () => {
  return (
    // <Login></Login>
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/exercise" element={<Exercise />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/exercise/:id" element={<Page2 />} />
      </Routes>
    </>
  );
};

export default App;
