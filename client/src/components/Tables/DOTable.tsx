import { FC, useEffect, useState } from "react";
import M from "materialize-css";
import FilterDOComponent from "../Modal/Filter/FilterDOComponent";
import doStore from "../../store/DOStore";
import { observer } from "mobx-react";
import DOHttp from "../../http/DOhttp";
import DestructionObject from "../../types/ObjectDestroy";
import EditModalComponent from "../Modal/Edit/EditModal";
import useAppSelector from "../../hooks/reduxHooks/useAppSelector.hook";
import ModalInfoComponent from "../Modal/ModalInfo";

const DOTable: FC = observer(() => {
  const role = useAppSelector(state => state.user.role);
  const [visibleCount, setVisibleCount] = useState(50);

  const fetchDO = async () => {
    const response = await DOHttp.getDOAll();
    if (response && response.status == 200) {
      doStore.init(response.data);
    }
  };

  useEffect(() => {
    M.AutoInit();
    fetchDO();
  }, []);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 50);
  };

  return (
    <div className="row">
      <FilterDOComponent />
      {doStore.destructionObjects.length === 0 ? (
        <div className="empty-do">Список зруйнованих об'єктів пустий</div>
      ) : (
        <>
          <table
            className="center"
            style={{ color: "white", background: "#1F1F1F", borderRadius: 15 }}
          >
            <thead>
              <tr>
                <th className="center-align">Номер</th>
                <th className="center-align">Заголовок</th>
                <th className="center-align">Тип руйнації</th>
                <th className="center-align">Адреса</th>
                <th className="center-align">...</th>
                {role === "ADMIN" && <th className="center-align">Дії</th>}
              </tr>
            </thead>
            <tbody>
              {doStore.destructionObjects.slice(0, visibleCount).map((item: DestructionObject, index: number) => (
                <tr key={item._id}>
                  <td className="center-align">{index + 1}.</td>
                  <td className="center-align">{item.title}</td>
                  <td className="center-align">{item.typeDestruction}</td>
                  <td className="center-align">{item.address}</td>
                  <td className="center-align">...</td>
                  {role === "ADMIN" && (
                    <td className="center-align">
                      <EditModalComponent item={item} />
                    </td>
                  )}
                  <td className="center-align">
                    <ModalInfoComponent item={item}/>
                  </td>
                  <td className="center-align">...</td>
                </tr>
              ))}
            </tbody>
          </table>
          {visibleCount < doStore.destructionObjects.length && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button onClick={loadMore} className="btn">
                Показати ще 50
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default DOTable;
