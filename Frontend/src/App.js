// Our parent page
import React from "react";
import "./index.css";
//importing pages
import Home from "./routes/Home";
// import Register from "./routes/Register";
import Login from "./routes/Login";
// import Dashboard from "./routes/Dashboard";
// if we want to add a component
// import SideBar from './components/SideBar'
// import aos
// import aos css


//importing our route
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      
      {/* if we want to add a component */}
      {/* <SideBar /> */}
      {/* routing pages */}
      <Routes>
        {/* Calling our page */}
        {/* First contact with the user is this home page */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      </Routes>
    </>
  );
}

export default App;
