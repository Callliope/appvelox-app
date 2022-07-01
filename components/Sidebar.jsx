export default function sidebar() {
  return (
    <div>
      <div class="sidenav">
        <div id="topblock">
          <a href="#">Логотип</a>
        </div>

        <div class="sidebarBlock" id="chosensection">
          <a href="#" id="chosentext">
            <img
              src={"/heart (2) 1.png"}
              alt="search icon"
              class="sidebaricon "
            ></img>
            Профиль
          </a>
        </div>

        <div class="sidebarBlock">
          <a href="#">
            <img
              src={"/Vector.png"}
              alt="search icon"
              class="sidebaricon  "
            ></img>
            Врачи и клиники
          </a>
        </div>

        <div class="sidebarBlock">
          <a href="#">
            <img
              src={"/speak 1.png"}
              alt="search icon"
              class=" sidebaricon"
            ></img>
            Сообщения
          </a>
        </div>

        <div class="sidebarBlock">
          <a href="#">
            <img
              src={"/Group.png"}
              alt="search icon"
              class=" sidebaricon"
            ></img>
            Тестирование
          </a>
        </div>

        <div class="sidebarBlock">
          <a href="#">
            <img
              src={"/polesno.png"}
              alt="search icon"
              class=" sidebaricon"
            ></img>
            Полезно знать
          </a>
        </div>

        <div>
          <button class="buttonStyle">Подать заявку</button>
        </div>
        <div class="bottomElement">
          <div>
            <a href="#">
              <img
                src={"/help.png"}
                alt="search icon"
                class="sidebaricon"
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
