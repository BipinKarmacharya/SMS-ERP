import "/src/assets/CSS/Pages/Notices.css";

const PreviousNotice = () => {
  return (
    <>
      <div class="notice-board">
        <h2>Previous Notices</h2>
        <div class="notice">
          <h3 class="notice-heading">Notice Title 1</h3>
          <p class="notice-date">
            Date: <strong>January 20, 2025</strong>
          </p>
          <p class="notice-body">
            This is the content of the previous notice. Important information is
            shared here.
          </p>
          <p class="notice-person">
            Notice Forwarded By: <strong>John Doe, Principal</strong>
          </p>
        </div>
        <div class="notice">
          <h3 class="notice-heading">Notice Title 2</h3>
          <p class="notice-date">
            Date: <strong>January 18, 2025</strong>
          </p>
          <p class="notice-body">
            Details of another notice. This is how notices are displayed on the
            notice board.
          </p>
          <p class="notice-person">
            Notice Forwarded By: <strong>Jane Smith, Teacher</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default PreviousNotice
