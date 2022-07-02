export default function sidebar() {
  return (
    <div>
      <div className="sidenav">
        <div id="topblock">
          <a href="#">Логотип</a>
        </div>

        <div className="sidebarBlock" id="chosensection">
          <a href="#" id="chosentext">
            <img
              src={"/heart (2) 1.png"}
              alt="search icon"
              className="sidebaricon "
            ></img>
            Профиль
          </a>
        </div>

        <div className="sidebarBlock">
          <a href="#">
            <img
              src={"/Vector.png"}
              alt="search icon"
              className="sidebaricon  "
            ></img>
            Врачи и клиники
          </a>
        </div>

        <div className="sidebarBlock">
          <a href="#">
            <img
              src={"/speak 1.png"}
              alt="search icon"
              className=" sidebaricon"
            ></img>
            Сообщения
          </a>
        </div>

        <div className="sidebarBlock">
          <a href="#">
            <img
              src={"/Group.png"}
              alt="search icon"
              className=" sidebaricon"
            ></img>
            Тестирование
          </a>
        </div>

        <div className="sidebarBlock">
          <a href="#">
            <img
              src={"/polesno.png"}
              alt="search icon"
              className=" sidebaricon"
            ></img>
            Полезно знать
          </a>
        </div>

        <div>
          <button className="buttonStyle">Подать заявку</button>
        </div>
        <div className="bottomElement">
          <div>
            <a href="#">
              <img
                src={"/help.png"}
                alt="search icon"
                className="sidebaricon"
              ></img>
              Помощь
            </a>
          </div>

          <img src={"/logo.png"} alt="appvelox logo" id="appveloxlogo"></img>
        </div>
      </div>
    </div>
  );
}
