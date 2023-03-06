import React from "react";

const ModalForm = ({ data, setData }: any) => {


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
          <label htmlFor="area" className="active">Площа</label>
        </div>
        <div className="input-field col s12">
          <input id="text" name="text" type="text" className="validate" value={data.text} onChange={changeHandler} />
          <label htmlFor="text" className="active">Опис</label>
        </div>
        <div className="input-field col s6">
          <input id="firstPosition" name="firstPosition" type="text" className="validate" value={data.position[0]}
                 onChange={changePosition0Handler} />
          <label htmlFor="firstPosition" className="active">Х позиція</label>
        </div>
        <div className="input-field col s6">
          <input id="secondPosition" data-length="120" name="secondPosition" type="text"
                 className="validate materialize-textarea" value={data.position[1]} onChange={changePosition1Handler} />
          <label htmlFor="secondPosition" className="active">Y позиція</label>
        </div>
        <div className="input-field col s6">
          <input id="type" name="type" type="text" className="validate" value={data.type} onChange={changeHandler} />
          <label htmlFor="type" className="active">Тип об'єкту</label>
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
        {/*<div className="file-field input-field">*/}
        {/*  <div className="btn purple darken-1">*/}
        {/*    <span>Картинка</span>*/}
        {/*    <input type="file" multiple />*/}
        {/*  </div>*/}
        {/*  <div className="file-path-wrapper">*/}
        {/*    <input className="file-path validate" type="text" placeholder="Завантажте фото" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </form>
    </div>
  );
};

export default ModalForm;