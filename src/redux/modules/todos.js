import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.get("/todos");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
