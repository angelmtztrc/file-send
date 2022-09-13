import { createSlice } from '@reduxjs/toolkit';

type IRootState = {
  modal: 'link' | 'sign-in' | 'sign-up' | 'none';
};

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    modal: 'none'
  } as IRootState,
  reducers: {}
});

export default rootSlice.reducer;
