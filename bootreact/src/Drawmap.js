import React, { useState } from "react";
import Geocoding from "./Geocoding";
import RoutingMap from "./RoutingMap";
import DrawMap from "./Drawmap";

const App = () => {
  const [start, setStart] = useState([28.7041, 77.1025]);
  const [end, setEnd] = useState([12.9716, 77.5946]); 
  const [showRouting, setShowRouting] = useState(false);
  const [showDrawing, setShowDrawing] = useState(false);

  return (
    <div>
      <h1>React-Leaflet Map Features</h1>

      <Geocoding />

      
      <div>
        <button onClick={() => setShowRouting(!showRouting)}>
          {showRouting ? "Hide Routing" : "Show Routing"}
        </button>
        <button onClick={() => setShowDrawing(!showDrawing)}>
          {showDrawing ? "Hide Drawing" : "Show Drawing"}
        </button>
      </div>


      {showRouting && <RoutingMap start={start} end={end} />}

 
      {showDrawing && <DrawMap />}
    </div>
  );
};

export default App;
