import React, { useEffect, useState } from "react";
import NavBarContent from "../components/NavBarContent";
import EmptyTable from "../components/Tables/EmptyTable";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import DOTable from "../components/Tables/DOTable";
import { setDestractObjects, setFilterDestractObjects } from "../redux/slices/destractObjectSlice";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/useMessage.hook";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import DOSearch from "../components/DOSearch";
import CreateModal from "../components/Modal/CreateModal";

const AdminDOPage = () => {
  const destractObjects = useAppSelector(state => state.destractObject.DoList);
  const filterDO = useAppSelector(state => state.destractObject.filterDoList);
  const token = useAppSelector(state => state.token.accessToken);

  const dispatch = useAppDispatch();
  const message = useMessage();
  const { loading, clearError, error, request } = useHttp();

  const [select, setSelect] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  useEffect(() => {
    if (destractObjects.length === 0) {
      loadDataHandler();
    }
  }, []);

  useEffect(() => {
    if (filterDO.length === 0 && destractObjects.length !== 0) {
      dispatch(setFilterDestractObjects(destractObjects));
    }
  }, [destractObjects]);

  const loadDataHandler = async () => {
    const data = await request("http://localhost:5000/api/admin/destract-object", "GET", null, { "Authorization": `Bearer ${token}` });
    dispatch(setDestractObjects(data));
  };

  const selectOnChangeHandle = (event: any) => {
    setSelect(event.target.value);
  };

  const searchOnChangeHandler = (event: any) => {
    const query = event.target.value;
    setSearch(query);
    let updateForm = [...destractObjects];
    updateForm = updateForm.filter((DO) => {
      switch (select) {
        case "_id":
          return DO._id.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "position":
          return DO.position.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "postName":
          return DO.postName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "address":
          return DO.address.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "type":
          return DO.type.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "area":
          return DO.area.toLowerCase().indexOf(query.toLowerCase()) !== -1;
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
    <div>
      <NavBarContent />
      <div className={"container"}>
        <h3 className={"center-align"} style={{ color: "#E1E1E1" }}>Редагування записів об'єктів руйнації</h3>
        <div className={"row"}>
          <div className="input-field col s4">
            <button className={"btn purple darken-1"} disabled={loading} onClick={loadDataHandler}>Оновити таблицю
            </button>
            <button className={"btn purple darken-1 modal-trigger"} data-target={"create-modal"} disabled={loading}
                    style={{ marginTop: 10 }}>Створити новий об'єкт
            </button>
            <CreateModal modal={"create-modal"} />
          </div>
          <div className={"col s8"}>
            <DOSearch search={search} selectOnChangeHandle={selectOnChangeHandle} select={select}
                      searchOnChangeHandler={searchOnChangeHandler} />
          </div>
        </div>
        {filterDO.length !== 0 ? (<DOTable loading={loading} />) : (<EmptyTable />)}
      </div>
    </div>
  );
};

export default AdminDOPage;