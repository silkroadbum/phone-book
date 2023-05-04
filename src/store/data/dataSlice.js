import { createSlice } from '@reduxjs/toolkit';
import { peoples } from '../../const';
import { sortByNameDesc, sortByNameAsc, sortByBirthdayDesc, sortByBirthdayAsc } from '../../utils';

const initialState = {
  data: peoples,
  sortData: { id: 0, name: 'имени(возр.)' },
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
          state.data = state.data.sort(sortByNameDesc);
          break;
        case 1:
          state.data = state.data.sort(sortByNameAsc);
          break;
        case 2:
          state.data = state.data.sort(sortByBirthdayDesc);
          break;
        case 3:
          state.data = state.data.sort(sortByBirthdayAsc);
          break;
        default:
          break;
      }
    },
  },
});

export const { updateList, removeItem, addItem, setSort, sortingList } = dataSlice.actions;

export default dataSlice.reducer;
