import { Link } from "react-router-dom";
import "/src/assets/CSS/Pages/Notices.css";

const NewNotice = () => {
  return (
    <>
      <div className="notice-container">
        {/* Section for new notice */}

        <div className="new-notice">
          <h2>Create and Forward a New Notice</h2>
          <form action="#" method="POST" id="noticeForm">
            <div className="notice-form-group">
              <label>Notice Title</label>
              <input
                type="text"
                id="notice-title"
                name="notice-title"
                required
              />
            </div>
            <div className="notice-form-group">
              <label>Notice Content</label>
              <textarea
                id="notice-body"
                name="notice-body"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="notice-form-group">
              <label>Date</label>
              <input type="date" id="notice-date" name="notice-date" required />
            </div>
            <div className="notice-form-group">
              <label>Forwarded By</label>
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

        <div className="notice-board">
          <h2>Previous Notices</h2>
          <div className="notice">
            <h3 className="notice-heading">Notice Title 1</h3>
            <p className="notice-date">
              Date: <strong>January 20, 2025</strong>
            </p>
            <p className="notice-body">
              This is the content of the previous notice. Important information
              is shared here.
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
              Details of another notice. This is how notices are displayed on
              the notice board.
            </p>
            <p className="notice-person">
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