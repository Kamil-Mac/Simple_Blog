import { useSelector } from "react-redux";
import Comment from "./Comment";
import Post from "./Post";
import '../../style.css';

const Favourite = () => {
  const comments = useSelector((state) => state.ui.favouriteComments);
  const posts = useSelector((state) => state.ui.favouritePosts);

  return (
    <section className='container'>
      <h2 className='container__titles'>Articles</h2>
      {posts.map((post) => (
        <Post body={post.body} title={post.title} key={post.id} id={post.id} />
      ))}
      <h2 className='container__titles'>Comments</h2>
      {comments.map((comment) => (
        <Comment
          body={comment.body}
          email={comment.email}
          name={comment.name}
          key={comment.id}
          id={comment.id}
        />
      ))}
    </section>
  );
};

export default Favourite;
