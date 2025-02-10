// import React from "react";
// import "/src/assets/CSS/Components/Header.css";

// // Import Icons
// import { MdOutlineLogout } from "react-icons/md";
// import { LuUserRoundCog } from "react-icons/lu";
// import { HiMenuAlt1 } from "react-icons/hi";


// import { useState } from "react";

// const Header = () => {
//   const [isCardVisible, setIsCardVisible] = useState(false);

//   const toggleCard = () => {
//     setIsCardVisible(!isCardVisible);
//   };

//   return (
//     <div className="header-container">
//       <header className="navHeader">
//         <div className="instituteLogo">
//           <img src="/Images/VIDYA-white.png" alt="Logo" id="instituteLogo" />
//         </div>
//         <HiMenuAlt1 id="menuIcon"/>
//         <div className="schoolDetails">
//           <span className="schoolName">Institute Name</span>
//           <span className="address">Address of Institute</span>
//           <span className="targetLine">"Target Line of Institute"</span>
//         </div>
//         <div className="navImg">
//           <img
//             src="/Images/VIDYA-white.png"
//             alt="User Profile"
//             id="userProfile"
//             onClick={toggleCard}
//           />
//         </div>
//       </header>

//       {/* Dropdown Card */}
//       <div className={`dropdown ${isCardVisible ? "active" : ""}`}>
//         <ul>
//           <li>Profile <LuUserRoundCog className="dropdownIcon"/></li>
//           <li>Logout  <MdOutlineLogout className="dropdownIcon"/></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import "/src/assets/CSS/Components/Header.css";

// Import Icons
import { MdOutlineLogout } from "react-icons/md";
import { LuUserRoundCog } from "react-icons/lu";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = ({ toggleSidebar }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="header-container">
      <header className="navHeader">
        <div className="instituteLogo">
          <img src="/Images/VIDYA-white.png" alt="Logo" id="instituteLogo" />
        </div>
        <HiMenuAlt1 id="menuIcon" onClick={toggleSidebar} />
        <div className="schoolDetails">
          <span className="schoolName">Institute Name</span>
          <span className="address">Address of Institute</span>
          <span className="targetLine">"Target Line of Institute"</span>
        </div>
        <div className="navImg">
          <img
            src="/Images/VIDYA-white.png"
            alt="User Profile"
            id="userProfile"
            onClick={toggleCard}
          />
        </div>
      </header>

      {/* Dropdown Card */}
      <div className={`dropdown ${isCardVisible ? "active" : ""}`}>
        <ul>
          <li>Profile <LuUserRoundCog className="dropdownIcon"/></li>
          <li>Logout  <MdOutlineLogout className="dropdownIcon"/></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


