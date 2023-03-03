import React from "react";
import NavBarContent from "../components/NavBarContent";

const AdminDOPage = () => {
  return (
    <>
      <NavBarContent />
      <div className={"container"}>
        <h3 style={{ color: "#E1E1E1" }}>Редагування Об'єктів руйнції</h3>
        <div className={"row"}>
          <div className="input-field col s4">
            <button className={"btn purple darken-1"}>Оновити таблицю</button>
            <button className={"btn purple darken-1"} style={{marginTop: 10}}>Створити новий об'єкт</button>
          </div>
          <div className="input-field col s8">
            <input id="search" name="search" type="text" className="validate" onChange={() => "1"} />
            <label htmlFor="search">Пошук</label>
          </div>
        </div>
        <div className="row">
          <table className="center" style={{color: "white", background: "#1F1F1F", borderRadius: 15}}>
            <thead>
            <tr>
              <th># </th>
              <th> </th>
              <th> </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1.</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>2.</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>3.</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>4.</td>
              <td> </td>
              <td> </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDOPage;