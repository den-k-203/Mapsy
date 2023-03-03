import React from "react";
import NavBarContent from "../components/NavBarContent";
import EmptyTable from "../components/Tables/EmptyTable";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import Table from "../components/Tables/Table";

const AdminDOPage = () => {
  const destractObjects = useAppSelector(state => state.destractObject.DoList);
  return (
    <>
      <NavBarContent />
      <div className={"container"}>
        <h3 className={"center-align"} style={{ color: "#E1E1E1" }}>Редагування об'єктів руйнації</h3>
        <div className={"row"}>
          <div className="input-field col s4">
            <button className={"btn purple darken-1"}>Оновити таблицю</button>
            <button className={"btn purple darken-1"} style={{marginTop: 10}}>Створити новий об'єкт</button>
          </div>
          <div className="input-field col s8">
            <input id="search" name="search" type="text" className="validate" onChange={() => "1"} />
            <label htmlFor="search">Пошук</label>
          </div>
        </div>
        {destractObjects.length > 0? <Table destractObjects={destractObjects}/> :<EmptyTable/>}
      </div>
    </>
  );
};

export default AdminDOPage;