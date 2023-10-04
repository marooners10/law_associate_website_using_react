import React, { useState } from "react";
import "../Components/call.css";

const Call = () => {
  // Initialize state variables to track whether the phone icon is hovered over
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  // Function to handle mouse entering the phone icon
  const handleMouseEnterPhone = () => {
    setIsPhoneHovered(true);
  };

  // Function to handle mouse leaving the phone icon
  const handleMouseLeavePhone = () => {
    setIsPhoneHovered(false);
  };

  return (
    <div className="contact-karkilaw">
      <div
        id="phone-karki"
        onMouseEnter={handleMouseEnterPhone}
        onMouseLeave={handleMouseLeavePhone}
      >
        <i className="fa-solid fa-mobile" />
        {isPhoneHovered && <a href="tel:+9779841818297">+977 9841818297</a>}
      </div>
    </div>
  );
};

export default Call;
