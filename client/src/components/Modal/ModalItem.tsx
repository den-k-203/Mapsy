import React from "react";
import { Marker, Popup } from "react-leaflet";

const ModalItem = ({item, setItem, setZindex}:any) => {
  const setItemHandler = (event:any) => {
    if(setItem){
      setItem(item);
    }
  };

  return (
      <Marker  position={item.position} eventHandlers={{click: setItemHandler}}>
        <Popup>
          <div onClick={setItemHandler}>
            <div>{item.title} {item.postName}</div>
          </div>
        </Popup>
      </Marker>

  );
};

export default ModalItem;