import { configureStore } from '@reduxjs/toolkit';
import loggedSlice from './loggedSlice';

export default configureStore({
  reducer: {
    logged: loggedSlice,
  },
});
