import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../hooks/useMessage.hook";
import { useHttp } from "../hooks/http.hook";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const navigate = useNavigate();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ logIdent: "", password: "" });

  useEffect(() => {
    if (error != null) {
      message(error);
    }
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const response = await request("http://localhost:5000/api/auth/login", "POST", { ...form });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      auth.login(response.token, response.user);
      message(response.message);
    } catch (e) {
    }
  };

  return (
    <div className={"container"}>
      <h1 style={{ color: "#E1E1E1" }} className="center-align">
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#8e24aa">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
          />
        </svg>
        <span style={{ marginLeft: 5 }}>MAP<span style={{ color: "#8e24aa" }}>SY</span></span><br />
        <span>Авторизація</span>
      </h1>

      <div className="row">
        <form
          className="col s6 offset-s3 center-align background grey darken-4 z-depth-1"
          style={{
            padding: 30,
            borderRadius: 10,
          }}
        >
          <div className="row center-align">
            <div className="input-field col s12">
              <input
                id="logIdent"
                name="logIdent"
                type="text"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="logIdent">Логін або пошта</label>
            </div>
            <div className="input-field col s12">
              <input
                id="password"
                name="password"
                type="password"
                className="validate"
                onChange={changeHandler}
              />
              <label htmlFor="password">Пароль</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light purple darken-1"
            type="submit"
            name="action"
            style={{ marginRight: 15 }}
            onClick={loginHandler}
            disabled={loading}
          >
            Увійти
          </button>
          <button
            className="btn waves-effect waves-light purple darken-1"
            type="submit"
            name="action"
            onClick={() => navigate("/registration")}
            disabled={loading}
          >
            Реєстрація
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;