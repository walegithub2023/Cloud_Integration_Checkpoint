// Import the React library
import React from "react";

// Define a functional component named BackgroundVideo
const BackgroundVideo = () => {
  // Return JSX for the BackgroundVideo component
  return (
    // Container div with inline styles for positioning and dimensions
    <div
      style={{
        position: "fixed", // Fixed position in the viewport
        top: 0, // Positioned at the top
        left: 0, // Positioned at the left
        width: "100%", // Full width of the viewport
        height: "100%", // Full height of the viewport
        zIndex: -1, // Set z-index to place it behind other elements
      }}
    >
      {/* Image element with a GIF source for the background */}
      <img
        src="/bg.gif" // Source URL for the background image
        alt="Background" // Alternative text for accessibility
        style={{ width: "100%", height: "100%", objectFit: "cover" }} // Inline styles for width, height, and object-fit
      />
    </div>
  );
};

// Export the BackgroundVideo component as the default export
export default BackgroundVideo;
