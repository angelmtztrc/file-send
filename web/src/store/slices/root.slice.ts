import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IRootState = {
  modal: 'link' | 'sign-in' | 'sign-up' | 'none';
};

const initialState: IRootState = {
  modal: 'none'
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setActiveModal: (
      state,
      { payload }: PayloadAction<'link' | 'sign-in' | 'sign-up' | 'none'>
    ) => {
      state.modal = payload;

      return state;
    }
  }
});

export const { setActiveModal } = rootSlice.actions;

export default rootSlice.reducer;
