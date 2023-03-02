import React from "react";
import { Marker, Popup } from "react-leaflet";

const MarkerItem = ({item}:any) => {
  return (
    <Marker position={item.position}>
      <Popup>
        <div>
          <img src={item.imgPath} alt="none" style={{ height: "200px", width: "300px" }} />
          <div>{item.type}</div>
          <div>{item.title} {item.postName}</div>
          <div>{item.text} Дата
            руйнації {item.dateOfDestruction} Зруйновано {item.percentageOfDestruction} .Площа {item.area}</div>
          <div>Дата відновлення {item.dateOfRecovery}</div>
        </div>
      </Popup>
    </Marker>
  );
};

export default MarkerItem;