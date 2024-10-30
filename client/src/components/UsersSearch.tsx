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
          <option className="option-user" value="" disabled selected>Логін</option>
          <option className="option-user" value={"email"} >Пошта</option>
          <option className="option-user" value={"login"} >Логін</option>
          <option className="option-user" value={"firstName"} >Ім'я</option>
          <option className="option-user" value={"secondName"} >Прізвище</option>
          <option className="option-user" value={"role"} >Роль</option>
        </select>
        <label>Тип сортування</label>
      </div>
    </div>
  );
};


export default UsersSearch;