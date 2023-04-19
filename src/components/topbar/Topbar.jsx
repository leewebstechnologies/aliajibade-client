import "./topbar.css";
import { Link } from "react-router-dom";
const Topbar = () => {
  const user = false;
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <i className="topbarIcon fa-brands fa-square-facebook"></i>
        <i className="topbarIcon fa-brands fa-square-twitter"></i>
        <i className="topbarIcon fa-brands fa-square-pinterest"></i>
        <i className="topbarIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topbarCenter">
        <ul className="topbarList">
          <li className="topbarListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topbarListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topbarRight">
        {user ? (
          <img
            className="topbarImg"
            src="https://cdn.britannica.com/66/188766-050-38F1436A/Mark-Zuckerberg-2010.jpg"
            alt="jeff bezos"
          />
        ) : (
          <ul className="topbarList">
            <li className="topbarListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topbarListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topbarSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
