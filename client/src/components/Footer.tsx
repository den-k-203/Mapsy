import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer" style={{background: "#1F1F1F"}}>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Всі права захищені.</h5>
              <p className="grey-text text-lighten-4">Документація детально описана окремо IPS 23.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Особисті контакти</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Профіль github</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Телеграм</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Пошта</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Сигнал</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Військовий Інститут Телекомінкацій та Інформатизації імені Героїв Крут
            <a className="grey-text text-lighten-4 right" href="#!">© 2023</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;