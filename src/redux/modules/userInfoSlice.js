import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  isLoading: false,
  error: null,
  response: null,
};

export const __getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (user, thunk) => {
    try {
      const response = await api.get(`/member/${user}`);
      console.log(response);
      // return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.fulfilled]: (state, action) => {
      console.log(action);
    },
    [__getUserInfo.rejected]: (state, action) => {
      console.log(state, action);
    },
  },
});

export default userInfoSlice.reducer;
