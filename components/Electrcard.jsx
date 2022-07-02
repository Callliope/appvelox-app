export default function Electrcard() {
  return (
    <div>
      <a class="titlecardblock">Электронная карта</a>
      <div className="cardblock">
        <div className="childBlock">
          <div>
            <img src={"/Rectangle52.png"}></img>
            <img id="miniicon1" src={"/patientinfo.png"}></img>
          </div>
          <div className="textasideimg">
            <a className="textasidetop ">Информация о пациенте</a>
            <ul>
              <li>Ваши личные данные</li>
              <li>Рекомендации врачей</li>
              <li>История болезней</li>
            </ul>
          </div>
        </div>
        <div className="childBlock">
          <div>
            <img src={"/whiteRectangle.png"}></img>
            <img id="miniicon2" src={"/results.png"}></img>
          </div>
          <div className="textasideimg">
            <a className="textasidetop">Результаты анализов</a>
            <p>Вы можете узнать здесь результаты своих анализов</p>
          </div>
        </div>
        <div className="childBlock">
          <div>
            <img src={"/whiteRectangle.png"}></img>
            <img id="miniicon3" src={"/addinfo.png"}></img>
          </div>
          <div className="textasideimg">
            <a className="textasidetop">Добавить информацию</a>
            <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
          </div>
        </div>
        <div className="childBlock">
          <div>
            <img src={"/whiteRectangle.png"}></img>
            <img id="miniicon4" src={"/patienthistory.png"}></img>
          </div>
          <div className="textasideimg">
            <a className="textasidetop">История приемов</a>
            <p>
              Вся информация о полученных услугах за все время хранится здесь
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
