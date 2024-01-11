// Import the stylesheet for the App component
import "./App.css";

// Import the Map and BackgroundVideo components
import Map from "./components/Map";
import BackgroundVideo from "./components/Particle";

// Define the functional component named App
function App() {
  // Define the location object with an address, latitude, and longitude
  const location = {
    address:
      "75 Aminu Kano Cres, Wuse 2, Abuja 904101, Federal Capital Territory",
    lat: 9.088469,
    lng: 7.483052,
  };

  // Define the inline styles for the App component
  const appStyles = {
    position: "relative",
    width: "100%",
    height: "100vh", // Adjust the height as needed
  };

  const headerStyles = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  };

  const footerStyles = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  };

  // Return JSX for the App component
  return (
    <div style={appStyles}>
      {/* Header */}
      <header style={headerStyles}>
        <h1>CLOUD_X</h1>
      </header>

      {/* Render the BackgroundVideo component */}
      <BackgroundVideo />

      {/* Render the Map component with the 'location' prop and 'zoomLevel' prop */}
      <Map location={location} zoomLevel={14} />

      {/* Footer */}
      <footer style={footerStyles}>
        <p>Copyright @ Cloud_X 2023</p>
      </footer>
    </div>
  );
}

// Export the App component as the default export
export default App;
