import Card from "../Layout/Card";
import classes from "./CommentSection.module.css";
import { IoPersonCircle } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { MdRemoveCircle } from "react-icons/md";

const CommentSection = ({ name, body, email, id }) => {

  const dispatch = useDispatch();
  const commentObj = {
    name,
    body,
    email,
    id,
  };

  const addToFavouriteHandler = () => {
    dispatch(uiActions.addComment(commentObj, id));
  };

  const removeFavouriteHandler = () => {
    dispatch(uiActions.removeComment(id));
  };

  return (
    <Card>
      <section className={classes.comment}>
        <div className={classes.comment__person}>
          <div className={classes.person}>
            <span>
              <IoPersonCircle className={classes.person__icon} />
            </span>
            <h3 className={classes.person__name}>{name}</h3>
          </div>
          <span>
            <AiFillHeart
              className={classes.comment__add}
              onClick={addToFavouriteHandler}
              title="Add to favourites"
            />
            <MdRemoveCircle
              className={classes.comment__remove}
              title="Remove from favourites"
              onClick={removeFavouriteHandler}
            />
          </span>
        </div>
        <div className={classes.comment__body}>{body}</div>
        <div className={classes.comment__email}>
          <div className={classes.email}>
            <HiOutlineMail className={classes.email__icon} />
          </div>
          <p>E-mail: {email}</p>
        </div>
      </section>
    </Card>
  );
};

export default CommentSection;
