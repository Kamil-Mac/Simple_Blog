import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteComments: [],
  favouritePosts: [],
};

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    addComment(state, action) {
      const id = action.payload.id;
      const length = state.favouriteComments.length;
      if (length === 0) {
        state.favouriteComments.push(action.payload);
      } else {
        const isExisted = state.favouriteComments.find(
          (comment) => comment.id === id
        );
        if (!isExisted) {
          state.favouriteComments.push(action.payload);
        }
      }
    },
    removeComment(state, action) {
      const id = action.payload;
      const length = state.favouriteComments.length;
      if (length > 0) {
        state.favouriteComments = state.favouriteComments.filter(
          (comment) => comment.id !== id
        );
      }
    },
    addPost(state, action) {
        const id = action.payload.id;
        const length = state.favouritePosts.length;
        if (length === 0) {
          state.favouritePosts.push(action.payload);
        } else {
          const isExisted = state.favouritePosts.find(
            (post) => post.id === id
          );
          if (!isExisted) {
            state.favouritePosts.push(action.payload);
          }
        }
    },
    removePost(state, action) {
        const id = action.payload;
        const length = state.favouritePosts.length;
        if (length > 0) {
          state.favouritePosts = state.favouritePosts.filter(
            (post) => post.id !== id
          );
        }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
