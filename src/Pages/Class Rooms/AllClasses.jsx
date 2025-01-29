import React from "react";
import "/src/assets/CSS/Pages/Classes.css";

const AllClasses = () => {
  return (
    <div className="allClasses">
      <div className="class">
        <div className="classTitle">
          <h4>Class 1</h4>
          <div className="icons">
            <i className="bx bx-edit-alt" id="edit"></i>
            <i className="fa-regular fa-trash-can" id="delete"></i>
          </div>
        </div>
        <div className="classDetails">
          <h1>10</h1>
          <p>Students</p>
        </div>
      </div>

      <div className="class">
        <div className="classTitle">
          <h4>Class 2</h4>
          <div className="icons">
            <i className="bx bx-edit-alt" id="edit"></i>
            <i className="fa-regular fa-trash-can" id="delete"></i>
          </div>
        </div>
        <div className="classDetails">
          <h1>10</h1>
          <p>Students</p>
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
