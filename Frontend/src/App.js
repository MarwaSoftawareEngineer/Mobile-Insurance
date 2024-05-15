// Our parent page
import React from "react";
import "./index.css";
//importing pages
// import Register from "./routes/Register";
import Boutique from "./routes/Boutique";
import Campanies from "./routes/AdminDashboard/Campanies";
import Dashboard from "./routes/AdminDashboard/Dashboard";
import Login from "./routes/Login";

//importing our route
import { Route, Routes } from "react-router-dom";
import Vitrine from "./routes/Vitrine";
import Assurancesclient from "./routes/Assurancesclient";
import Storeclient from "./routes/Storeclient";
import Contratsclient from "./routes/Contratsclient";
import Claimsclient from "./routes/Claimsclient";




function App() {
  return (
    <>
      {/* if we want to add a component */}
      {/* <SideBar /> */}
      {/* routing pages */}
      <Routes>
        {/* Calling our page */}
        {/* First contact with the user is this home page */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Vitrine />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/assurancesclient" element={<Assurancesclient />} />
        <Route path="/storeclient" element={<Storeclient />} />
        <Route path="/contratsclient" element={<Contratsclient />} />
        <Route path="/claimsclient" element={<Claimsclient />} />

        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Navigating to Insurance campanies */}
        <Route path="/campanies" element={<Campanies />} />
      </Routes>
    </>
  );
}

export default App;
