
import React, { useState } from "react";
import RoutingMap from "./RoutingMap";


const App = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [destination, setDestination] = useState(""); 


  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStart([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error fetching location: ", error);
          alert("Failed to get location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };


  const getDestinationLocation = async () => {
    if (!destination) {
      alert("Please enter a destination.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/location?query=${destination}`
      );
      const data = await response.json();

      if (data.length > 0) {
        setEnd([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Error fetching destination: ", error);
      alert("Failed to fetch location. Check the backend server.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Map Routing</h1>


      <button onClick={getCurrentLocation}>Get Current Location</button>


      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
      <button onClick={getDestinationLocation}>Find Destination</button>


      {start && end && <RoutingMap start={start} end={end} />}
    </div>
  );
};

export default App;
