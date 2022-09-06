import {createSlice} from "@reduxjs/toolkit";

const initialState = ["전체보기"];

const tagSlice = createSlice({
  name: "hashtags",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.push(action.payload);
    },
    deleteTag: (state, action) => {
      return state.filter((tag) => tag !== action.payload);
    },
  },
});

export default tagSlice.reducer;
export const {addTag, deleteTag} = tagSlice.actions;
