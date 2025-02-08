import PageTitle from "../../Components/PageTitle";
import "/src/assets/CSS/Pages/Classes.css";

const AddClasses = () => {
  return (
    <>
      <div className="add-classes">
        <div className="formHeader">
          <h2>Add New Class</h2>
          <p>Fields Marked * are required.</p>
        </div>
        <form action="" id="addClasses">
          <fieldset>
            <legend>Class Name*</legend>
            <input
              type="text"
              name="className"
              id="className"
              placeholder="Name Of Class"
            />
          </fieldset>
          <fieldset>
            <legend>Monthly Tuition Fee*</legend>
            <input
              type="text"
              name="tuitionFee"
              id="tuitionFee"
              placeholder="Monthly Tuition Fees"
            />
          </fieldset>
          <fieldset>
            <legend>Class Teacher Name*</legend>
            <input
              type="text"
              name="classTeacherName"
              id="classTeacherName"
              placeholder="Name Of Class Teacher"
            />
          </fieldset>
          <div className="formButtons">
            <button type="reset" className="reset">
              <i className="fa-solid fa-rotate"></i> Reset
            </button>
            <button type="submit" className="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClasses;
