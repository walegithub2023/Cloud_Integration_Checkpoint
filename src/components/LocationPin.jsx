// Import the React library
import React from "react";

// Import the SketchOutlined icon from the Ant Design library
import { SketchOutlined } from "@ant-design/icons";

// Define a functional component named LocationPin that takes a 'text' prop
const LocationPin = ({ text }) => {
  // Return JSX for the LocationPin component
  return (
    // Container div with the class 'pin'
    <div className="pin">
      {/* SketchOutlined icon with a red color and the class 'pin-icon' */}
      <SketchOutlined style={{ color: "red" }} className="pin-icon" />

      {/* Paragraph element with the class 'pin-text' and content from the 'text' prop */}
      <p className="pin-text">{text}</p>
    </div>
  );
};

// Export the LocationPin component as the default export
export default LocationPin;
