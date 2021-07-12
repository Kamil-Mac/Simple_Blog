import classes from "./ShortcutArticle.module.css";
import { Link } from "react-router-dom";
const ShortcutArticle = ({ title, id }) => {
  return (
    <>
      <article className={classes.shortPost}>
        <div className={classes.shortPost__title}>
          <p className={classes.shortPost__description}>{title}</p>
        </div>
        <Link to={`posts/${id}`}>
          <button className={classes.shortPost__readMoreButton}>Read More</button>
        </Link>
      </article>
    </>
  );
};

export default ShortcutArticle;
