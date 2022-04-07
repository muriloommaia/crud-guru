import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
});

export const { setFilter } = slice.actions;

export default slice.reducer;
