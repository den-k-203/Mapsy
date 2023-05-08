import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import ModalItem from "./Modal/ModalItem";
import Click from "../hooks/click.hook";

const MyMapContainer = ({ filterMarkers, thisItem, setThisItem, setZindex }: {
  filterMarkers: any[],
  thisItem: any,
  setThisItem: React.Dispatch<React.SetStateAction<any>>,
  setZindex: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <div>
      {!!thisItem ?
        <MapContainer style={{ height: "70vh", width: "65vw" }} center={[50.4299, 30.5423]} zoom={13}
                      scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filterMarkers.length !== 0 && filterMarkers.map((item, index) => {
            return (<ModalItem key={index} item={item} setZindex={setZindex} setItem={setThisItem} />);
          })}
          <Click remove={setThisItem} />
        </MapContainer>
        :
        <MapContainer style={{ height: "70vh", width: "98vw" }}
                      center={[50.4299, 30.5423]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {filterMarkers.length !== 0 && filterMarkers.map((item, index) => {
            return (<ModalItem key={index} item={item} setItem={setThisItem} />);
          })}
          <Click remove={setThisItem} />
        </MapContainer>
      }

    </div>

  );
};

export default MyMapContainer;