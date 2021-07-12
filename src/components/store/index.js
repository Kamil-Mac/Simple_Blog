import { configureStore } from '@reduxjs/toolkit';
import postSlice from './post-slice';
import uiSlice from './ui-slice.js';

const store = configureStore({
    reducer: { ui: uiSlice, posts: postSlice }
});

export default store;