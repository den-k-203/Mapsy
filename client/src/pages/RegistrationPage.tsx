import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useMessage } from "../hooks/useMessage.hook";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";

const RegistrationPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const navigate = useNavigate();
  const {loading, request, error, clearError} = useHttp();
  const [form, setForm] = useState({
    email: null,
    login: null,
    firstName: null,
    secondName: null,
    password: null,
    rePassword: null
  });

  useEffect(() => {
    if (error != null) {
      message(error);
    }
    clearError();
  },[error, message, clearError]);

  const changeHandler = (event: any) => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const registrationHandler = async () => {
    try {
      const response = await request("http://localhost:5000/api/auth/registration", "POST", {...form});
      message(response.message);
    } catch (e) {}
  };

  return (
    <div className={"container"}>
      <h1 style={{color: "#E1E1E1"}}>
        <span style={{marginRight: 5}}>Реєстрація на</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#E1E1E1">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        <span style={{marginLeft: 5}}>Mapsy</span>
      </h1>

      <div className="row" >
        <form className="col center-align s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="firstName">Ім'я</label>
            </div>
            <div className="input-field col s6">
              <input
                id="secondName"
                name="secondName"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="secondName">Прізвище</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                name="email"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="email">Пошта</label>
            </div>
            <div className="input-field col s6">
              <input
                id="login"
                name="login"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="login">Логін</label>
            </div>
            <div className="input-field col s6">
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="password">Пароль</label>
            </div>
            <div className="input-field col s6">
              <input
                id="rePassword"
                name="rePassword"
                type="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="rePpassword">Повтор пароля</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            style={{marginRight:15}}
            onClick={() => navigate("/login")}
            disabled={loading}
          >
            Вхід
          </button>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            disabled={loading}
            onClick={registrationHandler}
          >
            Реєстрація
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;