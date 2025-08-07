// App.jsx
// Root component that renders the password entry form.
// Includes PasswordInput and SubmitButton components to demonstrate event handling.
import React from "react";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

// Main application component that composes the UI with heading, input field, and submit button
function App() {
  return (
    <div>
      <h1>Password Entry</h1>
      {/* Password input field with onChange event handler */}
      <PasswordInput />
      {/* Submit button with onMouseEnter and onMouseLeave event handlers */}
      <SubmitButton />
    </div>
  );
}

export default App;