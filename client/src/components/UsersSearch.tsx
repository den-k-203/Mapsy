import React from "react";

const UsersSearch = ({select, selectOnChangeHandle, search, searchOnChangeHandler}:any) => {
  return (
    <div className={"col s8"}>
      <div className="input-field col s7">
        <input id="search" name="search" type="text" className="validate" value={search} onChange={searchOnChangeHandler} />
        <label htmlFor="search">Пошук</label>
      </div>
      <div className="input-field col s5">
        <select value={select} onChange={selectOnChangeHandle}>
          <option value="" disabled selected>Логін</option>
          <option value={"email"} >Пошта</option>
          <option value={"login"} >Логін</option>
          <option value={"firstName"} >Ім'я</option>
          <option value={"secondName"} >Прізвище</option>
          <option value={"role"} >Роль</option>
        </select>
        <label>Тип сортування</label>
      </div>
    </div>
  );
};


export default UsersSearch;