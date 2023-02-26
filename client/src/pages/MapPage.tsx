import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  return (
    <MapContainer style={{height: "90vh", width: "98.82vw"}} center={[50.4299, 30.5423]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.4299, 30.5423]}>
        <Popup>
          Моя відмітка <br /> Назар.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapPage;