import Card from "../Layout/Card";
import { MdRemoveCircle } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import '../../style.css';

const BigArticle = ({ title, body, id }) => {

  const dispatch = useDispatch();

  const removeFavouriteHandler = () => {
    dispatch(uiActions.removePost(id));
  };

  return (
    <Card>
      <section className='post'>
        <div className='title'>
          <h1 className='title__param'>{title}</h1>
          <MdRemoveCircle
              className='title__remove'
              title="Remove from favourites"
              onClick={removeFavouriteHandler}
            />
        </div>
        <article className='post__body'>{body}</article>
      </section>
    </Card>
  );
};

export default BigArticle;
