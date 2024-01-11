// Import the React library
import React from "react";

// Import the GoogleMapReact library
import GoogleMapReact from "google-map-react";

// Import the external stylesheet for the map component
import "./map.css";

// Import the LocationPin component
import LocationPin from "./LocationPin";

// Define a functional component named Map that takes 'location' and 'zoomLevel' props
const Map = ({ location, zoomLevel }) => {
  // Return JSX for the Map component
  return (
    // Container div with the class 'map'
    <div className="map">
      {/* Heading with the class 'map-h2' */}
      <h2 className="map-h2"> VISIT US from 8am - 6pm MONDAY- FRIDAY</h2>

      {/* Container div with the class 'google-map' */}
      <div className="google-map">
        {/* GoogleMapReact component with API key, default center, and default zoom */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDwSui_zHOZqbvuInHXycfhGPTsY9BikN8" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          {/* LocationPin component with latitude, longitude, and text from 'location' prop */}
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

// Export the Map component as the default export
export default Map;
