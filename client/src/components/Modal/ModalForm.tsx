import React, { useState } from "react";
import axios from "axios";


const ModalForm = ({ data, setData }: any) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileInputChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSaveImage = (event: any): void => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios.post("http://localhost:5000/api/admin/upload", formData).then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
    }
  };

  const changeHandler = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setData(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const changePosition0Handler = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setData(prevState => {
      return { ...prevState, [event.target.name]: [event.target.value, prevState.position[1]] };
    });
  };

  const changePosition1Handler = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setData(prevState => {
      return { ...prevState, [event.target.name]: [prevState.position[0], event.target.value] };
    });
  };

  return (
    <div>
      <form>
        <div className="input-field col s6">
          <input id="title" name="title" type="text" className="validate" value={data.title} onChange={changeHandler} />
          <label htmlFor="title" className="active">Заголовок</label>
        </div>
        <div className="input-field col s6">
          <input id="area" name="area" type="text" className="validate" value={data.area} onChange={changeHandler} />
          <label htmlFor="area" className="active">Площа м²</label>
        </div>
        <div className="input-field col s12">
          <input id="text" name="text" type="text" className="validate" value={data.text} onChange={changeHandler} />
          <label htmlFor="text" className="active">Опис</label>
        </div>
        <div className="input-field col s6">
          <input id="firstPosition" name="position" type="text" className="validate" value={data.position[0]}
                 onChange={changePosition0Handler} />
          <label htmlFor="firstPosition" className="active">Х позиція</label>
        </div>
        <div className="input-field col s6">
          <input id="secondPosition" data-length="120" name="position" type="text"
                 className="validate materialize-textarea" value={data.position[1]} onChange={changePosition1Handler} />
          <label htmlFor="secondPosition" className="active">Y позиція</label>
        </div>
        <div className="input-field col s6">
          <input id="type" name="type" type="text" className="validate" value={data.type} onChange={changeHandler} />
          <label htmlFor="type" className="active">Тип інфраструктури</label>
        </div>
        <div className="input-field col s6">
          <input id="percentageOfDestruction" name="percentageOfDestruction" type="text" className="validate"
                 value={data.percentageOfDestruction} onChange={changeHandler} />
          <label htmlFor="percentageOfDestruction" className="active">Відсоток руйнацій</label>
        </div>
        <div className="input-field col s6">
          <input id="dateOfDestruction" name="dateOfDestruction" type="text" className="validate"
                 value={data.dateOfDestruction} onChange={changeHandler} />
          <label htmlFor="dateOfDestruction" className="active">Дата руйнування</label>
        </div>
        <div className="input-field col s6">
          <input id="dateOfRecovery" name="dateOfRecovery" type="text" className="validate" value={data.dateOfRecovery}
                 onChange={changeHandler} />
          <label htmlFor="dateOfRecovery" className="active">Дата відновлення</label>
        </div>
        <div className="input-field сol s12">
          <input type="file" onChange={handleFileInputChange} accept="image/*" />
          <button onClick={handleSaveImage}>save</button>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;