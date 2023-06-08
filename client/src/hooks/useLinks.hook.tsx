import React from "react";
import {NavLink} from "react-router-dom";

const UseLinksHook = (role: string | null | undefined) => {
  switch (role) {
    case "ADMIN":
      return(
        <>
          <li><NavLink to="/home">Головна</NavLink></li>
          <li><NavLink to="/admin/destract-object">Адмін панель</NavLink></li>
          <li><NavLink to="/map">Карта</NavLink></li>
          <li><NavLink to="/analitics">Панель аналітики</NavLink></li>
        </>
      );
    case "USER":
      return(
        <>
          <li><NavLink to="/home">Головна</NavLink></li>
          <li><NavLink to="/map">Карта</NavLink></li>
          <li><NavLink to="/analitics">Панель аналітики</NavLink></li>
        </>
      );
    default:
      return (
        <>
          <li><NavLink to="/home">Головна</NavLink></li>
        </>
      );
  }
};

export default UseLinksHook;