import { postActions } from "./post-slice";
// import { uiActions } from './ui-slice';

export const fetchPostData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Couldnt fetch data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const postsData = await fetchData();
      const newArray = postsData.filter((post) => post.userId < 3);
      //console.log(newArray);
      dispatch(
        postActions.readAllPosts({
          posts: newArray,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCommentData = (index) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${index}`
      );

      if (!response.ok) {
        throw new Error("Couldnt fetch data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const commentsData = await fetchData();
      //console.log(commentsData);
      dispatch(
        postActions.readComments({
          comments: commentsData,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
