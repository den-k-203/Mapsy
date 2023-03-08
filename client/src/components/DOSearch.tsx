import React from "react";

const DOSearch = ({select, selectOnChangeHandle, search, searchOnChangeHandler}:any) => {
  return (
    <div>
      <div className="input-field col s7">
        <input id="search" name="search" type="text" className="validate" value={search} onChange={searchOnChangeHandler} />
        <label htmlFor="search">Пошук</label>
      </div>
      <div className="input-field col s5">
        <select value={select} onChange={selectOnChangeHandle}>
          <option value="" disabled selected>Тип</option>
          <option value={"type"} >Тип</option>
          <option value={"title"} >Заголовок</option>
          <option value={"postName"} >Поштовий індекс</option>
          <option value={"address"} >Адреса</option>
        </select>
        <label>Тип сортування</label>
      </div>
    </div>
  );
};

export default DOSearch;