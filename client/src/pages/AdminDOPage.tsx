import React, { useEffect, useState } from "react";
import NavBarContent from "../components/NavBarContent";
import EmptyTable from "../components/Tables/EmptyTable";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import Table from "../components/Tables/Table";
import { setDestractObjects } from "../redux/slices/destractObjectSlice";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/useMessage.hook";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import Search from "../components/Search";
import CreateModal from "../components/Modal/CreateModal";

const AdminDOPage = () => {
  const destractObjects = useAppSelector(state => state.destractObject.DoList);
  const token = useAppSelector(state => state.token.accessToken);

  const dispatch = useAppDispatch();
  const message = useMessage();
  const {loading, clearError, error, request} = useHttp();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, clearError, loading]);

  useEffect(() => {
    if(destractObjects.length === 0) {
      loadDataHandler();
    }
  },[]);

  const loadDataHandler = async () => {
    const data = await request(
      "http://localhost:5000/api/admin/destract-object",
      "GET",
      null,
      { "Authorization": `Bearer ${token}` },
    );
    dispatch(setDestractObjects(data));
  };

  const [select, setSelect] = useState<string>("");
  const selectOnChangeHandle = (event:any) => {setSelect(event.target.value);};

  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilterDataFrom] = useState(destractObjects);
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
        case "text":
          return DO.text.toLowerCase().indexOf(query.toLowerCase()) !== -1;
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
    setFilterDataFrom(updateForm);
  };

  return (
    <div>
      <NavBarContent />
      <div className={"container"}>
        <h3 className={"center-align"} style={{ color: "#E1E1E1" }}>Редагування об'єктів руйнації</h3>
        <div className={"row"}>
          <div className="input-field col s4">
            <button className={"btn purple darken-1"} disabled={loading} onClick={loadDataHandler}>Оновити таблицю</button>
            <button className={"btn purple darken-1 modal-trigger"} data-target={"create-modal"}  disabled={loading} style={{marginTop: 10}}>Створити новий об'єкт</button>
            <CreateModal modal={"create-modal"}/>
          </div>
          <Search search={search} selectOnChangeHandle={selectOnChangeHandle} select={select} searchOnChangeHandler={searchOnChangeHandler}/>
        </div>
        {filteredData.length > 0? <Table loading={loading} destractObjects={destractObjects}/> :<EmptyTable/>}
      </div>
    </div>
  );
};

export default AdminDOPage;