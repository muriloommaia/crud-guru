import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'logged',
  initialState: {
    logged: false,
  },
  reducers: {
    setLogged(state, { payload }) {
      return { ...state, logged: payload };
    },
  },
});

export const { setLogged } = slice.actions;

export default slice.reducer;
