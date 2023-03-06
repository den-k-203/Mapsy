import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import { useHttp } from "../hooks/http.hook";
import { setDestractObjects } from "../redux/slices/destractObjectSlice";
import ModalItem from "../components/Modal/ModalItem";

interface Marker {
  title: string,
  position: LatLngTuple,
  postName: string,
  address: string,
  type: string,
  area: number,
  imgPath: string,
  text: string,
  percentageOfDestruction: string,
  dateOfDestruction: string,
  dateOfRecovery: string
}

const MapPage = () => {
  const dispatch = useAppDispatch();
  const {request} = useHttp();

  const markers: Marker[] = useAppSelector(state => state.destractObject.DoList);
  const token = useAppSelector(state => state.token.accessToken);
  
  const loadDataHandler = async () => {
    const data = await request(
      "http://localhost:5000/api/admin/destract-object",
      "GET",
      null,
      { "Authorization": `Bearer ${token}` }
    );
    dispatch(setDestractObjects(data));
  };

  return (
    <>
      <button className={"btn purple darken-1"} onClick={loadDataHandler}>
        Оновити
      </button>

      <MapContainer style={{ height: "90vh", width: "98.82vw" }} center={[50.4299, 30.5423]} zoom={13} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((item, index) =>  {return(<ModalItem key={index} item={item}/>);})}
      </MapContainer>
    </>
  );
};

export default MapPage;