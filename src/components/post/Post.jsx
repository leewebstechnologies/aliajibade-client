import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1681121311532-e4882571a74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Arabic</span>
          <span className="postCategory">Islamic Monotheism</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDtae">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        perspiciatis labore ipsam, harum quia ea ipsum facilis alias distinctio
        quibusdam mollitia perferendis vel cumque quis dolore sint aliquid
        aspernatur. Iste. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Commodi perspiciatis labore ipsam, harum quia ea ipsum facilis
        alias distinctio quibusdam mollitia perferendis vel cumque quis dolore
        sint aliquid aspernatur. Iste. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Commodi perspiciatis labore ipsam, harum quia ea ipsum
        facilis alias distinctio quibusdam mollitia perferendis vel cumque quis
        dolore sint aliquid aspernatur. Iste. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Commodi perspiciatis labore ipsam, harum
        quia ea ipsum facilis alias distinctio quibusdam mollitia perferendis
        vel cumque quis dolore sint aliquid aspernatur. Iste.
      </p>
    </div>
  );
};

export default Post;
