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
        <span className="postTitle">The concept of black magic in Islam</span>
        <hr />
        <span className="postDtae">1 hour ago</span>
      </div>
      <p className="postDesc">
        In the terminology of the Holy Quran and Hadeeth, Sihr (magic) refers to
        all those usual happenings which have been brought about with the active
        help of the devils (Shayateen), won over through certain practices
        likely to please them. There are several ways of pleasing the devils.
        Sometimes one sings in the praises of the devils, and sometimes recites
        formulas of a heretical nature which deny Allah or associate others with
        him. The worship of stars and planets also pleases the devils, as do
        certain evil deeds for example, preparing a charm with the blood of a
        person killed unlawfully, or refusing to adopt the prescribed modes of
        purifying oneself, or living constantly in the state of impurity.
        (Ma’ariful Quran p 270 v 1)
      </p>
    </div>
  );
};

export default Post;
