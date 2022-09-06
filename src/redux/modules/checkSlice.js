import { toUnitless } from '@mui/material/styles/cssUtils';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.push(action.payload);
    },
    deleteTag: (state, action) => {
      // console.log(action); // payload:항목
      return state.filter(tag => tag !== action.payload);
    },
  },
});

export const { addTag, deleteTag } = checkSlice.actions;
export default checkSlice.reducer;
