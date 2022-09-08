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
      console.log(response);
      return thunk.fulfillWithValue(response.data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const __editUserInfo = createAsyncThunk(
  "users/editUserInfo",
  async (payload, thunkAPI) => {
    try {
      const {data} = await api.put("/member", payload, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.pending]: (state, action) => {
      state = initialState;
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [__getUserInfo.rejected]: (state, action) => {
      // console.log(state, action);
    },
    [__editUserInfo.fulfilled]: (state, action) => {
      state.data = {
        ...state.data,
        comment: action.payload.data.comment,
        company: action.payload.data.company,
        profileImage: action.payload.data.profileImage,
      };
    },
  },
});

export default userInfoSlice.reducer;
