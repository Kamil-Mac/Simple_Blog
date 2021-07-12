import ShortcutArticle from "./ShortcutArticle";
import classes from "./MainPage.module.css";
import { useSelector } from "react-redux";

const MainPage = () => {
  
  const postsShow = useSelector((state) => state.posts);
  const postsParams = [...postsShow.posts];

  return (
    <section className={classes.mainContainer}>
      <h1 className={classes.mainContainer__title}>Articles</h1>
      <div className={classes.mainContainer__posts}>
        {postsParams.map((post) => (
          <ShortcutArticle title={post.title} key={post.id} id={post.id} />
        ))}
      </div>
    </section>
  );
};

export default MainPage;
