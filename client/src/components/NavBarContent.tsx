import React from "react";
import { NavLink } from "react-router-dom";

const NavBarContent = () => {
  return (
    <nav>
      <div className="nav-wrapper" style={{ background: "#1F1F1F" }}>
        <ul id="nav-mobile" className="left hide-on-med-and-down" style={{paddingLeft: 150}}>
          <li className={""}><NavLink to={"/admin/destract-object"}>Об'єкти руйнації</NavLink></li>
          <li className={""}><NavLink to={"/admin/users"}>Користувачі</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarContent;