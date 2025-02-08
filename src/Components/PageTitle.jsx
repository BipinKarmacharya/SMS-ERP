import "/src/assets/CSS/Components/PageTitle.css";

function PageTitle({ title }) {
  return (
    <div className="PageTitle">
      <div className="title-text">
        <h4>{title || "Default Title"}</h4>
      </div>
    </div>
  );
}

export default PageTitle;

