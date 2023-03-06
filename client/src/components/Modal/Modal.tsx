import React, { useEffect, useState } from "react";
import InfoItem from "../Tables/InfoItem";
import ModalForm from "./ModalForm";
import { useHttp } from "../../hooks/http.hook";
import useAppSelector from "../../hooks/reduxHooks/useAppSelector.hook";
import { useMessage } from "../../hooks/useMessage.hook";
import { useDispatch } from "react-redux";
import { removeOneDestractObject, updateOneDestractObject } from "../../redux/slices/destractObjectSlice";

const Modal = ({ item, index }: any) => {
  const itemData = ["Адреса", "Площа", "Тип об'єкту", "Опис", "Зруйновано", "Дата руйнації", "Дата відновлення", "Координати"];
  const initialData = item ?
    { _id: item._id, title: item.title, position: item.position, postName: item.postName, address: item.address, type: item.type, area: item.area, imgPath: item.imgPath, text: item.text, percentageOfDestruction: item.percentageOfDestruction, dateOfDestruction: item.dateOfDestruction, dateOfRecovery: item.dateOfRecovery, } :
    { _id: "", title: "", position: [0, 0], postName: "", address: "", type: "", area: "", imgPath: "", text: "", percentageOfDestruction: "", dateOfDestruction: "", dateOfRecovery: "", };

  const [data, setData] = useState(initialData);
  const message = useMessage();
  const dispatch = useDispatch();
  const token = useAppSelector(state => state.token.accessToken);
  const { error, clearError, loading, request } = useHttp();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const updateHandler = async () => {
    const response: any = await request(
      "http://localhost:5000/api/admin/destract-object",
      "PATCH",
      {...data},// data
      { "Authorization": `Bearer ${token}` },
    );
    if (response.message) {
      message(response.message);
      dispatch(updateOneDestractObject({ ...data }));
    }
  };
  const deleteHandler = async () => {
    const response:any = await request(
      "http://localhost:5000/api/admin/destract-object",
      "DELETE",
      {_id: data._id}, // id
      { "Authorization": `Bearer ${token}` },
    );
    if (response.message) {
      message(response.message);
      dispatch(removeOneDestractObject({ _id: data._id }));
    }
  };

  return (
    <div id={"modal" + index} className="modal" style={{ borderRadius: 15 }}>
      <div className="modal-content" style={{ backgroundColor: "#1F1F1F" }}>
        <h4 className="">{item.title}</h4>
        <div className={"row"}>
          <div className={"col s5"} style={{ borderRight: "2px solid #E1E1E1" }}>
            <img src={item.imgPath} alt="Картинка вілсутня." style={{ width: "100%" }} />
            <InfoItem text={itemData[0]} value={item.address} postValue={""} />
            <InfoItem text={itemData[1]} value={item.area} postValue={"м²"} />
            <InfoItem text={itemData[2]} value={item.type} postValue={""} />
            <InfoItem text={itemData[3]} value={item.text} postValue={""} />
            <InfoItem text={itemData[4]} value={item.percentageOfDestruction} postValue={"%"} />
            <InfoItem text={itemData[5]} value={item.dateOfDestruction} postValue={""} />
            <InfoItem text={itemData[6]} value={item.dateOfRecovery} postValue={""} />
            <InfoItem text={itemData[7]} value={item.position[0]} postValue={item.position[1]} />
          </div>
          <div className={"col s7"}>
            <h6>Редагування даних</h6>
            <ModalForm item={item} data={data} setData={setData} />
          </div>
        </div>
      </div>
      <div className="modal-footer" style={{ backgroundColor: "#1F1F1F" }}>
        <button disabled={loading} className="btn green darken-3" style={{ marginRight: 10 }} onClick={updateHandler}>Оновити
        </button>
        <button disabled={loading} className="btn red darken-3" style={{ marginRight: 10 }} onClick={deleteHandler}>Видалити</button>
        <button disabled={loading} className="modal-close btn purple darken-1" style={{ marginRight: 10 }}>Закрити
        </button>
      </div>
    </div>
  );
};

export default Modal;