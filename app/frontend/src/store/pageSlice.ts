import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'actualPage',
  initialState: {
    page: 1,
  },
  reducers: {
    setPage(state, { payload }) {
      return { ...state, page: payload };
    },
  },
});

export const { setPage } = slice.actions;

export default slice.reducer;
