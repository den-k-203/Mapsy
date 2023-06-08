import React from "react";

const HomePage = () => {
  return (
    <div className={"container"}>
      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        marginRight: 20,
        padding: 15,
      }}>
        <h4 className={"center-align"} style={{ color: "#E1E1E1" }}>Наслідки руйнації в резутаті агресії РФ</h4>
        <div>
          <img src="../../public/house2.jpeg" alt="house" style={{width:"100%"}}/>
        </div>
        <br/>
        <p style={{ color: "#E1E1E1", fontSize: 20, textAlign: "justify" }}>
          Понад 170 тисяч зруйнованих житлових будинків по всій Україні. Це – один із наслідків повномасштабної збройної агресії Росії, яка розпочалась 24 лютого минулого року. Такі дані станом на січень 2023 року наводить Міністерство розвитку громад, територій та інфраструктури України. Але ця статистика продовжує зростати щодня, поки триває війна, після чергових обстрілів російською армією українських міст, сіл та селищ.
        </p>
      </div>

      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        marginRight: 20,
        padding: 15,
      }}>
        <h3 className={"center-align"}>Найбільша технологічна катастрофа</h3>
        <div style={{display:"flex", flexWrap:"wrap"}}>
          <img src="../../public/img.png" alt="none" style={{ display: "block", width: "50%", paddingRight:5, paddingBottom:5  }} />
          <img src="../../public/img_1.png" alt="none" style={{ display: "block", width: "50%", paddingBottom:5 }} />
          <img src="../../public/img_10.png" alt="none" style={{ display: "block", width: "100%", paddingBottom:5 }} />
        </div>
        <br />
        <div style={{ textAlign: "justify", fontSize: 20 }}>
          Російськими окупаційними військами здійснено підрив Каховської ГЕС. Внаслідок підриву машинної зали зсередини
          станцію повністю зруйновано і вона відновленню не підлягає.
          Про це повідомляє пресслужба ПрАТ «Укргідроенерго», передає Укрінформ.
        </div>
        <br />
        <div style={{ textAlign: "justify", fontSize: 20 }}>
          «Вночі 6 червня російськими окупаційними військами здійснено підрив Каховської ГЕС. Внаслідок підриву машинної
          зали зсередини Каховську ГЕС повністю зруйновано. Станція відновленню не підлягає. Станом на 9:00 6 червня
          рівень води в Каховському водосховищі стрімко знижується, розпочалась евакуація населення з потенційних
          районів затоплення», - йдеться в повідомленні.
        </div>
      </div>
      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        marginRight: 20,
        padding: 15,
      }}>
        <h3 className={"center-align"}>Фотодокази злочинів РФ</h3>
        <div style={{display:"flex", flexWrap:"wrap"}}>
          <img src="../../public/img_2.png" alt="none" style={{ display: "block", width: "50%", paddingRight:5, paddingBottom:5 }} />
          <img src="../../public/img_3.png" alt="none" style={{ display: "block", width: "50%", paddingBottom:5 }} />
          <img src="../../public/img.png" alt="none" style={{ display: "block", width: "50%", paddingRight:5, paddingBottom:5 }} />
          <img src="../../public/img_1.png" alt="none" style={{ display: "block", width: "50%", paddingBottom:5 }} />
          <img src="../../public/img_4.png" alt="none" style={{ display: "block", width: "50%", paddingRight:5, paddingBottom:5 }} />
          <img src="../../public/img_5.png" alt="none" style={{ display: "block", width: "50%" , paddingBottom:5}} />
          <img src="../../public/img_6.png" alt="none" style={{ display: "block", width: "50%", paddingRight:5, paddingBottom:5 }} />
          <img src="../../public/img_7.png" alt="none" style={{ display: "block", width: "50%" , paddingBottom:5}} />
          <img src="../../public/img_8.png" alt="none" style={{ display: "block", width: "50%", paddingRight:5, paddingBottom:5 }} />
          <img src="../../public/img_9.png" alt="none" style={{ display: "block", width: "50%", paddingBottom:5 }} />
        </div>
      </div>
      <div className={"col s12"} style={{
        color: "white",
        background: "#1F1F1F",
        borderRadius: 15,
        marginBottom: 15,
        marginTop: 15,
        marginRight: 20,
        padding: 15,
      }}>
        <div style={{ textAlign: "justify", fontSize: 20 }}>
          З 24 лютого Росія розпочала повномасштабне вторгнення по всій довжині спільного кордону, від Луганська до
          Чернігова, а також із території Білорусі й окупованого Криму. Російські війська завдають авіаударів[1] по
          ключових об'єктах військової та цивільної інфраструктури. Руйнують аеродроми[2], військові частини,
          нафтобази[3], заправки, церкви, школи, лікарні, пологові та цілі міста і села України. Вбивають мирне
          населення. Наносять збитків Україні на трильйони гривень.
        </div>
      </div>
    </div>
  );
};

export default HomePage;