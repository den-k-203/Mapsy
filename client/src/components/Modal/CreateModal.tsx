import React, { useState } from "react";
import ModalForm from "./ModalForm";
import { useHttp } from "../../hooks/http.hook";

const CreateModal = ({ modal }: any) => {
  const initialData = {
    _id: "",
    title: "",
    position: ["", ""],
    postName: "",
    address: "",
    type: "",
    area: "",
    imgPath: "",
    text: "",
    percentageOfDestruction: "",
    dateOfDestruction: "",
    dateOfRecovery: "",
  };
  const [data, setData] = useState(initialData);
  console.log("D", data);
  const { loading, request, error, clearError } = useHttp();
  return (
    <div id={modal} className={"modal"} style={{ borderRadius: 15 }}>
      <div className={"modal-content"} style={{ backgroundColor: "#1F1F1F" }}>
        <h4 className={"center"} style={{color: "#E1E1E1"}}>Створити запис про об'єкт руйнації</h4>
        <div className="row" style={{ backgroundColor: "#1F1F1F" }}>
          <ModalForm data={data} setData={setData} />
        </div>
      </div>
      <div className="modal-footer" style={{ backgroundColor: "#1F1F1F" }}>
        <button disabled={loading} className="btn green darken-3" style={{ marginRight: 10 }} onClick={() => "0"}>Створити</button>
        <button disabled={loading} className="modal-close btn purple darken-1" style={{ marginRight: 10 }}>Закрити
        </button>
      </div>
    </div>
  );
};

export default CreateModal;