import { useParams } from "react-router-dom";
import "/src/assets/CSS/Pages/ViewDetails.css";
import { students }from "/src/assets/JSON/StudentsData";

const ViewDetails = () => {
  const { id } = useParams(); // Get student ID from URL
  const student = students.find((student) => student.id.toString() === id); // Find student by ID

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div className="view-details">
      <h2>Student Details</h2>
      <div className="student-info">
        <div className="student-photo">
          <img src={student.profile_image} alt={`${student.first_name} ${student.last_name}`} className="profile-img"/>
        </div>
        <div className="student-details-info">
          <p><strong>Student ID:</strong> {student.student_id}</p>
          <p><strong>Name:</strong> {student.first_name} {student.middle_name} {student.last_name}</p>
          <p><strong>Address:</strong> {student.address}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Blood Group:</strong> {student.blood_group}</p>
          <p><strong>Religion:</strong> {student.religion}</p>
          <p><strong>Class:</strong> {student.class}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

