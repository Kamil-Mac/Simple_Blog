import Card from "../Layout/Card";
import { IoPersonCircle } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { MdRemoveCircle } from "react-icons/md";
import '../../style.css';

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
      <section className='comment'>
        <div className='comment__person'>
          <div className='person'>
            <span>
              <IoPersonCircle className='person__icon' />
            </span>
            <h3 className='person__name'>{name}</h3>
          </div>
          <span>
            <AiFillHeart
              className='comment__add'
              onClick={addToFavouriteHandler}
              title="Add to favourites"
            />
            <MdRemoveCircle
              className='comment__remove'
              title="Remove from favourites"
              onClick={removeFavouriteHandler}
            />
          </span>
        </div>
        <div className='comment__body'>{body}</div>
        <div className='comment__email'>
          <div className='email'>
            <HiOutlineMail className='email__icon' />
          </div>
          <p>E-mail: {email}</p>
        </div>
      </section>
    </Card>
  );
};

export default CommentSection;
