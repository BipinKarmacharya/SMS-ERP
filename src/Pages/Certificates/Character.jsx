import PageTitle from "../../Components/PageTitle";
import "/src/assets/CSS/Pages/Certificates.css";
const Character = () => {
  return (
    <>
      <div className="character-certificate">
        <div className="character">
          <div className="certificateHeader">
            <div className="logo">Logo</div>
            <div className="schoolDetails">
              <span className="schoolName">Institute Name</span>
              <span className="address">Address of Institute</span>
              <span className="targetLine">"Target Line of Institute"</span>
            </div>

            <div className="photo">Photo</div>
          </div>
          <h2 className="redTitle">Transfer/Character Certificate</h2>
          <div className="certificateText">
            <p>
              This is to certify that Mr./Miss.{" "}
              <span className="underline">____________________</span>,
              son/daughter of Mr./Mrs.{" "}
              <span className="underline">____________________</span>, a
              resident of
              <span className="underline">____________________</span> district,
              ward no. <span className="underline">____</span>, has duly
              completed the Secondary Education Examination (SEE), Grade-10 in
              the year
              <span className="underline">_________ B.S.</span> with Grade Point
              Average (GPA) <span className="underline">____</span>. His/Her
              Date of Birth according to the school records is{" "}
              <span className="underline">_________ B.S.</span>
            </p>
            <p>
              He/She bears a <u>good</u> moral character in the school period. We
              extend good wishes for his/her life in the future.
            </p>
            <p>
              Symbol No.: <span className="underline">_________</span>
            </p>
            <p>
              Registration No.: <span className="underline">_________</span>
            </p>
          </div>
          <div className="characterFooter">
            <span> Issue Date:______________</span>
            <span> Prepared by:_______________</span>
            <span> Principal:_________________</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Character;
