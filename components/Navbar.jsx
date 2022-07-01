export default function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbarstyle ">
        <div class="container-fluid">
          <a class="navbar-brand textcolor topText" href="#">
            Мой профиль
          </a>

          <ul>
            <li>
              <a href="#">
                <img
                  src={"/search.png"}
                  alt="search icon"
                  class="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={"/bell.png"}
                  alt="bell icon"
                  class="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>

            <li>
              <a href="#">
                <img
                  src={"/eye 1.png"}
                  alt="eye icon"
                  class="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={"/profilepic.png"}
                  alt="Profile picture"
                  class="d-inline-block  profileStyle"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={"/open.png"}
                  alt="open icon"
                  class="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
