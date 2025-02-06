import { useState, useEffect } from "react";
import "/src/assets/css/Pages/Attendance.css";
import { employees } from "/src/assets/JSON/EmployeesData"; // Import JSON employee data

const EmployeeAttendance = () => {
  // Initialize attendance state
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    setAttendance(
      employees.map((employee) => ({
        id: employee.id,
        isChecked1: true, // ✅ Default "Present" checked
        isChecked2: false,
        isChecked3: false,
      }))
    );
  }, []);

  function handleCheck(employeeId, checkboxNumber) {
    setAttendance((prevAttendance) =>
      prevAttendance.map((employee) =>
        employee.id === employeeId
          ? {
              ...employee,
              isChecked1: checkboxNumber === 1 ? !employee.isChecked1 : false,
              isChecked2: checkboxNumber === 2 ? !employee.isChecked2 : false,
              isChecked3: checkboxNumber === 3 ? !employee.isChecked3 : false,
            }
          : employee
      )
    );
  }

  return (
    <>
      <div className="Attendance">
        <div className="attendance-header">
          <h2>Employee Attendance</h2>
          <input type="date" name="date" id="selectDate"/>
        </div>
        <div className="attendance-table-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                const attendanceRecord =
                  attendance.find((a) => a.id === employee.id) || {};
                return (
                  <tr key={employee.id}>
                    <td>{employee.employee_id}</td>
                    <td>
                      {employee.first_name} {employee.middle_name} {employee.last_name}
                    </td>
                    <td>{employee.department}</td>
                    <td className="status">
                      <input
                        type="checkbox"
                        checked={attendanceRecord.isChecked1 || false}
                        onChange={() => handleCheck(employee.id, 1)}
                      />
                      <span>P</span>
                      <input
                        type="checkbox"
                        checked={attendanceRecord.isChecked2 || false}
                        onChange={() => handleCheck(employee.id, 2)}
                      />
                      <span>A</span>
                      <input
                        type="checkbox"
                        checked={attendanceRecord.isChecked3 || false}
                        onChange={() => handleCheck(employee.id, 3)}
                      />
                      <span>L</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={() => console.log(attendance)}
        id="submit-Employee-Attendance"
      >
        Submit
      </button>
    </>
  );
};

export default EmployeeAttendance;
