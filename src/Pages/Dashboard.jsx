import React from "react";
import "/src/assets/CSS/Components/Dashboard.css";
import Background from '../assets/image/background.png'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="gridContainer">
        <div className="gridItem" id="totalStudents">
          <i className="bx bxs-graduation"></i>
          <h3>Total students :</h3>
          <div id="totalStudents" style={{ color: "white" }}></div>
        </div>
        <div className="gridItem" id="totalEmployees">
          <i className="bx bxs-group"></i>
          <h3>Total Employees :</h3>
        </div>
        <div className="gridItem" id="totalCourses">
          <i className="bx bxs-book-content"></i>
          <h3>Courses:</h3>
        </div>

        <div className="gridItem" id="panel">
          <div className="panelText">
            <span>welcome to admin panel</span>
            <p>This is where you can manage all.</p>
            
          </div>
          <div className="panelImage">  
            <img src={Background} alt="#" />
          </div>
        </div>
      </div>

      {/* graph Container */}

      <div className="graph-container">
        <canvas id="Bar"></canvas>
      </div>

      <div className="checkDiv">
        <p>This is check Div.</p>
      </div>
    </div>
  );
};

export default Dashboard;
