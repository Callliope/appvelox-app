export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarstyle ">
        <div className="container-fluid">
          <a className="navbar-brand textcolor topText" href="#">
            Мой профиль
          </a>

          <ul>
            <li>
              <a href="#">
                <img
                  src={"/search.png"}
                  alt="search icon"
                  className="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={"/bell.png"}
                  alt="bell icon"
                  className="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>

            <li>
              <a href="#">
                <img
                  src={"/eye 1.png"}
                  alt="eye icon"
                  className="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={"/profilepic.png"}
                  alt="Profile picture"
                  className="d-inline-block  profileStyle"
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={"/open.png"}
                  alt="open icon"
                  className="d-inline-block  iconStyle"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
