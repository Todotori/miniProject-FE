import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  todos: [],
  count: 0,
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
export const __getMyTodos = createAsyncThunk(
  //로그인 상태에서만 가능.
  "todos/getMyTodos",
  async (payload, thunkAPI) => {
    try {
      let data;
      switch (payload) {
        case "WHOLE":
          const WholeTodos = await api.get("/todo/");
          data = WholeTodos.data;
          break;
        case "TODO":
          const Todos = await api.get("/todo/undone");
          data = Todos.data;
          break;
        case "DONE":
          const Dones = await api.get("/todo/done");
          data = Dones.data;
          break;
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodosCount = createAsyncThunk(
  "todos/getTodosCount",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.get("/todo/undone");
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
      console.log("🚀 ~ data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editTodo = createAsyncThunk(
  "todos/editTodo",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.put("/todo", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.delete(`/todo/${payload}`);
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
      const {data} = await api.put(`/todo/${payload}/done`, {
        id: payload,
        done: true,
      });
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
    [__getMyTodos.fulfilled]: (state, action) => {
      state.todos = action.payload.data;
    },

    [__addTodo.fulfilled]: (state, action) => {
      state.todos = [action.payload.data, ...state.todos];
    },
    [__addTodo.rejected]: (state, action) => {
      return;
    },
    [__editTodo.fulfilled]: (state, action) => {
      console.log('🔑', action.payload.data);
      const newState = state.todos.map(todo => {
        if (todo.id === action.payload.data.id) {
          todo = {
            ...todo,
            titie: action.payload.data.title,
            content: action.payload.data.content,
            tag: action.payload.data.tag,
          };
        }
      });
      state.todos = newState;
      return state;
    },
    [__updateIsDone.fulfilled]: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.data.id) {
          return (todo.done = action.payload.data.done);
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

    [__getTodosCount.fulfilled]: (state, action) => {
      state.count = action.payload.data.length;
    },
  },
});

export default todoSlice.reducer;
