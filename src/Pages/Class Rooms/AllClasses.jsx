import React from "react";
import "/src/assets/CSS/Pages/Classes.css";

import { TbEdit, TbTrashX } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";


const AllClasses = () => {
  return (
    <div className="allClasses">
      <div className="class">
        <div className="classTitle">
          <h4>Class 1</h4>
          <div className="classIcons">
            <TbEdit />
            <TbTrashX id="delete"/>
          </div>
        </div>
        <div className="classDetails">
          <div className="totalStudents">
            <h2>10</h2>
            <p>Students</p>
            <FaUserGraduate className="stdIcon"/>
          </div>
        </div>
      </div>

      <div className="class addNew" id="addNewClass">
        <div>
          <i className="bx bx-plus addNewIcon"></i>
          <p>Add New</p>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
