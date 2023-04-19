import "./singlepost.css";

const Singlepost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1681677827479-98ebac575dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ali</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta
          doloribus autem. Laborum eligendi excepturi minima ducimus qui atque
          nihil dolorem cumque, repudiandae, animi exercitationem expedita
          repellendus, cupiditate labore explicabo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Saepe soluta doloribus autem. Laborum
          eligendi excepturi minima ducimus qui atque nihil dolorem cumque,
          repudiandae, animi exercitationem expedita repellendus, cupiditate
          labore explicabo? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Saepe soluta doloribus autem. Laborum eligendi excepturi minima
          ducimus qui atque nihil dolorem cumque, repudiandae, animi
          exercitationem expedita repellendus, cupiditate labore explicabo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta
          doloribus autem. Laborum eligendi excepturi minima ducimus qui atque
          nihil dolorem cumque, repudiandae, animi exercitationem expedita
          repellendus, cupiditate labore explicabo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Saepe soluta doloribus autem. Laborum
          eligendi excepturi minima ducimus qui atque nihil dolorem cumque,
          repudiandae, animi exercitationem expedita repellendus, cupiditate
          labore explicabo? Laborum eligendi excepturi minima ducimus qui atque
          nihil dolorem cumque, repudiandae, animi exercitationem expedita
          repellendus, cupiditate labore explicabo? Laborum eligendi excepturi
          minima ducimus qui atque nihil dolorem cumque, repudiandae, animi
          exercitationem expedita repellendus, cupiditate labore explicabo?
          Laborum eligendi excepturi minima ducimus qui atque nihil dolorem
          cumque, repudiandae, animi exercitationem expedita repellendus,
          cupiditate labore explicabo?
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
