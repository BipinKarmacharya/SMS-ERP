import { Link } from "react-router-dom";
import "/src/assets/CSS/Pages/Notices.css";

const NewNotice = () => {
  return (
    <>
      <div class="notice-container">
        {/* Section for new notice */}

        <div class="new-notice">
          <h2>Create and Forward a New Notice</h2>
          <form action="#" method="POST" id="noticeForm">
            <div class="notice-form-group">
              <label for="notice-title">Notice Title</label>
              <input
                type="text"
                id="notice-title"
                name="notice-title"
                required
              />
            </div>
            <div class="notice-form-group">
              <label for="notice-body">Notice Content</label>
              <textarea
                id="notice-body"
                name="notice-body"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="notice-form-group">
              <label for="notice-date">Date</label>
              <input type="date" id="notice-date" name="notice-date" required />
            </div>
            <div class="notice-form-group">
              <label for="forwarded-by">Forwarded By</label>
              <input
                type="text"
                id="forwarded-by"
                name="forwarded-by"
                required
              />
            </div>
            <button type="submit" id="noticeButton">Forward Notice</button>
          </form>
        </div>

        {/* Section for displaying previous notices */}

        <div class="notice-board">
          <h2>Previous Notices</h2>
          <div class="notice">
            <h3 class="notice-heading">Notice Title 1</h3>
            <p class="notice-date">
              Date: <strong>January 20, 2025</strong>
            </p>
            <p class="notice-body">
              This is the content of the previous notice. Important information
              is shared here.
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
              Details of another notice. This is how notices are displayed on
              the notice board.
            </p>
            <p class="notice-person">
              Notice Forwarded By: <strong>Jane Smith, Teacher</strong>
            </p>
          </div>
          <Link to ="/prev-notice">
            <button type="submit" id="noticeButton">View All Previous</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NewNotice