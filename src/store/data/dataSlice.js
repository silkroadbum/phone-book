import { createSlice } from '@reduxjs/toolkit';
import { peoples } from '../../const';

const initialState = {
  data: peoples,
  sortData: { id: 0, name: 'По имени(возрастание)' },
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
    setSort: (state, action) => {
      state.sortData = action.payload;
    },
    sortingList: (state, action) => {
      switch (action.payload) {
        case 0:
          state.data = state.data.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else {
              return 0;
            }
          });
          break;
        case 1:
          state.data = state.data.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        default:
          break;
      }
    },
  },
});

export const { updateList, removeItem, addItem, setSort, sortingList } = dataSlice.actions;

export default dataSlice.reducer;
