import { useMapEvent } from "react-leaflet";
import { LeafletMouseEvent, Marker } from "leaflet";
import React from "react";
export default function Click({ remove }: { remove: React.Dispatch<React.SetStateAction<Marker | undefined>> }):null {
  useMapEvent("click", (event:LeafletMouseEvent) => {
    remove(undefined);
    console.log("event", event);
  });
  return null;
}