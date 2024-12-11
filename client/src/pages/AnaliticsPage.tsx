import React, { useEffect, useRef, useState } from "react";
import DOTable from "../components/Tables/DOTable";
import MyChart from "../components/charts/MyChart";
import { Marker } from "react-leaflet";
import { setDestractObjects, setFilterDestractObjects } from "../redux/slices/destractObjectSlice";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import { useMessage } from "../hooks/useMessage.hook";
import { useHttp } from "../hooks/http.hook";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import { MyPie } from "../components/charts/MyPie";
import { MyLineChart } from "../components/charts/MyLineChart";
import { MyPolar } from "../components/charts/MyPolar";
import doStore from "../store/DOStore";
import FilterChartComponent from "../components/charts/FilterChart";
import DestructionFilterForm from "../components/Modal/FilterForChart/FilterMenuChart";
import DOSearch from "../components/DOSearch";
import SortDoComponent from "../components/SortDO";


const AnalyticPage = () => {
  const initialSelect = "title";
  const initialSearch = "";
  const dispatch = useAppDispatch();
  const message = useMessage();
  const { request, error, clearError, loading } = useHttp();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const markers: Marker[] = useAppSelector(state => state.destractObject.DoList);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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

  const ref = useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const clickHandler = (e: any, markers: any) => {
    if (setThisItem) {
      e.stopPropagation();
      setThisItem(markers);
      setIsVisible(false);
      if (setSearch) {
        setSearch(markers.title);
        setThisItem(markers);
      }
    }
  };

  const inputClickHandler = (e: any) => {
    setIsVisible(true);
  };
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="col s12" style={{
          color: "white",
          background: "#1F1F1F",
          borderRadius: 15,
          marginTop: 15,
        }}>
          <h3 className={"center-align"}>Модуль <span style={{ color: "#8e24aa" }}>аналітики</span></h3>
        </div>
      </div>

      <div className={"row"} style={{ display: "flex" }}>
        <div className={"col s8"} style={{
          color: "white",
          background: "#1F1F1F",
          borderRadius: 15,
          marginBottom: 15,
          marginTop: 15,
          marginRight: 20,
          padding: 15,
        }}>
          <h4 className={"center-align"}>Графік активності</h4>
          <MyChart />
        </div>
        <div className={"col s4"}>
          <div style={{
            color: "white",
            background: "#1F1F1F",
            borderRadius: 15,
            marginBottom: 15,
            marginTop: 15,
            padding: 15,
          }}>
            <h4 className={"center-align"}>Графік кількості зруйнованих об'єктів</h4>
            <MyPie />
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        padding: 15,
      }}>
        <h4 className={"center-align"}>Інтенсивінсть агресії</h4>
        <MyLineChart />
      </div>

      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        padding: 15,
      }}>
        <div className="row">
          <h4 className={"center-align"}>Ступінь зруйнованості об'єктів</h4>
          <div className="col s12 ">
            <div className={"col s2"}></div>
            <div className={"col s8"}>
              <MyPolar />
            </div>
          </div>
        </div>
      </div>
      

      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        padding: 15,
      }}>
        <div className="row">
          <h4 className={"center-align"}>Кількість зруйнованих об'єтів</h4>
          <div className="col s12 ">
            <div className={"col s2"}></div>
            <div className={"col s8"}>
              <DestructionFilterForm/>
            </div>
          </div>
        </div>
      </div>
      
      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        padding: 15,
      }}>
        <DOSearch/>
        <SortDoComponent/>
      </div>
      
      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        padding: 15,
      }}>
        <DOTable/>
      </div>
      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        padding: 15,
      }}>
        <h3 className={"center-align"}>Найбільша технологічна катастрофа</h3>
        <div>
          <img src="../../public/img.png" alt="none" style={{ display: "block", width: "100%" }} />
        </div>
        <br />
        <div style={{ textAlign: "justify", fontSize: 20 }}>
          Російськими окупаційними військами здійснено підрив Каховської ГЕС. Внаслідок підриву машинної зали зсередини
          станцію повністю зруйновано і вона відновленню не підлягає.
          Про це повідомляє пресслужба ПрАТ «Укргідроенерго», передає Укрінформ.
        </div>
        <br />
        <div style={{ textAlign: "justify", fontSize: 20 }}>
          «Вночі 6 червня російськими окупаційними військами здійснено підрив Каховської ГЕС. Внаслідок підриву машинної
          зали зсередини Каховську ГЕС повністю зруйновано. Станція відновленню не підлягає. Станом на 9:00 6 червня
          рівень води в Каховському водосховищі стрімко знижується, розпочалась евакуація населення з потенційних
          районів затоплення», - йдеться в повідомленні.
        </div>
      </div>
    </div>
  );
};

export default AnalyticPage;