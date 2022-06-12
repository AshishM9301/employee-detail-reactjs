import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Employee from "./pages/Employee";
import Employees from "./pages/Employees";
import Login from "./pages/Login";

import Users from "./pages/Users";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="employees" element={<Employees />} />
          <Route path="employee" element={<Employee />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
