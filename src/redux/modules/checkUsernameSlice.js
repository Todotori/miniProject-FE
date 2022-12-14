import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  isLoading: false,
  error: null,
  response: null,
};

export const checkUsernameThunk = createAsyncThunk(
  "users/checkUsername",
  async (username, thunk) => {
    try {
      const {data} = await api.post("/nickcheck", {nickname: username});
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const checkUsernameSlice = createSlice({
  name: "checkUsername",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUsernameThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUsernameThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(checkUsernameThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default checkUsernameSlice.reducer;
