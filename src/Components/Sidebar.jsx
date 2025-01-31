import { useState } from "react";
import { Link } from "react-router-dom";
import "/src/assets/CSS/Components/Sidebar.css";

const Sidebar = () => {
  // State to track which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // Toggle the visibility of the sub-menu
  const toggleSubMenu = (index) => {
    setOpenMenu(M => (M === index ? null : index)); // Toggle the menu
  };

  return (
    <aside className="sidebar">
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-menu-alt-right toggle allIcons"></i>
          <h3 className="font-bold">Menu</h3>
          <i className="fa-solid fa-angle-left" id="minimizeSidebar"></i>
        </div>
      </div>

      {/* Dashboard */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-home allIcons"></i>
          <Link to="/">Dashboard</Link>
        </div>
      </div>

      {/* General Settings */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-cog allIcons"></i>
          <span className="drop" onClick={() => toggleSubMenu(0)}>
            General Settings
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 0 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/institute-profile">Institute Profile</Link>
            </div>
            <div className="sub-item">
              <Link to="">Fee Structure</Link>
            </div>
            <div className="sub-item">
              <Link to="">Marks Grading</Link>
            </div>
          </div>
        )}
      </div>

      {/* Classes */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-pen-ruler"></i>
          <span className="drop" onClick={() => toggleSubMenu(1)}>
            Classes
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 1 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/all-classes">All Classes</Link>
            </div>
            <div className="sub-item">
              <Link to="/add-classes">Add Classes</Link>
            </div>
          </div>
        )}
      </div>

      {/* Subjects */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-book-content allIcons"></i>
          <span className="drop" onClick={() => toggleSubMenu(2)}>
            Subjects
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 2 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/">All Subjects</Link>
            </div>
            <div className="sub-item">
              <Link to="/">Add Subjects</Link>
            </div>
          </div>
        )}
      </div>

      {/* Students */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-children"></i>
          <span className="drop" onClick={() => toggleSubMenu(3)}>
            Students
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 3 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/all-students">All Students</Link>
            </div>
            <div className="sub-item">
              <Link to="/add-students">Add Student</Link>
            </div>
          </div>
        )}
      </div>

      {/* Employee */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-children"></i>
          <span className="drop" onClick={() => toggleSubMenu(4)}>
            Employee
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 4 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/all-students">All Employee</Link>
            </div>
            <div className="sub-item">
              <Link to="/add-students">Add Employee</Link>
            </div>
          </div>
        )}
      </div>
      {/* Attendence */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-children"></i>
          <span className="drop" onClick={() => toggleSubMenu(5)}>
            Attendance
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 5 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/">Employee Attendance</Link>
            </div>
            <div className="sub-item">
              <Link to="/">Student Attendance</Link>
            </div>
          </div>
        )}
      </div>
      {/*Account */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-file-invoice-dollar allIcons"></i>
          <span className="drop" onClick={() => toggleSubMenu(6)}>
            Account
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 6 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/">Fees</Link>
            </div>
            <div className="sub-item">
              <Link to="/">Salary</Link>
            </div>
          </div>
        )}
      </div>
      {/*Assignment*/}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-file-invoice-dollar allIcons"></i>
          <span>Assignment</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
      </div>
      {/*Exam*/}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-file-invoice-dollar allIcons"></i>
          <span>Exam</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
      </div>
      {/*result*/}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-medal"></i>
          <span>Results</span>
        </div>
      </div>
      {/*timetabke */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-calendar-edit allIcons"></i>
          <span>Timetable</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
      </div>
      {/*Event */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-calendar-star allIcons"></i>
          <span>Events</span>
        </div>
      </div>

      {/*Notice */}
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-file-invoice-dollar allIcons"></i>
          <span className="drop" onClick={() => toggleSubMenu(7)}>
            Notice
          </span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 7 && (
          <div className="sub-menu">
            <div className="sub-item">
              <Link to="/new-notice">New Notice</Link>
            </div>
            <div className="sub-item">
              <Link to="/prev-notice">Prev. Notice</Link>
            </div>
          </div>
        )}
      </div>

      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-bullhorn"></i>
          <span>Announcements</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bxs-report allIcons"></i>
            <span>Reports</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-award"></i>
            <span className="drop" onClick={() => toggleSubMenu(8)}>Certificates</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        {openMenu === 8 && (
          <div className="sub-menu">
            <div className="sub-item">
            <Link to ="/students-list">T/C Certificate</Link>
            </div>
          </div>
        )}
      </div>

      {/* Others */}

      <div className="menu-item">
        <hr className="line" />
        <div className="menu-item-title">
            <span><b>Others</b></span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-regular fa-circle-user"></i>
            <span>Profile</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
