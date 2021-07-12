import { Link } from "react-router-dom";
import '../../style.css';

const ShortcutArticle = ({ title, id }) => {
  return (
    <>
      <article className="shortPost">
        <div className="shortPost__title">
          <p className="shortPost__description">{title}</p>
        </div>
        <Link to={`posts/${id}`}>
          <button className="button button--readMore">Read More</button>
        </Link>
      </article>
    </>
  );
};

export default ShortcutArticle;
