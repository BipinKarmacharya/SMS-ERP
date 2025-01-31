

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import InstituteProfile from "./Pages/General Setting/InstituteProfile";
import AllClasses from "./Pages/Class Rooms/AllClasses";
import AddClasses from "./Pages/Class Rooms/AddClasses";
import AllStudents from "./Pages/Students/AllStudents";
import AddStudents from "./Pages/Students/AddStudents";
import StudentsList from "./Pages/Students/StudentsList";
import AllEmployee from "./Pages/Employees/AllEmployee";
import AddEmployee from "./Pages/Employees/AddEmployee";
import Character from "./Pages/Certificates/Character";
import NewNotice from "./Pages/Notices/NewNotice";
import PreviousNotice from "./Pages/Notices/PreviousNotice";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Sidebar />
          <div className="content">
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
              <Route path="/character-certificate" element={<Character />} />
              <Route path="/new-notice" element={<NewNotice />} />
              <Route path="/prev-notice" element={<PreviousNotice />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
