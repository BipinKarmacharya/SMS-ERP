import { FaEye } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { TbTrashX } from "react-icons/tb";
import { Link } from "react-router-dom";

const Profile = ({ student }) => {
  return (
    <div className="studentDetails">
      <div className="studentPhoto">
        <img src={student.profile_image} alt={student.first_name} className="profileImg" />
      </div>
      <div className="studentIdentity">
        <p className="StdIdNumber">{student.student_id}</p>
        <p>{student.first_name} {student.middle_name} {student.last_name}</p>
      </div>
      <hr />
      <div className="editIcons">
        <Link to={`/students/${student.id}/view`} title="View Details"><FaEye /></Link>
        <Link to={`/students/${student.id}/edit`} title="Edit Profile"><LiaUserEditSolid /></Link>
        <Link to={`/students/${student.id}/delete`} title="Delete Profile"><TbTrashX /></Link>
      </div>
    </div>
  );
};

export default Profile;
