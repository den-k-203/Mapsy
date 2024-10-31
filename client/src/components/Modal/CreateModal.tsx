import { useState } from "react";
import ModalForm from "./ModalForm";
import useAppSelector from "../../hooks/reduxHooks/useAppSelector.hook";
import DestructedObjectData from "../../types/ObjectDestroy";
import DOHttp from "../../http/DOhttp";
import doStore from "../../store/DOStore";
import { toast } from "react-toastify";

const CreateModal = ({ modal }: any) => {
  const initialData: DestructedObjectData = {
      _id: undefined,
      title: "",
      position: ["", ""],
      postName: "01001",
      address: "",
      imgPath: "../../public/none_image.jpg",
      typeInfrastructure: "",
      description: "",
      percentageOfDestruction: "",
      dateOfDestruction: "",
      dateOfRecovery: "",
      neighborhood: "",
      typeDestruction: "",
      countVictims: 0,
      whatDestroyed: "",
      areaName: "",
      area: 0,
      stateDestruction: ""
  };

  const [data, setData] = useState(initialData);
  const token = useAppSelector(state => state.token.accessToken);

  const createDOHandler = async () => {
    if(token){
      const response = await DOHttp.createDO(token, data)
      if(response.data && response.status == 200){
        doStore.addDestructionObject(response.data)
        
        toast.success("Об'єкт успішно створено!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setData({
          _id: undefined,
          title: "",
          position: ["", ""],
          postName: "01001",
          address: "",
          imgPath: "../../public/none_image.jpg",
          typeInfrastructure: "",
          description: "",
          percentageOfDestruction: "",
          dateOfDestruction: "",
          dateOfRecovery: "",
          neighborhood: "",
          typeDestruction: "",
          countVictims: 0,
          whatDestroyed: "",
          areaName: "",
          area: 0,
          stateDestruction: ""
        })
      }
    }
  };

  return (
    <div id={'create-modal'} className={"modal"} style={{ borderRadius: 15}}>
      <div className={"modal-content"} style={{ backgroundColor: "#1F1F1F" }}>
        <h4 className={"center"} style={{color: "#E1E1E1"}}>Створити запис про об'єкт руйнації</h4>
          <ModalForm data={data} setData={setData} />
      </div>
      <div className="modal-footer" style={{ backgroundColor: "#1F1F1F" }}>
        <button className="modal-close btn green darken-3" style={{ marginRight: 10 }} onClick={createDOHandler}>
          Створити
        </button>
        <button className="modal-close btn purple darken-1" style={{ marginRight: 10 }}>
          Закрити
        </button>
      </div>
    </div>
  );
};

export default CreateModal;