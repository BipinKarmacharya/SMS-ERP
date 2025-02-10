import React from "react";
import "/src/assets/CSS/Pages/Dashboard.css";

import { PiStudentFill } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa6";
import { TfiRulerPencil } from "react-icons/tfi";

import MyCalendar from "../Components/MyCalender";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="gridContainer">
        <div className="gridItem totalStudent" id="totalStudent">
          <h4>Total Students</h4>
          <div className="totalCount">
            <PiStudentFill className="gridIcon" />
            <h2>100</h2>
          </div>
        </div>
        <div className="gridItem totalEmployees" id="totalEmployees">
          <h4>Total Employees</h4>
          <div className="totalCount">
            <FaUserShield className="gridIcon" />
            <h2>21</h2>
          </div>
        </div>
        <div className="gridItem totalClasses" id="totalCourses">
          <h4>Total Classes</h4>
          <div className="totalCount">
            <TfiRulerPencil className="gridIcon" />
            <h2>10</h2>
          </div>
        </div>
        <div className="gridItem todayCount" id="todayCount">
          <h5>
            Today Present Students: <span className="showPercent">0%</span>
          </h5>
          <div className="presentBox"></div>
          <h5>
            Today Present Employee: <span className="showPercent">100%</span>
          </h5>
          <div className="presentBox"></div>
        </div>

        <div className="gridItem" id="panel">
          <div className="panelText">
            <span>welcome to admin panel</span>
            <p>This is where you can manage all.</p>
          </div>
          <div className="panelImage">
            <img src="./assets/images/background.png" alt="#" />
          </div>
        </div>
        <div className="calender">
          <MyCalendar />
        </div>

        <div className="checkDiv">Check Div</div>
      </div>
    </div>
  );
};

export default Dashboard;
