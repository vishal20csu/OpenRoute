import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Geocoding = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/location?query=${query}`);
      const data = response.data;
      
      if (data.Latitude && data.Longitude) {
        setLocation({ lat: data.Latitude, lng: data.Longitude });
      }
    } catch (error) {
      console.error("Error fetching location", error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter location" />
      <button onClick={fetchLocation}>Search</button>

      {location && (
        <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
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
