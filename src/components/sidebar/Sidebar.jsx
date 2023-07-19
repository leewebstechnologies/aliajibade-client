import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/id/485854429/photo/smiling-african-man-in-a-park.jpg?s=612x612&w=0&k=20&c=5MoBNEQ9NxaGi1HGkUJiZJ-e-5Rl1BEfoh60hnSmfxk="
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          totam dolores impedit optio necessitatibus.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Islamic Etiquette</li>
          <li className="sidebarListItem">Islamic Monotheism</li>
          <li className="sidebarListItem">Arabic</li>
          <li className="sidebarListItem">Hadith</li>
          <li className="sidebarListItem">Fiqh</li>
          <li className="sidebarListItem">Seerah</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon topbarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon topbarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon topbarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon topbarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
