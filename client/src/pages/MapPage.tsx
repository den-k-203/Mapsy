import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import { useHttp } from "../hooks/http.hook";
import { setDestractObjects, setFilterDestractObjects } from "../redux/slices/destractObjectSlice";
import { useMessage } from "../hooks/useMessage.hook";
import InfoItem from "../components/Tables/InfoItem";
import DOSearch from "../components/DOSearch";
import MyMapContainer from "../components/MyMapContainer";

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
  const initialSelect = "title";
  const initialSearch = "";
  const dispatch = useAppDispatch();
  const message = useMessage();
  const { request, error, clearError, loading } = useHttp();

  const markers: Marker[] = useAppSelector(state => state.destractObject.DoList);
  const filterMarkers: Marker[] = useAppSelector(state => state.destractObject.filterDoList);
  const token = useAppSelector(state => state.token.accessToken);
  const kievRegionCities = [
    "Баришівка",
    "Біла Церква",
    "Богуслав",
    "Бориспіль",
    "Боярка",
    "Бровари",
    "Васильків",
    "Вишневе",
    "Ірпінь",
    "Кагарлик",
    "Києво-Святошинський район",
    "Макарів",
    "Обухів",
    "Переяслав-Хмельницький",
    "Ржищів",
    "Сквира",
    "Славутич",
    "Тараща",
    "Тетіїв",
    "Узин",
    "Українка",
    "Фастів",
    "Яготин",
  ];

  const defaultFilterConstructor = {
    place: "Київ",
    type: "Критична інфраструктура",
    degreeOfDestruction: "Частково",
    startDate: "2022-01-01",
    endDate: "2023-06-05",
  };

  const [filterConstructor, setFilterConstructor] = useState(defaultFilterConstructor);

  const changeHandler = (event: any): void => {
    setFilterConstructor(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const useFilterConstructor = (): Marker[] => {
    return filterMarkers
      .filter(marker => marker.type === filterConstructor.type)
      .filter(marker => marker.address.includes(filterConstructor.place))
      .filter(marker => marker.percentageOfDestruction === filterConstructor.degreeOfDestruction)
      .filter(marker => marker.dateOfDestruction > filterConstructor.startDate || marker.dateOfDestruction < filterConstructor.endDate,
      );
  };

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

  console.log(filterConstructor);


  const loadDataHandler = async () => {
    const data = await request("http://localhost:5000/api/admin/destract-object", "GET", null, { "Authorization": `Bearer ${token}` });
    dispatch(setDestractObjects(data));
  };

  // new
  const [thisItem, setThisItem] = useState<Marker | undefined>();
  const itemData = ["Адреса", "Площа", "Тип інфраструктури", "Опис", "Зруйновано", "Дата руйнації", "Дата відновлення", "Координати"];

  const [select, setSelect] = useState<string>(initialSelect);
  const [search, setSearch] = useState<string>(initialSearch);

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
  const [zIndex, setZindex] = useState(9999);
  console.log(zIndex);

  return (
    <>
      <div className={"row"} style={{ marginTop: 5, marginBottom: 0 }}>
        <div className={"col s1 left-align"} style={{ marginTop: "2%" }}>
          <button disabled={loading} className={"btn purple darken-1"} onClick={loadDataHandler}>Оновити</button>
        </div>

        <div className={"col s7"}>
          <div className="input-field col s3">
            <select value={filterConstructor.place} onChange={event => setFilterConstructor(
              prevState => {
                return { ...prevState, place: event.target.value };
              },
            )}>
              <optgroup label="Київ (Райони)">
                <option defaultChecked={true} value="Київ">Київ</option>
                <option value="Шевченківський район">Шевченківський район</option>
                <option value="Печерський район">Печерський район</option>
                <option value="Деснянський район">Деснянський район</option>
                <option value="Дніпровський район">Дніпровський район</option>
                <option value="Оболонський район">Оболонський район</option>
                <option value="Голосіївський район">Голосіївський район</option>
                <option value="Солом'янський район">Солом'янський район</option>
                <option value="Подільський район">Подільський район</option>
                <option value="Святошинський район">Святошинський район</option>
                <option value="Дарницький район">Дарницький район</option>
              </optgroup>
              <optgroup label="Київська область (Населені пункти)">
                <option value="99">Київська область</option>
                {kievRegionCities.map((item, index) =>
                  <option value={index}>{item}</option>)}
              </optgroup>
            </select>
            <label>Місто або область</label>
          </div>
          <div className="input-field col s3">
            <select value={filterConstructor.type} onChange={event => setFilterConstructor(
              prevState => {
                return { ...prevState, type: event.target.value };
              },
            )}>
              <option value="" disabled selected>Тип інфраструктури</option>
              <option defaultChecked={true} value="Транспортна інфраструктура">Транспортна інфраструктура</option>
              <option value="Енергетична інфраструктура">Енергетична інфраструктура</option>
              <option value="Комунальна інфраструктура">Комунальна інфраструктура</option>
              <option value="Соціальна інфраструктура">Соціальна інфраструктура</option>
              <option value="Критична інфраструктура">Критична інфраструктура</option>
              <option value="Воєнна інфраструктура">Воєнна інфраструктура</option>
              <option value="Інші об'єкти">Інші об'єкти</option>
            </select>
            <label>Тип</label>
          </div>
          <div className="input-field col s2">
            <select value={filterConstructor.degreeOfDestruction} onChange={event => setFilterConstructor(
              prevState => {
                return { ...prevState, degreeOfDestruction: event.target.value };
              },
            )}>
              <option value="" disabled selected>Обрати значення</option>
              <option defaultChecked={true} value="Частково">Частково</option>
              <option value="Повністю">Повністю</option>
              <option value="На фазі ремонту">На фазі ремонту</option>
              <option value="Не ремонтована">Не ремонтована</option>
              <option value="Невідновна">Невідновна</option>
            </select>
            <label>Ступінь зруйнованості</label>
          </div>
          <div className="input-field col s2">
            <input type="date" value={filterConstructor.startDate}
                   onChange={event => setFilterConstructor(
                     prevState => {
                       return { ...prevState, startDate: event.target.value };
                     },
                   )} />
            <label>Від</label>
          </div>
          <div className="input-field col s2">
            <input className={"date"} type="date" value={filterConstructor.endDate}
                   onChange={event => setFilterConstructor(
                     prevState => {
                       return { ...prevState, endDate: event.target.value };
                     },
                   )} />
            <label>До</label>
          </div>
        </div>

        <div className={"col s4"}>
          <DOSearch
            setSearch={setSearch}
            setThisItem={setThisItem}
            filterMarkers={filterMarkers}
            search={search}
            selectOnChangeHandle={selectOnChangeHandle}
            select={select}
            searchOnChangeHandler={searchOnChangeHandler}
          />
        </div>
      </div>

      <div className="row">
        <div className={thisItem ? "col s8" : "col s12"} onClick={(e: any) => {

          if (thisItem) {
            setZindex(9999);
          } else {
            setZindex(0);
          }
        }

        }>
          <MyMapContainer setZindex={setZindex} thisItem={thisItem} setThisItem={setThisItem}
                          filterMarkers={filterMarkers} />
        </div>
        {thisItem &&
          <div className={"col s4"} style={{ color: "white", marginTop: 0 }}>
            <div style={{
              backgroundColor: "#1f1f1f",
              padding: "10px",
              height: "70vh",
              position: "absolute",
              zIndex: zIndex,
            }}>
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
          </div>}

      </div>
    </>
  );
};

export default MapPage;