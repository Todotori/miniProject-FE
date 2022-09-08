import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  isLoading: false,
  error: null,
  response: null,
};

export const checkEmailThunk = createAsyncThunk(
  "users/checkEmail",
  async (email, thunk) => {
    try {
      const {data} = await api.post("/api/emailcheck", {email});
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const checkEmailSlice = createSlice({
  name: "checkEmail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkEmailThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkEmailThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
      })
      .addCase(checkEmailThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default checkEmailSlice.reducer;
