import React, { useState, useEffect } from "react";
import "/src/assets/CSS/Pages/Students.css";
import SearchForm from "/src/Components/SearchForm";
import Profile from "/src/Components/Profile";
import axios from "axios";

// Function to group students by class
const groupByClass = (students) => {
  const grouped = {};
  students.forEach((student) => {
    if (!grouped[student.enroll_class]) {
      grouped[student.enroll_class] = [];
    }
    grouped[student.enroll_class].push(student);
  });
  return grouped;
};

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/students/");
        setStudents(response.data); // Update the students state with the fetched data
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const studentsByClass = groupByClass(students);

  // Sort class IDs numerically (directly compare numeric class IDs)
  const sortedenroll_classs = Object.keys(studentsByClass).sort((a, b) => {
    return parseInt(a) - parseInt(b); // Sort by numerical value
  });

  return (
    <div className="all-students">
      <SearchForm />
      <div className="all-students-container">
        {sortedenroll_classs.map((enroll_class) => (
          <div key={enroll_class} className="class-section">
            <div className="classInfo">
              <h2>Class {enroll_class}</h2> {/* Display Class ID */}
            </div>
            <div className="allStudentsData">
              {studentsByClass[enroll_class].map((student) => (
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