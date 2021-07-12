import Card from "../Layout/Card";
import { IoPersonCircle } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdRemoveCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import "../../style.css";

const Comment = ({ name, body, email, id }) => {
  const dispatch = useDispatch();

  const removeFavouriteHandler = () => {
    dispatch(uiActions.removeComment(id));
  };

  return (
    <Card>
      <section className="comment">
        <div className="comment__person">
          <div className="person">
            <span>
              <IoPersonCircle className="person__icon" />
            </span>
            <h3 className="person__name">{name}</h3>
            <MdRemoveCircle
              className="comment__remove"
              title="Remove from favourites"
              onClick={removeFavouriteHandler}
            />
          </div>
        </div>
        <div className="comment__body">{body}</div>
        <div className="comment__email">
          <div className="email">
            <HiOutlineMail className="email__icon" />
          </div>
          <p>E-mail: {email}</p>
        </div>
      </section>
    </Card>
  );
};

export default Comment;
