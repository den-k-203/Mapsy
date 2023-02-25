import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1 style={{color: "#E1E1E1"}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="#E1E1E1">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        Mapsy
      </h1>

      <div className="row">
        <form className="col center-align s12">
          <div className="row">
            <div className="input-field col s8">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s8">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" style={{marginRight:15}}>
            Вхід
          </button>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Реєстрація
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;