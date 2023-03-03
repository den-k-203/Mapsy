import React from "react";
import { NavLink } from "react-router-dom";

const NavBarContent = () => {
  return (
    <div className="nav-content" style={{ background: "#1F1F1F" }}>
      <ul className="tabs tabs-transparent" style={{paddingLeft: 150}}>
        <li className="tab"><NavLink to={"/admin/main"}>Основна</NavLink></li>
        <li className="tab"><NavLink to={"/admin/users"}>Користувачі</NavLink></li>
        <li className="tab"><NavLink to={"/admin/destract-object"}>Об'єкти руйнації</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBarContent;