import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
