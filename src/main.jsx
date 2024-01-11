// Import the React library
import React from "react";

// Import the ReactDOM client module
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App.jsx";

// Import the stylesheet for the root HTML element
import "./index.css";

// Import the BackgroundVideo component
import BackgroundVideo from "./components/Particle.jsx";

// Create a React root and render the app within it
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the entire application in React's StrictMode for additional checks during development
  <React.StrictMode>
    {/* Render the BackgroundVideo component */}
    <BackgroundVideo />

    {/* Render the main App component */}
    <App />
  </React.StrictMode>
);
