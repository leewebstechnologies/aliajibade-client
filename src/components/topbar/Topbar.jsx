import "./topbar.css";

const Topbar = () => {
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
          <li className="topbarListItem">HOME</li>
          <li className="topbarListItem">ABOUT</li>
          <li className="topbarListItem">CONTACT</li>
          <li className="topbarListItem">WRITE</li>
          <li className="topbarListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topbarRight">
        <img
          className="topbarImg"
          src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
          alt=""
        />
        <i className="topbarSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
