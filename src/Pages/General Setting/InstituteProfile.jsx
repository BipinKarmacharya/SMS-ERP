import React from "react";
import "/src/assets/CSS/Pages/InstituteProfile.css";
import PageTitle from "../../Components/PageTitle";

const InstituteProfile = () => {
  return (
    <div className="institute-profile">
      <div className="formHeader">
        <h2>Update Institute Profile</h2>
        <p>Fields Marked * are required.</p>
      </div>
      <form action="" id="instituteProfileForm">
        <div className="formBox">
          <div className="sideA">
            <fieldset className="logoFieldset">
              <legend>Institute Logo*</legend>
              <div className="logoDiv">
                <img src="/Images/VIDYA.png" alt="Logo" id="logoImg" />
                <input
                  type="file"
                  id="logo"
                  accept="image/*"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Name of Institute*</legend>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Institute Name"
                required
              />
            </fieldset>
            <fieldset>
              <legend>Target Line*</legend>
              <input
                type="text"
                name="targetLine"
                id="targetLine"
                placeholder="Target Line"
                required
              />
            </fieldset>
          </div>

          <div className="sideB">
            <fieldset>
              <legend>Phone Number*</legend>
              <input
                type="number"
                name="Phone"
                id="phone"
                placeholder="Phone Number"
                required
              />
            </fieldset>
            <fieldset>
              <legend>Website</legend>
              <input
                type="text"
                name="Website"
                id="website"
                placeholder="Website"
              />
            </fieldset>
            <fieldset>
              <legend>Country*</legend>
              <select name="Country" id="country" defaultValue="">
                <option value="" disabled>
                  Select a country
                </option>
                <option value="1">Nepal</option>
                <option value="2">India</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Address*</legend>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                required
              />
            </fieldset>
          </div>
        </div>
        <div className="formButtons">
            <button type="reset" className="reset">
              <i className="fa-solid fa-rotate"></i> Reset
            </button>
            <button type="submit" className="submit">
              Update
            </button>
          </div>
      </form>
    </div>
  );
};

export default InstituteProfile;
