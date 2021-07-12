import classes from "./BigArticle.module.css";
import CommentSection from "./CommentSection";
import { AiFillHeart } from "react-icons/ai";
import Card from "../Layout/Card";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCommentData } from "../store/post-actions";
import { MdRemoveCircle } from 'react-icons/md';
import { uiActions } from "../store/ui-slice";

const BigArticle = () => {

  const [isOpen, setIsOpen] = useState(false);
  const param = useParams();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.posts);

  const currentPost = [];
  
  for (let i in allPosts) {
    const post = allPosts[i];
    if (i === param.postId) {
      currentPost.push({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
      });
    }
  };

  const index = currentPost[0].id + 1;

  useEffect(() => {
    dispatch(fetchCommentData(index));
  }, [dispatch, index]);

  const commentsShow = useSelector((state) => state.posts.comments);

  const showCommentsHandler = () => {
    setIsOpen(prev => !prev);
  };

  const message = !isOpen ? "Show comments" : "Hide comments";

  const fPost = currentPost[0];
  const id = currentPost[0].id;

  const addToFavouriteHandler = () => {
    dispatch(uiActions.addPost(fPost, id));
  };

  const removeFavouriteHandler = () => {
    dispatch(uiActions.removePost(id));
  };

  return (
    <>
      <Card>
        <section className={classes.post}>
          <div className={classes.title}>
            <h1 className={classes.title__param}>{currentPost[0].title}</h1>
            <span>
              <AiFillHeart className={classes.title__add} title="Add to favourites" onClick={addToFavouriteHandler}/>
              <MdRemoveCircle className={classes.title__remove} title="Remove from favourites" onClick={removeFavouriteHandler} />
            </span>
          </div>
          <article className={classes.post__body}>
            {currentPost[0].body}
          </article>
        </section>
        <button className={classes.btnShow} onClick={showCommentsHandler}>{message}</button>
      </Card>
      
      {isOpen && commentsShow.map((comment) => (
          <CommentSection name={comment.name} key={comment.id} body={comment.body} email={comment.email} id={comment.id} />
        ))}
    </>
  );
};

export default BigArticle;
