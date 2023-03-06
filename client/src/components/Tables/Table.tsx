import React, { useEffect } from "react";
import M from "materialize-css";
import Modal from "../Modal/Modal";

const Table = ({ destractObjects, loading }: any) => {

  useEffect(() => {
    M.AutoInit();
  }, []);

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
          <th className={"center-align"}>Інформація</th>
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
                <button data-target={"modal" + index} disabled={loading} className={"btn modal-trigger purple darken-1"}>
                  <span>Повна інформація</span>
                </button>
                <Modal item={item} index={index} />
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