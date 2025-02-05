import "/src/assets/CSS/Pages/Students.css";

const SearchForm = () => {
  return (
    <>
      <form action="" id="searchForm">
        <fieldset>
          <legend>Search Student</legend>
          <input
            type="search"
            name="searchStudent"
            id="searchStudent"
            placeholder="Search Student"
            required
          />
        </fieldset>
        <fieldset>
          <legend>Select Class</legend>
          <select name="selectClass" id="selectClass" defaultValue="" required>
            <option value="" disabled>
              View Students By Class
            </option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
          </select>
        </fieldset>
      </form>
    </>
  );
}

export default SearchForm
