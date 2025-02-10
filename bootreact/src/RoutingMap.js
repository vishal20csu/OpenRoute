import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";

const RoutingMap = ({ start, end }) => {
  const mapRef = useRef(null);
  const routingControlRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {

    if (!mapContainerRef.current) return;


    const map = L.map(mapContainerRef.current).setView(start, 13);
    mapRef.current = map;


    const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);


    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }]
      },
      show: true,
      addWaypoints: false,
      draggableWaypoints: true,
      fitSelectedRoutes: true
    });

    routingControl.addTo(map);
    routingControlRef.current = routingControl;


    return () => {
      try {
        
        if (routingControlRef.current) {
          routingControlRef.current.getPlan().setWaypoints([]);
          map.removeControl(routingControlRef.current);
          routingControlRef.current = null;
        }


        if (tileLayer) {
          map.removeLayer(tileLayer);
        }


        map.remove();
        mapRef.current = null;
      } catch (error) {
        console.error("Cleanup error:", error);
      }
    };
  }, [start, end]);


  useEffect(() => {
    if (routingControlRef.current && mapRef.current) {
      try {
        const newWaypoints = [
          L.latLng(start[0], start[1]),
          L.latLng(end[0], end[1])
        ];
        routingControlRef.current.setWaypoints(newWaypoints);
      } catch (error) {
        console.error("Error updating waypoints:", error);
      }
    }
  }, [start, end]);

  return (
    <div 
      ref={mapContainerRef}
      style={{ 
        width: "100%",
        height: "500px",
        position: "relative",
        zIndex: 0 
      }} 
    />
  );
};

export default RoutingMap;