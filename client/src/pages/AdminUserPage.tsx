import React from "react";
import NavBarContent from "../components/NavBarContent";
import CreateModal from "../components/Modal/CreateModal";
import Search from "../components/Search";
import Table from "../components/Tables/Table";
import EmptyTable from "../components/Tables/EmptyTable";
import { useHttp } from "../hooks/http.hook";

const AdminUserPage = () => {
  const {loading, request, clearError, error} = useHttp();
  const loadDataHandler = () => {return 0;};
  return (
    <div>
      <NavBarContent />
      <div className={"container"}>
        <h3 className={"center-align"} style={{ color: "#E1E1E1" }}>Редагування записів користувачів</h3>
        <div className={"row"}>
          <div className="input-field col s4">
            <button className={"btn purple darken-1"} disabled={loading} onClick={loadDataHandler}>Оновити таблицю</button>
            <button className={"btn purple darken-1 modal-trigger"} data-target={"create-modal"}  disabled={loading} style={{marginTop: 10}}>Створити новий об'єкт</button>
            <CreateModal modal={"create-modal"}/>
          </div>
          {/*<Search search={search} selectOnChangeHandle={selectOnChangeHandle} select={select} searchOnChangeHandler={searchOnChangeHandler}/>*/}
        </div>
        <EmptyTable/>
        {/*{filteredData.length > 0? <Table loading={loading} destractObjects={destractObjects}/> :<EmptyTable/>}*/}
      </div>
    </div>
  );
};

export default AdminUserPage;