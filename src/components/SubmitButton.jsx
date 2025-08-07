// SubmitButton.jsx
import React from "react";

// A React component that renders a submit button and logs mouse enter/leave events for anti-bot tracking.
function SubmitButton() {
  // Logs when the user's mouse enters the submit button area
  function handleEnter() {
    console.log("Mouse Entering");
  }

  // Logs when the user's mouse leaves the submit button area
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  // Render the button and attach mouse event handlers
  return (
    <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      Submit Password
    </button>
  );
}

export default SubmitButton;