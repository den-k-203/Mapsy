import React, { useRef, useState } from "react";

const DOSearch = ({ filterMarkers, setSearch, setThisItem, select, selectOnChangeHandle, search, searchOnChangeHandler }: any) => {
  const ref = useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const clickHandler = (e: any, markers: any) => {
    if (setThisItem) {
      e.stopPropagation();
      setThisItem(markers);
      setIsVisible(false);
      if (setSearch){
        setSearch(markers.title);
        setThisItem(markers);
      }
    }
  };

  const inputClickHandler = (e: any) => {
    setIsVisible(true);
  };

  return (	
    <div style={{position: "absolute", zIndex: 10000}}>
      <div onClick={inputClickHandler} className="input-field col s8">
        <input id="search" name="search" type="text" className="validate" value={search}
               onChange={searchOnChangeHandler} />
        <label htmlFor="search">Пошук</label>
        {search.length !== 0 &&
            (<div  id={"elements"} ref={ref && undefined} className={"col"}
                style={ isVisible? { position: "absolute", zIndex: 10001 } : { position: "absolute", zIndex: 10001, visibility: "hidden" }}>
              {filterMarkers?.map((markers: any, index: number) => {
                return (
                  <div key={index} onClick={(e) => clickHandler(e, markers)}
                       style={{ color: "#E1E1E1", backgroundColor: "#1F1F1F", padding: "10px" }}>
                    {markers.title}
                  </div>
                );
              })}
            </div>
          )}
      </div>

      <div className="input-field col s4">
        <select value={select} onChange={selectOnChangeHandle}>
          <option value="" disabled selected>Тип</option>
          <option value={"type"}>Тип</option>
          <option value={"title"}>Заголовок</option>
          <option value={"address"}>Адреса</option>
        </select>
        <label>Значення сортування</label>
      </div>
    </div>
  );
};

export default DOSearch;