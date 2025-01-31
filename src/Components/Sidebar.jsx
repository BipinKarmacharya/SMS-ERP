import React from "react";
import { Link } from "react-router-dom";
import "/src/assets/CSS/Components/Sidebar.css";

const toggleIcons = document.querySelectorAll('#drop');

  toggleIcons.forEach(function(icon) {
      icon.addEventListener('click', function() {
          const subMenu = icon.closest('.menu-item').querySelector('.sub-menu');
          subMenu.classList.toggle('hidden');
          
          // Toggle between + and - icons
          if (subMenu.classList.contains('hidden')) {
              icon.classList.remove('bx-minus');
              icon.classList.add('bx-plus');
          } else {
              icon.classList.remove('bx-plus');
              icon.classList.add('bx-minus');
          }
      });
  });
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-menu-alt-right toggle allIcons"></i>
          <h3 className="font-bold">Menu</h3>
          <i className="fa-solid fa-angle-left" id="minimizeSidebar"></i>
        </div>
      </div>

      <div className="menu-item" id="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-home allIcons"></i>
          <Link to="/">Dashboard</Link>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-cog allIcons"></i>
            <span id="drop">General Settings</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>  

        <div className="sub-menu hidden">
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
      </div>

      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-pen-ruler"></i>
            <span id="drop">Classes</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to="/all-classes">All Classes</Link>
          </div>
          <div className="sub-item">
            <Link to="/add-classes">Add Classes</Link>
          </div>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-book-content allIcons"></i>
            <span id="drop">Subjects</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to ="/">All Subjects</Link>
          </div>
          <div className="sub-item">
            <Link to="/">Add Subjects</Link>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-children"></i>
            <span id="drop">Students</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to ="/all-students">All Students</Link>
          </div>
          <div className="sub-item">
            <Link to ="/add-students">Add Student</Link>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-handshake"></i>
            <span id="drop">Employees</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to ="/all-employee">All Employees</Link>
          </div>
          <div className="sub-item">
            <Link to ="/add-employee">Add Employees</Link>
          </div>
        </div>
      </div><div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-handshake"></i>
            <span id="drop">Attendance</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to ="/">Employee Attendance</Link>
          </div>
          <div className="sub-item">
            <Link to ="/">Student Attendance</Link>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-file-invoice-dollar allIcons"></i>
            <span id="drop">Accounts</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to ="">Fees</Link>
          </div>
          <div className="sub-item">
            <Link to="">Salary</Link>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-layer allIcons"></i>
            <span>Assignments</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-brain"></i>
            <span>Exams</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="fa-solid fa-medal"></i>
            <span>Results</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-calendar-edit allIcons"></i>
            <span>Timetable</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-calendar-star allIcons"></i>
            <span>Events</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-item-title">
          <i className="bx bx-message-square-dots allIcons"></i>
            <span id="drop">Notices</span>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to ="/new-notice">New Notice</Link>
          </div>
          <div className="sub-item">
            <Link to="/prev-notice">Prev. Notice</Link>
          </div>
        </div>
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
            <span id="drop">Certificates</span>
          <i className="bx bx-plus dropdownPlus"></i>
        </div>
        <div className="sub-menu hidden">
          <div className="sub-item">
            <Link to ="/students-list">T/C Certificate</Link>
          </div>
        </div>
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
