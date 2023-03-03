import React from "react";

const Table = ({ destractObjects }: any) => {

  return (
    <div className="row">
      <table className="center" style={{ color: "white", background: "#1F1F1F", borderRadius: 15 }}>
        <thead>
        <tr>
          <th className={"center-align"}>Номер</th>
          <th className={"center-align"}>Заголовок</th>
          <th className={"center-align"}>Поштовий індекс</th>
          <th className={"center-align"}>Адреса</th>
          <th className={"center-align"}>...</th>
          <th className={"center-align"}>Дії</th>
        </tr>
        </thead>
        <tbody>
        {destractObjects.map((item: any, index: number) => {
          return (
            <tr key={index}>
              <td className={"center-align"}>{index + 1}.</td>
              <td className={"center-align"}>{item.title}</td>
              <td className={"center-align"}>{item.postName}</td>
              <td className={"center-align"}>{item.address}</td>
              <td className={"center-align"}>...</td>
              <td className={"center-align"}>
                <button className={"btn purple darken-1"}>
                  <span>Повна інформація</span>
                </button>
                {/*<button className={"btn green darken-3"} style={{ marginBottom: 10, display:"flex", alignItems: "center !important" }}>*/}
                {/*  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E1E1E1">*/}
                {/*    <path d="M0 0h24v24H0z" fill="none" />*/}
                {/*    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />*/}
                {/*  </svg>*/}
                {/*</button>*/}
                {/*<button className={"btn red darken-3"} style={{display:"flex", alignItems: "center !important"}}>*/}
                {/*  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#E1E1E1">*/}
                {/*    <path d="M0 0h24v24H0z" fill="none" />*/}
                {/*    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />*/}
                {/*  </svg>*/}
                {/*</button>*/}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;