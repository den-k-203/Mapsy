import React from "react";
import NavBarContent from "../components/NavBarContent";

const AdminPage = () => {
  return (
    <div>
      <NavBarContent/>
      <div className={"container"}>
        <h3 className={"center"} style={{ color: "#E1E1E1"}}>Сторінка адміністартора</h3>
        <h5 style={{ color: "#E1E1E1"}}>На данній сторінці ви можеме редагувати записи про користувачів та записи про об'єкти руйнації.</h5>
      </div>
    </div>

  );
};

export default AdminPage;