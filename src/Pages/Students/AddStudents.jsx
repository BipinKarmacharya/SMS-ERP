import PageTitle from "../../Components/PageTitle";

const AddStudents = () => {
  return (
    <>
      <div className="add-students">
        <div className="formHeader">
          <h2>Admission Form</h2>
          <p>Fields Marked * are required.</p>
        </div>
        <form action="" id="addStudentForm">
          <div className="studentInfo">
            <div className="infoHeader">
              <h5>1. Student Information</h5>
            </div>
            <div className="fieldsetDiv">
              <fieldset>
                <legend>First Name*</legend>
                <input
                  type="text"
                  name="studentFirstName"
                  id="studentFirstName"
                  placeholder="First Name"
                  defaultValue=""
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Middle Name - (Optional)</legend>
                <input
                  type="text"
                  name="studentMiddleName"
                  id="studentMiddleName"
                  placeholder="Middle Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Last Name*</legend>
                <input
                  type="text"
                  name="studentLastName"
                  id="studentLastName"
                  placeholder="Last Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Gender*</legend>
                <select
                  name="selectGender"
                  id="selectGender"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Address*</legend>
                <input
                  type="text"
                  name="studentAddress"
                  id="studentAddress"
                  placeholder="Address"
                  required
                />
              </fieldset>
              <fieldset>
                <legend>Email Address</legend>
                <input
                  type="email"
                  name="studentEmailAddress"
                  id="studentEmail Address"
                  placeholder="Email Address (example@abc.com)"
                  required
                />
              </fieldset>
              <fieldset>
                <legend>Select Class*</legend>
                <select name="selectClass" id="selectClass" defaultValue="" required>
                  <option value="" disabled>
                    Select Class
                  </option>
                  <option value="1">Class 1</option>
                </select>
              </fieldset>

              <fieldset>
                <legend>Photo - (Optional)</legend>
                <input type="file" name="studentPhoto" id="studentPhoto" />
              </fieldset>

              <fieldset>
                <legend>Date of Admission*</legend>
                <input type="date" name="addDate" id="addDate" required />
              </fieldset>

              {/* <fieldset>
                <legend>Discount in Fee*</legend>
                <input
                  type="number"
                  name="feeDiscount"
                  id="feeDiscount"
                  placeholder="Discount In Fee (in %)"
                  required
                />
              </fieldset> */}
            </div>
          </div>

          <div className="personalInfo">
            <div className="infoHeader">
              <h5>2. Other Information</h5>
            </div>
            <div className="fieldsetDiv">
              <fieldset>
                <legend>Date Of Birth*</legend>
                <input type="date" name="birthDate" id="birthDate" required />
              </fieldset>

              <fieldset>
                <legend>Birth Certificate - (Optional)</legend>
                <input
                  type="file"
                  name="birthCertificate"
                  id="birthCertificate"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Religion - (Optional)</legend>
                <select name="religion" id="religion" defaultValue="" >
                  <option value="" disabled>
                    Select Religion
                  </option>
                  <option value="1">Hinduism</option>
                  <option value="2">Buddhism</option>
                  <option value="3">Islam</option>
                  <option value="4">Christianity</option>
                  <option value="5">Others</option>
                </select>
              </fieldset>

              {/* <fieldset>
                <legend>Cast*</legend>
                <select name="Cast" id="cast">
                  <option value="">Newar</option>
                </select>
              </fieldset> */}

              <fieldset>
                <legend>Blood Group - (Optional)</legend>
                <select name="bloodGroup" id="bloodGroup" defaultValue="">
                  <option value="" disabled>
                    Select Blood Group
                  </option>
                  <option value="">A+</option>
                  <option value="">A-</option>
                  <option value="">B+</option>
                  <option value="">B-</option>
                  <option value="">O+</option>
                  <option value="">O-</option>
                  <option value="">AB+</option>
                  <option value="">AB-</option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Transfer Certificate - (Optional)</legend>
                <input
                  type="file"
                  name="transferCertificate"
                  id="transferCertificate"
                  required
                />
              </fieldset>
              <fieldset>
                <legend>Other Document - (Optional)</legend>
                <input type="file" name="otherDoc" id="otherDoc" />
              </fieldset>
            </div>
          </div>

          <div className="parentsInfo">
            <div className="infoHeader">
              <h5>3. Parents' Information</h5>
            </div>
            <div className="fieldsetDiv">
              <fieldset>
                <legend>Father's First Name*</legend>
                <input
                  type="text"
                  name="fatherFirstName"
                  id="fatherFirstName"
                  placeholder="Father's First Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Middle Name - (Optional)</legend>
                <input
                  type="text"
                  name="fatherMiddleName"
                  id="fatherMiddleName"
                  placeholder="Father's Middle Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Last Name*</legend>
                <input
                  type="text"
                  name="fatherLastName"
                  id="fatherLastName"
                  placeholder="Father's Last Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Mother's First Name*</legend>
                <input
                  type="text"
                  name="motherFirstName"
                  id="motherFirstName"
                  placeholder="Mother's First Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Middle Name - (Optional)</legend>
                <input
                  type="text"
                  name="motherMiddleName"
                  id="motherMiddleName"
                  placeholder="Mother's Middle Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Last Name*</legend>
                <input
                  type="text"
                  name="motherLastName"
                  id="motherLastName"
                  placeholder="Mother's Last Name"
                  required
                />
              </fieldset>

              <fieldset>
                <legend>Contact Number*</legend>
                <input
                  type="number"
                  name="contactNum"
                  id="contactNum"
                  placeholder="Contact Number"
                  required
                />
              </fieldset>
              <fieldset>
                <legend>Address*</legend>
                <input
                  type="text"
                  name="parentAddress"
                  id="parentAddress"
                  placeholder="Address"
                  required
                />
              </fieldset>
              <fieldset>
                <legend>Email Address - (Optional)</legend>
                <input
                  type="email"
                  name="parentEmail"
                  id="parentEmail"
                  placeholder="Email Address"
                />
              </fieldset>
            </div>
          </div>

          <div className="formButtons">
            <button type="reset" className="reset">
              <i className="fa-solid fa-rotate"></i> Reset
            </button>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStudents;
