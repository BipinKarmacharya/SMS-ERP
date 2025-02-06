import "/src/assets/CSS/Pages/Students.css";

import SearchForm from "/src/Components/SearchForm";
import Profile from "/src/Components/Profile";

import { employees } from "/src/assets/JSON/EmployeesData"; // Renamed from students to employees

const groupByDepartment = (employees) => {
  return employees.reduce((acc, employee) => {
    (acc[employee.department] = acc[employee.department] || []).push(employee);
    return acc;
  }, {});
};

const AllEmployee = () => {
  const employeesByDepartment = groupByDepartment(employees);

  return (
    <div className="all-employees">
      <SearchForm />
      <div className="all-employees-container">
        {Object.keys(employeesByDepartment).map((department) => (
          <div key={department} className="department-section">
            <div className="departmentInfo">
              <h2>Department: {department}</h2> {/* Display Department Name */}
            </div>
            <div className="allEmployeesData">
              {employeesByDepartment[department].map((employee) => (
                <Profile key={employee.id} student={employee} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEmployee;

