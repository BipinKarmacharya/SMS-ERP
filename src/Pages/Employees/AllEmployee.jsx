import PageTitle from "../../Components/PageTitle";
import "/src/assets/CSS/Pages/Students.css";

const AllEmployee = () => {
  return (
    <>
      <div className="all-Employees">
        <PageTitle />
        <form action="" id="searchForm">
          <fieldset>
            <legend>Employee's Name</legend>
            <input
              type="search"
              name="searchEmployee"
              id="searchEmployee"
              placeholder="Search Employee"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Select Department</legend>
            <select
              name="selectClass"
              id="selectClass"
              defaultValue=""
              required
            >
              <option value="" disabled>
                View Employees By Department
              </option>
              <option value="1">Administrative</option>
              <option value="2">Primary Level</option>
            </select>
          </fieldset>
        </form>
        <div className="">
          <h2>Employees</h2>
        </div>
        <div className="allEmployeesData">
          <div className="employeeDetails">
            <div className="employeePhoto">Photo</div>
            <div className="employeeIdentity">
              <p className="empIdNumber">01-A-102</p>
              <p>Employee Name</p>
            </div>
            <hr />
            <div className="editIcons">
              <i
                className="fa-regular fa-eye allIcons"
                id="seeEmployeeDetails"
              ></i>
              <i
                className="fa-regular fa-pen-to-square allIcons"
                id="editEmployeeDetails"
              ></i>
              <i
                className="fa-regular fa-trash-can allIcons"
                id="deleteEmployeeDetails"
              ></i>
            </div>
          </div>

          <div className="employeeDetails">
            <div className="employeePhoto">Photo</div>
            <div className="employeeIdentity">
              <p className="empIdNumber">01-A-102</p>
              <p>Employee Name</p>
            </div>
            <hr />
            <div className="editIcons">
              <i
                className="fa-regular fa-eye allIcons"
                id="seeEmployeeDetails"
              ></i>
              <i
                className="fa-regular fa-pen-to-square allIcons"
                id="editEmployeeDetails"
              ></i>
              <i
                className="fa-regular fa-trash-can allIcons"
                id="deleteEmployeeDetails"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEmployee;
