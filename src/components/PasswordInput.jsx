// PasswordInput.jsx
// This component renders a password input field.
// It includes an event handler for the 'onChange' event to log user input activity for anti-bot monitoring.
import React from "react";

function PasswordInput() {
  // Event handler triggered when the user types in the password field.
  // Logs a message to the console for security monitoring.
  function handleChange() {
    console.log("Entering password...");
  }

  // Renders the password input field with a placeholder and event listener.
  return (
    <input
      type="password"
      placeholder="Enter your password"
      onChange={handleChange}
    />
  );
}

export default PasswordInput;