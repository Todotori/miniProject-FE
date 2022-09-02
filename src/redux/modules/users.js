import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: null
};

const createUserThunk = createAsyncThunk("users/createUser", async (newUser, thunk) => {
  try {
    await axios.post("/users", newUser);
    return thunk.fulfillWithValue("Registration succeeded");
  } catch(error) {
    return thunk.rejectWithValue(error);
  }
})

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUserThunk.pending, (state) => {
      state.isLoading = true;
    }).addCase(createUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    }).addCase(createUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
});

export default usersSlice.reducer;
