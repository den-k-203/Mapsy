import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import { useHttp } from "../hooks/http.hook";
import { setDestractObjects, setFilterDestractObjects } from "../redux/slices/destractObjectSlice";
import ModalItem from "../components/Modal/ModalItem";
import { useMessage } from "../hooks/useMessage.hook";
import InfoItem from "../components/Tables/InfoItem";
import DOSearch from "../components/DOSearch";

interface Marker {
  _id?: string | undefined,
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
  const filterMarkers: Marker[] = useAppSelector(state => state.destractObject.filterDoList);
  const token = useAppSelector(state => state.token.accessToken);

  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  useEffect(() => {
    M.AutoInit();
    if (markers.length === 0) loadDataHandler();
  }, []);

  useEffect(() => {
    if (filterMarkers.length === 0 && markers.length !== 0) {
      dispatch(setFilterDestractObjects(markers));
    }
  }, [markers]);

  const loadDataHandler = async () => {
    const data = await request("http://localhost:5000/api/admin/destract-object", "GET", null, { "Authorization": `Bearer ${token}` });
    dispatch(setDestractObjects(data));
  };

  // new
  const [thisItem, setThisItem] = useState<any>(markers[0]);
  const itemData = ["Адреса", "Площа", "Тип об'єкту", "Опис", "Зруйновано", "Дата руйнації", "Дата відновлення", "Координати"];

  const [select, setSelect] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const selectOnChangeHandle = (event: any) => {
    setSelect(event.target.value);
  };
  const searchOnChangeHandler = (event: any) => {
    const query = event.target.value;
    setSearch(query);
    let updateForm = [...markers];
    updateForm = updateForm.filter((DO) => {
      switch (select) {
        case "postName":
          return DO.postName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "address":
          return DO.address.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "type":
          return DO.type.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "area":
          return DO.area.toString().indexOf(query.toLowerCase()) !== -1;
        case "title":
          return DO.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "percentageOfDestruction":
          return DO.percentageOfDestruction.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "dateOfDestruction":
          return DO.dateOfDestruction.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "dateOfRecovery":
          return DO.dateOfRecovery.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        default:
          return DO.type.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    });
    dispatch(setFilterDestractObjects(updateForm));
  };
  return (
    <>
      <div className={"row"} style={{ marginTop: 5, marginBottom: 0 }}>
        <div className={"col s7 left-align"} style={{ marginTop: "2%" }}>
          <button disabled={loading} className={"btn purple darken-1"} onClick={loadDataHandler}>
            Оновити
          </button>
        </div>
        <div className={"col s5"}>
          <DOSearch search={search} selectOnChangeHandle={selectOnChangeHandle} select={select}
                    searchOnChangeHandler={searchOnChangeHandler} />
        </div>
      </div>

      <div className="row">
        <div className="col s8">
          <MapContainer style={{ height: "70vh", width: "65vw" }} center={[50.4299, 30.5423]} zoom={13}
                        scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filterMarkers.length !== 0 && filterMarkers.map((item, index) => {
              return (<ModalItem key={index} item={item} setItem={setThisItem} />);
            })}
          </MapContainer>
        </div>
        <div className={"col s4"} style={{ color: "white", marginTop: 0 }}>
          {thisItem ?
            <div>
              <img src={thisItem.imgPath} alt="Картинка вілсутня." style={{ width: "100%" }} />
              <h5 className={"center-align"} style={{ marginTop: 0 }}>{thisItem.title}</h5>
              <InfoItem text={itemData[0]} value={thisItem.address} postValue={""} />
              <InfoItem text={itemData[1]} value={thisItem.area} postValue={"м²"} />
              <InfoItem text={itemData[2]} value={thisItem.type} postValue={""} />
              <InfoItem text={itemData[3]} value={thisItem.text} postValue={""} />
              <InfoItem text={itemData[4]} value={thisItem.percentageOfDestruction} postValue={"%"} />
              <InfoItem text={itemData[5]} value={thisItem.dateOfDestruction} postValue={""} />
              <InfoItem text={itemData[6]} value={thisItem.dateOfRecovery} postValue={""} />
              <InfoItem text={itemData[7]} value={thisItem.position[0]} postValue={thisItem.position[1]} />
            </div>
            :
            <div className={"center-align"}>
              <h4 style={{ marginTop: 0 }}>Інформація</h4>
              <div style={{
                backgroundColor: "#1E1E1E",
                boxSizing: "border-box",
                width: "31vw",
                height: "59vh",
                borderRadius: 15,
              }}></div>
            </div>}
        </div>
      </div>
    </>
  );
};

export default MapPage;