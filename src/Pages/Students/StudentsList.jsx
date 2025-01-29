import { Link } from "react-router-dom";

import PageTitle from "../../Components/PageTitle";
import SearchForm from "../../Components/SearchForm";

const StudentsList = () => {
  return (
    <>
      <div className="students-list">
        <PageTitle />
        <SearchForm />

        <section className="data-table">
          <h2>Student List</h2>
          <table>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Symbol No</th>
                <th>Student's Name</th>
                <th>Father</th>
                <th>Class</th>
                <th>Fee Remaining</th>
                <th>Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>123</td>
                <td>Sita</td>
                <td>Father</td>
                <td>Class 1</td>
                <td>$ 4,600</td>
                <td>123-456-7890</td>
                <td><Link to ="/character-certificate">Print TC</Link></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default StudentsList;
