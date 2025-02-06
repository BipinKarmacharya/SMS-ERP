import React from "react";
import "/src/assets/CSS/Components/Header.css";

const Header = () => {
  return (
    <header className="header">
        <div className="instituteLogo">
          <img src="/Images/VIDYA-white.png" alt="Logo" />
        </div>
        
        <div className="schoolDetails">
          <span className="schoolName">Institute Name</span>
          <span className="address">Address of Institute</span>
          <span className="targetLine">"Target Line of Institute"</span>
        </div>

        <div className="navIcons"></div>
    </header>
  );
};

export default Header;
