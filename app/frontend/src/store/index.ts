import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import loggedSlice from './loggedSlice';
import pageSlice from './pageSlice';

export const store = configureStore({
  reducer: {
    logged: loggedSlice,
    actualPage: pageSlice,
    filter: filterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
