import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import { useHttp } from "../hooks/http.hook";
import { setDestractObjects } from "../redux/slices/destractObjectSlice";
import ModalItem from "../components/Modal/ModalItem";
import { useMessage } from "../hooks/useMessage.hook";

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
  const message = useMessage();
  const { request, error, clearError, loading } = useHttp();

  const markers: Marker[] = useAppSelector(state => state.destractObject.DoList);
  const token = useAppSelector(state => state.token.accessToken);

  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  useEffect(() => {
    if (markers.length === 0) {
      loadDataHandler();
    }
  }, []);

  const loadDataHandler = async () => {
    const data = await request(
      "http://localhost:5000/api/admin/destract-object",
      "GET",
      null,
      { "Authorization": `Bearer ${token}` },
    );
    dispatch(setDestractObjects(data));
  };

  return (
    <>
      <div className={"row"} style={{ marginTop: 15 }}>
        <div className={"col s6"}>
          <button disabled={loading} className={"btn purple darken-1"} onClick={loadDataHandler}>
            Оновити
          </button>
        </div>
        <div className={"col s6 right-align"}>
          <button disabled={loading} className={"btn purple darken-1"}>
            Пошук...
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col s8">
          <MapContainer style={{ height: "70vh", width: "65vw" }} center={[50.4299, 30.5423]} zoom={13}
                        scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((item, index) => {
              return (<ModalItem key={index} item={item} />);
            })}
          </MapContainer>
        </div>
        <div className={"col s4"} style={{ color: "white" }}>
          Info
        </div>
      </div>
    </>
  );
};

export default MapPage;