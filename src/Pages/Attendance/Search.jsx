import { useState } from "react";
import { Link } from "react-router-dom";
// import './search.css';

const Search = () => {
  const [date, setDate] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    checkFormValidity(e.target.value, selectedClass);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    checkFormValidity(date, e.target.value);
  };

  const checkFormValidity = (date, selectedClass) => {
    setIsFormValid(date && selectedClass !== "----Select class----");
  };

  return (
    <form id="attendanceSearchForm">
        <input type="date" value={date} onChange={handleDateChange} className="inputDate" required />
        <select value={selectedClass} onChange={handleClassChange} required>
          <option>----Select class----</option>
          <option value="101">Class 101</option>
          <option value="102">Class 102</option>
        </select>

      <Link to={isFormValid ? `/attendance?class=${selectedClass}` : "#"} id="search">
        <button type="button" disabled={!isFormValid}>Search</button>
      </Link>
    </form>
  );
};

export default Search;
