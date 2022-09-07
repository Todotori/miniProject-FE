import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  success: false,
  data: {nickname: "", email: "", company: ""},
  error: null,
};

export const __getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (user, thunk) => {
    try {
      const response = await api.get(`/member`);
      return thunk.fulfillWithValue(response.data);
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
      return (state = action.payload);
    },
    [__getUserInfo.rejected]: (state, action) => {
      console.log(state, action);
    },
  },
});

export default userInfoSlice.reducer;
