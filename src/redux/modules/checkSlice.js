import api from '../../../db.json';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
};

export const __getTodos = createAsyncThunk('todos/getTodos', async (payload, thunkAPI) => {
  try {
    const { data } = await api.get('/todo');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    
  },
});
