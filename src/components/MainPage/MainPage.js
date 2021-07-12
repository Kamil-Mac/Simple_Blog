import ShortcutArticle from "./ShortcutArticle";
import { useSelector } from "react-redux";
import '../../style.css';

const MainPage = () => {
  
  const postsShow = useSelector((state) => state.posts);
  const postsParams = [...postsShow.posts];

  return (
    <section className="mainContainer">
      <h1 className="mainContainer__title">Articles</h1>
      <div className="mainContainer__posts">
        {postsParams.map((post) => (
          <ShortcutArticle title={post.title} key={post.id} id={post.id} />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
