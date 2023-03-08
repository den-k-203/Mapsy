import React, { useEffect, useState } from "react";
import NavBarContent from "../components/NavBarContent";
import CreateModal from "../components/Modal/CreateModal";
import EmptyTable from "../components/Tables/EmptyTable";
import { useHttp } from "../hooks/http.hook";
import useAppSelector from "../hooks/reduxHooks/useAppSelector.hook";
import useAppDispatch from "../hooks/reduxHooks/useAppDispatch.hook";
import { useMessage } from "../hooks/useMessage.hook";
import { setFilterUsers, setUsers } from "../redux/slices/usersSlice";
import UsersTable from "../components/Tables/UsersTable";
import UsersSearch from "../components/UsersSearch";

const AdminUserPage = () => {
  const users = useAppSelector(state => state.users.users);
  const filterUsers = useAppSelector(state => state.users.filtersUsers);
  const token = useAppSelector(state => state.token.accessToken);

  const {loading, clearError, error, request} = useHttp();
  const dispatch = useAppDispatch();
  const message = useMessage();

  useEffect(() => {message(error);clearError();}, [error, clearError, loading]);
  useEffect(() => {if(users.length === 0) {loadDataHandler();}},[]);
  useEffect(() => {
    if (filterUsers.length === 0 && users.length !== 0) {
      dispatch(setFilterUsers(users));
    }
  }, [users]);

  const loadDataHandler = async () => {
    const data = await request("http://localhost:5000/api/admin/user", "GET", null, { "Authorization": `Bearer ${token}` },);
    dispatch(setUsers(data));
  };

  const [select, setSelect] = useState<string>("");
  const selectOnChangeHandle = (event:any) => {setSelect(event.target.value);};

  const [search, setSearch] = useState<string>("");
  const searchOnChangeHandler = (event: any) => {
    const query = event.target.value;
    setSearch(query);
    let updateForm = [...users];
    updateForm = updateForm.filter((user) => {
      switch (select) {
        case "_id":
          return user._id.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "email":
          return user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "login":
          return user.login.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "firstName":
          return user.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "secondName":
          return user.secondName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        case "role":
          return user.role.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        default:
          return user.login.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    });
    dispatch(setFilterUsers(updateForm));
  };

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
          <UsersSearch search={search} selectOnChangeHandle={selectOnChangeHandle} select={select} searchOnChangeHandler={searchOnChangeHandler}/>
        </div>
        {filterUsers.length !== 0? (<UsersTable loading={loading}/> ) : (<EmptyTable/>)}
      </div>
    </div>
  );
};

export default AdminUserPage;