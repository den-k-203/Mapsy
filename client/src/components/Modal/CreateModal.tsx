import React, { useState } from "react";
import ModalForm from "./ModalForm";
import { useHttp } from "../../hooks/http.hook";
import { setDestractObjects, setFilterDestractObjects } from "../../redux/slices/destractObjectSlice";
import useAppSelector from "../../hooks/reduxHooks/useAppSelector.hook";

const CreateModal = ({ modal }: any) => {
  const initialData = {
    _id: "",
    title: "",
    position: ["", ""],
    postName: "",
    address: "",
    type: "",
    area: "",
    imgPath: "../../public/house.jpeg",
    text: "",
    percentageOfDestruction: "",
    dateOfDestruction: "",
    dateOfRecovery: "",
    location: "",
    neighborhood: ""
  };
  const [data, setData] = useState(initialData);
  const token = useAppSelector(state => state.token.accessToken);
  const { loading, request, error, clearError } = useHttp();
  const createDOHandler = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete data._id;
    const response = await request("http://localhost:5000/api/admin/destract-object", "POST", { ...data }, { "Authorization": `Bearer ${token}` });
    console.log(response.message);
  };
  return (
    <div id={modal} className={"modal"} style={{ borderRadius: 15 }}>
      <div className={"modal-content"} style={{ backgroundColor: "#1F1F1F" }}>
        <h4 className={"center"} style={{color: "#E1E1E1"}}>Створити запис про об'єкт руйнації</h4>
        <div className="row" style={{ backgroundColor: "#1F1F1F" }}>
          <ModalForm data={data} setData={setData} />
        </div>
      </div>
      <div className="modal-footer" style={{ backgroundColor: "#1F1F1F" }}>
        <button disabled={loading} className="btn green darken-3" style={{ marginRight: 10 }} onClick={createDOHandler}>Створити</button>
        <button disabled={loading} className="modal-close btn purple darken-1" style={{ marginRight: 10 }}>Закрити
        </button>
      </div>
    </div>
  );
};

export default CreateModal;