import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Geocoding = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    if (!query) return alert("Enter a location");

    try {

      const response = await fetch(`/location?query=${query}`);
      const data = await response.json();
      

      
      if (data.length > 0) {
        setLocation({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Error fetching location", error);
      alert("Failed to fetch location");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={fetchLocation}>Search</button>

      {location && (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[location.lat, location.lng]}>
            <Popup>Location: {query}</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Geocoding;
