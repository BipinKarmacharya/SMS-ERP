import "/src/assets/CSS/Pages/Notices.css";

const PreviousNotice = () => {
  return (
    <>
      <div className="notice-board">
        <h2>Previous Notices</h2>
        <div className="notice">
          <h3 className="notice-heading">Notice Title 1</h3>
          <p className="notice-date">
            Date: <strong>January 20, 2025</strong>
          </p>
          <p className="notice-body">
            This is the content of the previous notice. Important information is
            shared here.
          </p>
          <p className="notice-person">
            Notice Forwarded By: <strong>John Doe, Principal</strong>
          </p>
        </div>
        <div className="notice">
          <h3 className="notice-heading">Notice Title 2</h3>
          <p className="notice-date">
            Date: <strong>January 18, 2025</strong>
          </p>
          <p className="notice-body">
            Details of another notice. This is how notices are displayed on the
            notice board.
          </p>
          <p className="notice-person">
            Notice Forwarded By: <strong>Jane Smith, Teacher</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default PreviousNotice
