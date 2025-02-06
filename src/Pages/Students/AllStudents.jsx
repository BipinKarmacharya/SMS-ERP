import "/src/assets/CSS/Pages/Students.css";

import SearchForm from "/src/Components/SearchForm";
import Profile from "/src/Components/Profile";


import { students }from "/src/assets/JSON/StudentsData";

// Function to group students by class
const groupByClass = (students) => {
  const grouped = {};
  students.forEach((student) => {
    if (!grouped[student.class]) {
      grouped[student.class] = [];
    }
    grouped[student.class].push(student);
  });
  return grouped;
};

const AllStudents = () => {
  const studentsByClass = groupByClass(students);

  // **Sort class IDs numerically (directly compare numeric class IDs)**
  const sortedClassIds = Object.keys(studentsByClass).sort((a, b) => {
    return parseInt(a) - parseInt(b); // Sort by numerical value
  });

  return (
    <div className="all-students">
      <SearchForm />
      <div className="all-students-container">
        {sortedClassIds.map((classId) => (
          <div key={classId} className="class-section">
            <div className="classInfo">
              <h2>Class {classId}</h2>  {/* Display Class ID */}
            </div>
            <div className="allStudentsData">
              {studentsByClass[classId].map((student) => (
                <Profile key={student.id} student={student} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;
