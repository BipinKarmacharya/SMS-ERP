import { Link } from "react-router-dom";
import "/src/assets/CSS/Pages/Students.css";

import PageTitle from "../../Components/PageTitle";
import SearchForm from "../../Components/SearchForm";

const AllStudents = () => {
  return (
    <>
      <div className="all-students">
        <PageTitle />
        <SearchForm />
        <div className="classInfo">
          <h2>Class 1</h2>
        </div>
        <div className="viewStyle">
          <Link to ="/students-list">View List</Link>
        </div>
        <div className="allStudentsData">
          <div className="studentDetails">
            <div className="studentPhoto">Photo</div>
            <div className="studentIdentity">
              <p className="StdIdNumber">01-A-102</p>
              <p>Student Name</p>
            </div>
            <hr />
            <div className="editIcons">
              <i
                className="fa-regular fa-eye allIcons"
                id="seeStudentDetails"
              ></i>
              <i
                className="fa-regular fa-pen-to-square allIcons"
                id="editStudentDetails"
              ></i>
              <i
                className="fa-regular fa-trash-can allIcons"
                id="deleteStudentDetails"
              ></i>
            </div>
          </div>

          <div className="studentDetails">
            <div className="studentPhoto">Photo</div>
            <div className="studentIdentity">
              <p className="idNumber">01-A-102</p>
              <p>Student Name</p>
            </div>
            <hr />
            <div className="editIcons">
              <i
                className="fa-regular fa-eye allIcons"
                id="seeStudentDetails"
              ></i>
              <i
                className="fa-regular fa-pen-to-square allIcons"
                id="editStudentDetails"
              ></i>
              <i
                className="fa-regular fa-trash-can allIcons"
                id="deleteStudentDetails"
              ></i>
            </div>
          </div>

          <div className="studentDetails">
            <div className="studentPhoto">Photo</div>
            <div className="studentIdentity">
              <p className="idNumber">01-A-102</p>
              <p>Student Name</p>
            </div>
            <hr />
            <div className="editIcons">
              <i
                className="fa-regular fa-eye allIcons"
                id="seeStudentDetails"
              ></i>
              <i
                className="fa-regular fa-pen-to-square allIcons"
                id="editStudentDetails"
              ></i>
              <i
                className="fa-regular fa-trash-can allIcons"
                id="deleteStudentDetails"
              ></i>
            </div>
          </div>

          <div className="studentDetails">
            <div className="studentPhoto">Photo</div>
            <div className="studentIdentity">
              <p className="idNumber">01-A-102</p>
              <p>Student Name</p>
            </div>
            <hr />
            <div className="editIcons">
              <i
                className="fa-regular fa-eye allIcons"
                id="seeStudentDetails"
              ></i>
              <i
                className="fa-regular fa-pen-to-square allIcons"
                id="editStudentDetails"
              ></i>
              <i
                className="fa-regular fa-trash-can allIcons"
                id="deleteStudentDetails"
              ></i>
            </div>
          </div>

          <div className="studentDetails">
            <div className="studentPhoto">Photo</div>
            <div className="studentIdentity">
              <p className="idNumber">01-A-102</p>
              <p>Student Name</p>
            </div>
            <hr />
            <div className="editIcons">
              <i
                className="fa-regular fa-eye allIcons"
                id="seeStudentDetails"
              ></i>
              <i
                className="fa-regular fa-pen-to-square allIcons"
                id="editStudentDetails"
              ></i>
              <i
                className="fa-regular fa-trash-can allIcons"
                id="deleteStudentDetails"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllStudents;
