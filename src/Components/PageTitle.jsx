import "/src/assets/CSS/Components/PageTitle.css";

function PageTitle() {
  return (
    <>
      <div className="PageTitle">
        <h4>General Settings</h4>
        <span>|</span>
        <div className="subTitle">
          <i className="bx bx-building-house allIcons"></i>
          <span>-</span>
          <p>Institute Profile</p>
        </div>
      </div>
    </>
  );
}

export default PageTitle;
