import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import InstituteProfile from "./Pages/General Setting/InstituteProfile";
import AllClasses from "./Pages/Class Rooms/AllClasses";
import AddClasses from "./Pages/Class Rooms/AddClasses";
import AllStudents from "./Pages/Students/AllStudents";
import AddStudents from "./Pages/Students/AddStudents";
import StudentsList from "./Pages/Students/StudentsList";
import ViewDetails from "./Pages/Students/ViewDetails";
import AllEmployee from "./Pages/Employees/AllEmployee";
import AddEmployee from "./Pages/Employees/AddEmployee";
import EmployeeAttendance from "./Pages/Attendance/EmployeeAttendance";
import StudentAttendance from "./Pages/Attendance/StudentAttendance";
import Search from "./Pages/Attendance/Search";
import Character from "./Pages/Certificates/Character";
import NewNotice from "./Pages/Notices/NewNotice";
import PreviousNotice from "./Pages/Notices/PreviousNotice";

import PageTitle from "./Components/PageTitle";

const App = () => {

  const [pageTitle, setPageTitle] = useState("Dashboard");

  // Toggling Menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header toggleSidebar={toggleSidebar} />
        </div>
        <div className="main">
          <Sidebar setPageTitle={setPageTitle} isSidebarOpen={isSidebarOpen}/>
          <div className={`content ${isSidebarOpen ? "shifted" : ""}`}>
            <PageTitle title={pageTitle} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/institute-profile" element={<InstituteProfile />} />
              <Route path="/all-classes" element={<AllClasses />} />
              <Route path="/add-classes" element={<AddClasses />} />
              <Route path="/all-students" element={<AllStudents />} />
              <Route path="/add-students" element={<AddStudents />} />
              <Route path="/students-list" element={<StudentsList />} />
              <Route path="/all-employee" element={<AllEmployee />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/employee-attendance" element={<EmployeeAttendance />} />
              <Route path="/search" element={<Search />} />
              <Route path="/attendance" element={<StudentAttendance />} />
              <Route path="/character-certificate" element={<Character />} />
              <Route path="/new-notice" element={<NewNotice />} />
              <Route path="/prev-notice" element={<PreviousNotice />} />

              {/* Students Details */}

              <Route path="/students/:id/view" element={<ViewDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
