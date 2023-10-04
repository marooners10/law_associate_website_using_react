import React, { useState } from "react";
import "../Components/email.css";

const Email = () => {
  // Initialize state variables to track whether the phone icon is hovered over
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  // Function to handle mouse entering the email icon
  const handleMouseEnterEmail = () => {
    setIsEmailHovered(true);
  };

  // Function to handle mouse leaving the email icon
  const handleMouseLeaveEmail = () => {
    setIsEmailHovered(false);
  };

  return (
    <div className="email-karkilaw">
      <div
        id="email-karki"
        onMouseEnter={handleMouseEnterEmail}
        onMouseLeave={handleMouseLeaveEmail}
      >
        <i className="fa-solid fa-envelope-open-text" />
        {isEmailHovered && (
          <a href="mailto:info@karkilaw.com.np">info@karkilaw.com.np</a>
        )}
      </div>
    </div>
  );
};

export default Email;
