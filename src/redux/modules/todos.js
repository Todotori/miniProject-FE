import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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
      const {data} = await api.get("/todo/all");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.post("/todo", payload);
      console.log('🚀 ~ data', data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifyTodo = createAsyncThunk();

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.delete(`/todo/${payload}`);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateIsDone = createAsyncThunk(
  "todos/updateIsDone",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.put(`/todo/${payload}/done`, {done: true});
      console.log(data);
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
      state.todos = action.payload.data;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__addTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload.data);
    },
    [__addTodo.rejected]: (state, action) => {
      return;
    },

    [__updateIsDone.fulfilled]: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return (todo.isDone = action.payload.isDone);
        } else {
          return todo;
        }
      });
    },
    [__updateIsDone.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      if (!action.payload.success) {
        return;
      }
      state.todos = state.todos.filter((todo) => todo.id !== action.meta.arg);
      return state;
    },
  },
});

export default todoSlice.reducer;
