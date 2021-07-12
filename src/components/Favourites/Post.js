import classes from "../FullArticles/BigArticle.module.css";
import Card from "../Layout/Card";
import { MdRemoveCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const BigArticle = ({ title, body, id }) => {

  const dispatch = useDispatch();

  const removeFavouriteHandler = () => {
    dispatch(uiActions.removePost(id));
  };

  return (
    <Card>
      <section className={classes.post}>
        <div className={classes.title}>
          <h1 className={classes.title__param}>{title}</h1>
          <MdRemoveCircle
              className={classes.title__remove}
              title="Remove from favourites"
              onClick={removeFavouriteHandler}
            />
        </div>
        <article className={classes.post__body}>{body}</article>
      </section>
    </Card>
  );
};

export default BigArticle;
