import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'totalUsers',
  initialState: {
    total: 0,
  },
  reducers: {
    setTotal(state, { payload }) {
      return { ...state, total: payload };
    },
  },
});

export const { setTotal } = slice.actions;

export default slice.reducer;
