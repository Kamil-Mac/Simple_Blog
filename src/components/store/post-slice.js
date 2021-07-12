import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    readAllPosts(state, action) {
      //I will read only first 20 posts, not 100
      const newPosts = [...action.payload.posts];
      for (let i in newPosts) {
        state.posts.push({
          id: newPosts[i].id - 1,
          userId: newPosts[i].userId,
          title: newPosts[i].title,
          body: newPosts[i].body,
        });
      }
    },
    readComments(state, action) {
        const newComments = [...action.payload.comments];
        //console.log(newComments, 'readcomments');
        for (let i in newComments) {
          state.comments.push({
            id: newComments[i].id - 1,
            postId: newComments[i].postId,
            name: newComments[i].name,
            body: newComments[i].body,
            email: newComments[i].email
          });
        };
    },
    resetCommentsState(state) {
       state.comments = initialState.comments;
    }
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
