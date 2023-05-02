import { createSlice } from '@reduxjs/toolkit';
import { peoples } from '../../const';

const initialState = {
  data: peoples,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateList: (state, action) => {
      state.data = action.payload;
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((_, i) => i !== action.payload);
    },
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { updateList, removeItem, addItem } = dataSlice.actions;

export default dataSlice.reducer;
